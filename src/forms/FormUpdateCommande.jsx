import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../IsEmpty'

export default function FormUpdateCommande({ aff, commande, success }) {
    const [dataF, setDataF] = useState([])
    const [dataP, setDataP] = useState([])

    const [produit_id, setProduit_id] = useState(commande.produit_id)
    const [dates, setDates] = useState(commande.dates)
    const [fournisseur_id, setFournisseur_id] = useState(commande.fournisseur_id)
    const [quantite, setQuantite] = useState(commande.quantite)
    const [prix_unitaire, setPrix_unitaire] = useState(commande.prix_unitaire)
    const [statut, setStatut] = useState(commande.statut)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const total = quantite * prix_unitaire
        const data = { produit_id, quantite, prix_unitaire, dates, fournisseur_id, montant_total: total, statut }
        await axios.put(`https://api-sgbd.onrender.com/api/commande/${commande.id}`, data).then((res) => {
            console.log(res.data);
        })
        if (success) {
            success();
        }
        aff(false)
    }
    const fetchProduits = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/produit/')
            setDataP(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err)
        }
    }
    const fetchClient = async () => {
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
    }, [])
    return (

        <>
            <div className='forms-containers'>
                <form action="#">
                    <div className='entete'>
                        <ClipboardPen size={35} />
                        <h2>Formulaire de commande d'approvissionement</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label for="">Nom produit</label>
                            <select defaultValue={produit_id} onChange={(e) => setProduit_id(e.target.value)} >
                                <option value="">choisir le produit</option>
                                {!isEmpty(dataP) && dataP.map((data) => (
                                    <option key={data.id} value={data.id}>{data.nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label for="">Date de livraison</label>
                            <input type="date" defaultValue={dates} onChange={(e) => setDates(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">quantite</label>
                            <input type="number" defaultValue={quantite} onChange={(e) => setQuantite(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Prix_unitaire</label>
                            <input type="number" defaultValue={prix_unitaire} onChange={(e) => setPrix_unitaire(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Montant_total</label>
                            <input type="number" defaultValue={commande.montant_total} value={quantite * prix_unitaire} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Fournisseur</label>
                            <select defaultValue={fournisseur_id} onChange={(e) => setFournisseur_id(e.target.value)} >
                                <option value="">choisir le fournisseur</option>
                                {!isEmpty(dataF) && dataF.map((data) => (
                                    <option key={data.id} value={data.id}>{data.nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label for="">statut de commande</label>
                            <select defaultValue={statut} onChange={(e) => setStatut(e.target.value)} >
                                <option value="">choisir un statut</option>
                                <option value="en_attente">en attente</option>
                                <option value="confirmee">confirmee</option>
                                <option value="annuler">annuler</option>
                            </select>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='cancel' onClick={() => aff(false)}>Annuler</button>
                        <button onClick={handleSubmit}>Modifier</button>
                    </div>
                </form>
            </div>
        </>

    )
}
