import { CircleDashed, Eye, SquarePen, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import FormProduit from '../forms/FormProduit';
import Portal from "../components/Portal";
import axios from 'axios';
import { isEmpty } from '../IsEmpty';
import FormUpdateProduit from '../forms/FormUpdateProduit';
import BoxDelete from '../components/BoxDelete';
import ViewProduit from '../components/ViewProduit';

export default function Produit() {
    const [aff, setAff] = useState(false)
    const [aff1, setAff1] = useState(false)
    const [aff2, setAff2] = useState(false)
    const [aff3, setAff3] = useState(false)
    const [produit, setProduit] = useState()
    const [produitData, setProduitData] = useState([])

    const fetchProduits = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/produit/')
            setProduitData(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }

    // Fonction pour rafraîchir la liste après une action
    const refreshProduits = () => {
        fetchProduits()
    }



    function formatDate(dateString) {
        const date = new Date(dateString).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return date;
    }

    useEffect(() => {
        fetchProduits()
    }, [])

    return (
        <>
            {aff3 ? (
                <>
                    <ViewProduit aff={setAff3} produit={produit} />
                </>
            ) : (
                <>
                    <div className='produits-container'>
                        <nav>
                            <p>
                                <CircleDashed size={35} />
                                <span>Produits({produitData.length})</span>
                            </p >
                        </nav >
                        <div className='body-container'>
                            <div className='nav-data'>
                                {isEmpty(produitData) ? (
                                    <div className='btn'></div>
                                ) : (
                                    <div className='btn'>
                                        <button onClick={() => setAff(true)}>+ Ajouter un produit</button>
                                    </div>
                                )}
                                <div className='nav'>
                                    <li>Nom Produit</li>
                                    <li>Prix_achat</li>
                                    <li>Prix_vente</li>
                                    <li>Quantite en stock</li>
                                    <li>Fournisseur</li>
                                    <li>Date Livraison</li>
                                    <li>options</li>
                                </div>
                            </div>
                            <div className='container-data'>
                                {isEmpty(produitData) ? (
                                    <div className='one-none'>
                                        <p>Aucun produit enregistrer pour l'instant</p>
                                        <div className='btn'>
                                            <button onClick={() => setAff(true)}>+ Ajouter le premier produit</button>
                                        </div>
                                    </div>
                                ) : (
                                    produitData.map((produit) => (
                                        <div key={produit.id} className='card-prod'>
                                            <li>{produit.nom}</li>
                                            <li>{produit.prix_achat} f</li>
                                            <li>{produit.prix_vente} f</li>
                                            <li>{produit.stock}</li>
                                            <li>Albien choune</li>
                                            <li>{formatDate(produit.created_at)}</li>
                                            <li>
                                                <section>
                                                    <Eye onClick={() => {
                                                        setProduit(produit)
                                                        setAff3(true)
                                                    }} />
                                                    <SquarePen onClick={() => {
                                                        setProduit(produit)
                                                        setAff1(true)
                                                    }} />
                                                    <Trash onClick={() => {
                                                        setProduit(produit)
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
                    </div >
                    {aff &&
                        <Portal>
                            <FormProduit
                                aff={setAff}
                                onSuccess={refreshProduits}
                            />
                        </Portal>
                    }
                    {aff1 &&
                        <Portal>
                            <FormUpdateProduit
                                aff={setAff1}
                                produits={produit}
                                onSuccess={refreshProduits}
                            />
                        </Portal>
                    }
                    {aff2 &&
                        <Portal>
                            <BoxDelete
                                aff={setAff2}
                                produits={produit}
                                onSuccess={refreshProduits}
                            />
                        </Portal>
                    }
                </>
            )}
        </>
    )
}