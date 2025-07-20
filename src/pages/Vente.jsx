import { CircleDashed, Eye, ShoppingBag, SquarePen, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FormVente from '../forms/FormVente'
import Portal from "../components/Portal";
import { isEmpty } from '../IsEmpty';
import axios from 'axios';
import FormUpdateVente from '../forms/FormUpdateVente';
import BoxDeleteV from '../components/BoxDeleteV';

export default function Vente() {
    const [aff, setAff] = useState(false)
    const [aff1, setAff1] = useState(false)
    const [aff2, setAff2] = useState(false)
    const [vente, setVente] = useState()
    const [venteData, setVenteData] = useState([])
    const fetchVentes = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/vente/')
            setVenteData(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des Ventes :", err)
        }
    }
    function formatDate(dateString) {
        const date = new Date(dateString).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return date;
    }
    const refreshProduits = () => {
        fetchVentes()
    }

    useEffect(() => {
        fetchVentes()
    }, [])
    return (
        <>
            <div className='produits-container'>
                <nav>
                    <p>
                        <ShoppingBag size={35} />
                        <span>Ventes({venteData.length})</span>
                    </p>
                </nav>
                <div className='body-container'>
                    <div className='nav-data'>
                        {!isEmpty(venteData) && venteData.length === 0 ? (
                            <div className='btn'></div>
                        ) : (
                            <div className='btn'>
                                <button onClick={() => setAff(true)}>+ Nouvelle vente</button>
                            </div>
                        )}
                        <div className='nav'>
                            <li>Nom Produit</li>
                            <li>Prix_vente</li>
                            <li>Quantite vendue</li>
                            <li>Montant_total</li>
                            <li>Nom_client</li>
                            <li>Date vente</li>
                            <li>options</li>
                        </div>
                    </div>
                    <div className='container-data'>
                        {!isEmpty(venteData) && venteData.length === 0 ? (
                            <div className='one-none'>
                                <p>Aucune vente effectuer</p>
                                <div className='btn'>
                                    <button onClick={() => setAff(true)}>+ votre premiere vente</button>
                                </div>
                            </div>
                        ) : (
                            venteData.map((vente) => (
                                <div key={vente.id} className='card-prod'>
                                    <li>{vente.produit_nom}</li>
                                    <li>{vente.produit_prix_vente}</li>
                                    <li>{vente.quantite}</li>
                                    <li>{vente.montant_total} f</li>
                                    <li>{vente.client_nom}</li>
                                    <li>{formatDate(vente.dates)}</li>
                                    <li>
                                        <section>
                                            <Eye />
                                            <SquarePen onClick={() => {
                                                setVente(vente)
                                                setAff1(true)
                                            }} />
                                            <Trash onClick={() => {
                                                setVente(vente)
                                                setAff2(true)
                                            }} />
                                        </section>
                                    </li>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                </div>
            </div>
            {aff && <Portal><FormVente aff={setAff} onSucess={refreshProduits} /></Portal>}
            {aff1 && <Portal><FormUpdateVente aff={setAff1} vente={vente} onSucess={refreshProduits} /></Portal>}
            {aff2 && <Portal><BoxDeleteV aff={setAff2} vente={vente} onSucess={refreshProduits} /></Portal>}
        </>
    )
}
