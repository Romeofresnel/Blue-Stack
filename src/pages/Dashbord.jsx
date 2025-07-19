import axios from 'axios'
import { CircleDashed, LayoutDashboard, ShoppingBag, Users, UsersRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'

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
                                <div className='card-five'>
                                    <CircleDashed />
                                    <h3>RIZ SUZA</h3>
                                    <h3>15000.00 f</h3>
                                    <h3>500</h3>
                                </div>
                                <div className='card-five'>
                                    <CircleDashed />
                                    <h3>RIZ casser</h3>
                                    <h3>11000.00 f</h3>
                                    <h3>100</h3>
                                </div>
                                <div className='card-five'>
                                    <CircleDashed />
                                    <h3>fruitas</h3>
                                    <h3>1500.00 f</h3>
                                    <h3>400</h3>
                                </div>
                                <div className='card-five'>
                                    <CircleDashed />
                                    <h3>BIC 100</h3>
                                    <h3>100.00 f</h3>
                                    <h3>1500</h3>
                                </div>
                                <div className='card-five'>
                                    <CircleDashed />
                                    <h3>chipres</h3>
                                    <h3>15000.00 f</h3>
                                    <h3>500</h3>
                                </div>
                            </div>
                        </div>
                        <div className='rigth'>
                            <div className='top'>
                                <p>
                                    <ShoppingBag />
                                    <span>Vente effectuer recements</span>
                                </p>
                                <div className='container-five'>
                                    <div className='card-five'>
                                        <ShoppingBag />
                                        <span>19/06/2025</span>
                                        <span>25000.00 f</span>
                                        <span>Riz suza</span>
                                        <span>02 Qts</span>
                                        <span>George ben</span>
                                        <span>paiement differer</span>
                                    </div>
                                    <div className='card-five'>
                                        <ShoppingBag />
                                        <span>19/06/2025</span>
                                        <span>25000.00 f</span>
                                        <span>Riz suza</span>
                                        <span>02 Qts</span>
                                        <span>George ben</span>
                                        <span>paiement differer</span>
                                    </div>
                                    <div className='card-five'>
                                        <ShoppingBag />
                                        <span>19/06/2025</span>
                                        <span>25000.00 f</span>
                                        <span>Riz suza</span>
                                        <span>02 Qts</span>
                                        <span>George ben</span>
                                        <span>paiement differer</span>
                                    </div>
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
