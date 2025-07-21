import { Eye, PackageOpen, SquarePen, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Portal from "../components/Portal";
import FormCommande from '../forms/FormCommande';
import axios from 'axios';
import { isEmpty } from '../IsEmpty';
import FormUpdateCommande from '../forms/FormUpdateCommande';
import BoxDeleteC from '../components/BoxDeleteC';

export default function Commande() {
    const [aff, setAff] = useState(false)
    const [aff1, setAff1] = useState(false)
    const [aff2, setAff2] = useState(false)
    const [commande, setCommnde] = useState([])
    const [commandeData, setCommndeData] = useState([])
    const fetchFournisseurs = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/commande/')
            setCommndeData(res.data.data)
            console.log(res.data.data);

        } catch (err) {
            console.error("Erreur lors de la récupération des commandes :", err)
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
        fetchFournisseurs()
    }

    useEffect(() => {
        fetchFournisseurs()
    }, [])
    return (
        <>
            <div className='produits-container'>
                <nav>
                    <p>
                        <PackageOpen size={35} />
                        <span>Commandes({commandeData.length})</span>
                    </p>
                </nav>
                <div className='body-container'>
                    <div className='nav-data'>
                        {isEmpty(commandeData) ? (
                            <div className='btn'></div>
                        ) : (
                            <div className='btn'>
                                <button onClick={() => setAff(true)}>+ Ajouter une nouvelle commande</button>
                            </div>
                        )}
                        <div className='nav'>
                            <li>Nom Produit</li>
                            <li>Prix_achat</li>
                            <li>Quantite</li>
                            <li>Fournisseur</li>
                            <li>Date Livraison</li>
                            <li>Statut</li>
                            <li>options</li>
                        </div>
                    </div>
                    <div className='container-data'>
                        {isEmpty(commandeData) ? (
                            <div className='one-none'>
                                <p>Aucune commande enregistrée</p>
                                <div className='btn'>
                                    <button onClick={() => setAff(true)}>+ Ajouter une nouvelle commande</button>
                                </div>
                            </div>

                        ) : (
                            commandeData.map((commande) => (
                                <div key={commande.id} className='card-prod'>
                                    <li>{commande.produit_nom}</li>
                                    <li>{commande.prix_unitaire}</li>
                                    <li>{commande.quantite}</li>
                                    <li>{commande.fournisseur_nom}</li>
                                    <li>{formatDate(commande.dates)}</li>
                                    <li>{commande.statut}</li>
                                    <li>
                                        <section>
                                            <Eye />
                                            <SquarePen onClick={() => {
                                                setCommnde(commande)
                                                setAff1(true)
                                            }} />
                                            <Trash onClick={() => {
                                                setCommnde(commande)
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
            {aff && <Portal><FormCommande aff={setAff} success={refreshProduits} /></Portal>}
            {aff1 && <Portal><FormUpdateCommande aff={setAff1} commande={commande} success={refreshProduits} /></Portal>}
            {aff2 && <Portal><BoxDeleteC aff={setAff2} commande={commande} success={refreshProduits} /></Portal>}
        </>
    )
}
