import axios from 'axios'
import { CircleDashed, LayoutDashboard, ShoppingBag, Users, UsersRound } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { isEmpty } from '../IsEmpty'

export default function Dashbord() {
    const [dataP, setDataP] = useState([])
    const [dataC, setDataC] = useState([])
    const [dataF, setDataF] = useState([])
    const [dataV, setDataV] = useState([])


    const fetchProduits = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/produit/')
            setDataP(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }
    const fetchVentes = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/vente/')
            setDataV(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des Ventes :", err)
        }
    }
    const fetchClient = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/client/')
            setDataC(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }
    const fetchFournisseur = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/fournisseur/')
            setDataF(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }
    useEffect(() => {
        fetchClient(),
            fetchProduits()
        fetchFournisseur()
        fetchVentes()
    }, [])
    const getDeuxActivitesRecentes = useMemo(() => {
        const projectTriees = dataP.sort(
            (a, b) => b.updatedAt - a.updatedAt
        );
        const deuxActivitesRecentes = projectTriees.slice(0, 4);
        return deuxActivitesRecentes;
    }, [dataP]);
    const getDeuxActivitesRecente = useMemo(() => {
        const projectTriees = dataV.sort(
            (a, b) => b.updatedAt - a.updatedAt
        );
        const deuxActivitesRecentes = projectTriees.slice(0, 4);
        return deuxActivitesRecentes;
    }, [dataV]);
    function formatDate(dateString) {
        const date = new Date(dateString).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return date;
    }
    return (
        <>
            <div className='dashbord-container'>
                <nav>
                    <p>
                        <LayoutDashboard />
                        <span>Dashbord</span>
                    </p>
                </nav>
                <div className='body-container'>
                    <div className='top'>
                        <div className="medecin-cards-recap">
                            <div className="cards-recap medecin">
                                <CircleDashed />
                                <p className="pp-2">
                                    <h2>Produit en stock</h2>
                                    <p><span>{dataP.length}</span> produits</p>
                                </p>            </div>
                            <div className="cards-recap infirmiere">
                                <Users />
                                <p className="pp-2">
                                    <h2>Nombre de client</h2>
                                    <p> <span>{dataC.length}</span> clients</p>
                                </p>            </div>
                            <div className="cards-recap admin">
                                <UsersRound />
                                <p className="pp-2">
                                    <h2>Fournisseus</h2>
                                    <p><span>{dataF.length}</span> fournisseurs</p>
                                </p>
                            </div>
                            <div className="cards-recap licencier">
                                <ShoppingBag />
                                <p className="pp-2">
                                    <h2>Vente total</h2>
                                    <p><span>{dataV.length}</span> revenues</p>
                                </p>            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='left'>
                            <p>
                                <CircleDashed />
                                <span>Produit recents</span>
                            </p>
                            <div className='container-five'>
                                {isEmpty(dataP) && dataP.length === 0 ? (
                                    <div>Aucun produit recemment ajouter</div>
                                ) : (
                                    getDeuxActivitesRecentes.map((data, index) => (
                                        <div key={index} className='card-five'>
                                            <CircleDashed />
                                            <h3>{data.nom}</h3>
                                            <h3>{data.prix_vente}f</h3>
                                            <h3>{data.stock}</h3>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className='rigth'>
                            <div className='top'>
                                <p>
                                    <ShoppingBag />
                                    <span>Vente effectuer recements</span>
                                </p>
                                <div className='container-five'>
                                    {isEmpty(dataV) && dataV.length === 0 ? (
                                        <div className=''>Aucune vente effectuer recement</div>
                                    ) : (
                                        getDeuxActivitesRecente.map((data, index) => (
                                            <div key={index} className='card-five'>
                                                <ShoppingBag />
                                                <span>{formatDate(data.updatedAt)}</span>
                                                <span>{data.montant_total}f</span>
                                                <span>{data.produit_nom}</span>
                                                <span>{data.quantite} Qts</span>
                                                <span>{data.client_nom}</span>
                                                <span>{data.mode_paiement}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className='bottom'>
                                <div className='circle'></div>
                                <div className='circle1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
