import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useState } from 'react'

export default function FormUpdateProduit({ aff, produits, onSuccess }) {
    const [nom, setNom] = useState(produits.nom)
    const [ref, setRef] = useState(produits.ref)
    const [prix_achat, setPrix_achat] = useState(produits.prix_achat)
    const [prix_vente, setPrix_vente] = useState(produits.prix_vente)
    const [stock, setStock] = useState(produits.stock)
    const [categorie, setCategorie] = useState(produits.categorie)
    const [statut, setStatut] = useState(produits.statut)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = { nom, ref, prix_achat, prix_vente, stock, categorie, statut }
            const response = await axios.put(`https://api-sgbd.onrender.com/api/produit/${produits.id}`, data)

            console.log(response.data);

            // Appeler la fonction onSuccess pour rafraîchir la liste
            if (onSuccess) {
                onSuccess();
            }

            // Fermer le modal
            aff(false)

        } catch (error) {
            console.error("Erreur lors de la mise à jour du produit:", error);
            // Ici vous pouvez ajouter une notification d'erreur si nécessaire
        }
    }

    return (
        <>
            <div className='forms-containers'>
                <form action="#">
                    <div className='entete'>
                        <ClipboardPen size={35} />
                        <h2>Formulaire de modification d'un produit</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label htmlFor="">Nom produit</label>
                            <input type="text" defaultValue={nom} onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Reference Produit</label>
                            <input type="number" defaultValue={ref} onChange={(e) => setRef(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Prix d'achat</label>
                            <input type="number" defaultValue={prix_achat} onChange={(e) => setPrix_achat(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Prix de vente</label>
                            <input type="number" defaultValue={prix_vente} onChange={(e) => setPrix_vente(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Stock produoit</label>
                            <input type="number" defaultValue={stock} onChange={(e) => setStock(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Categorie du produit</label>
                            <input type="text" defaultValue={categorie} onChange={(e) => setCategorie(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Statut du produit</label>
                            <select defaultValue={statut} onChange={(e) => setStatut(e.target.value)}>
                                <option value="">choisir le statut</option>
                                <option value="plein">Plein</option>
                                <option value="vide">vide</option>
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label htmlFor="">Fournisseur du produit</label>
                            <select>
                                <option value="">choisir le statut</option>
                                <option value="plein">Plein</option>
                                <option value="vide">vide</option>
                            </select>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='cancel' type="button" onClick={() => aff(false)}>Annuler</button>
                        <button type="submit" onClick={handleSubmit}>Modifier</button>
                    </div>
                </form>
            </div>
        </>
    )
}