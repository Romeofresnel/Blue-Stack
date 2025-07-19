import axios from 'axios'
import { ChevronLeft, CircleDashed, Eye, PackageOpen, ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../IsEmpty'

export default function ViewProduit({ aff, produit }) {
    const [produitData, setProduitData] = useState([])
    const [produitData1, setProduitData1] = useState([])
    const fetchProduits = async () => {
        try {
            const res = await axios.get(`https://api-sgbd.onrender.com/api/produit/vente/${produit.id}`)
            setProduitData(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }
    const fetchProduit = async () => {
        try {
            const res = await axios.get(`https://api-sgbd.onrender.com/api/produit/commande/${produit.id}`)
            setProduitData1(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }
    console.log(produitData);

    useEffect(() => {
        fetchProduits()
        fetchProduit()
    }, [])
    return (
        <>
            <div className='view-container'>
                <div className='top'>
                    <p onClick={() => aff(false)}>
                        <ChevronLeft size={35} />
                        <span>Produit/{produit.nom}</span>
                    </p>
                </div>
                <div className='bottom'>
                    <div className='view-left'>
                        <div className='slide-info'>
                            <CircleDashed size={100} />
                            <h1>{produit.nom}</h1>
                            <h2>{produit.ref}</h2>
                            <h3>{produit.prix_vente} f</h3>
                            <h4>{produit.stock} produit</h4>
                        </div>
                        <div className='slide-button'>
                            <button>Modifier le produit</button>
                            <button>supprimer le produit</button>
                        </div>
                    </div>
                    <div className='view-rigth'>
                        <div className='section-top'>
                            <p>
                                <ShoppingBag />
                                <span>Ventes effectuer pour ce produit({produitData.length})</span>
                            </p>
                            <div className='container'>
                                {!isEmpty(produitData) && produitData.map((produits) => (

                                    <div className='cards'>
                                        <li>{produit.nom}</li>
                                        <li>{produits.quantite}</li>
                                        <li>{produits.montant_total} f</li>
                                        <li>{produits.client_nom}</li>
                                        <li>{produits.mode_paiement}</li>
                                        <Eye />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='section-bottom'>
                            <p>
                                <PackageOpen />
                                <span>commande effectuer pour ce produit({produitData1.length})</span>
                            </p>
                            <div className='container'>
                                {!isEmpty(produitData1) && produitData1.map((produits) => (

                                    <div className='cards'>
                                        <li>{produit.nom}</li>
                                        <li>{produits.quantite}</li>
                                        <li>{produits.montant_total} f</li>
                                        <li>{produits.fournisseur_nom}</li>
                                        <li>{produits.mode_paiement}</li>
                                        <Eye />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
