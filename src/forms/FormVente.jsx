import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../IsEmpty'

export default function FormVente({ aff, onSucess }) {
    const [dataP, setDataP] = useState([])
    const [dataC, setDataC] = useState([])

    const [produit_id, setProduit_id] = useState()
    const [dates, setDates] = useState()
    const [client_id, setClient_id] = useState()
    const [prix_unitaire, setPrix_vente] = useState()
    const [quantite, setQuantite] = useState()
    const [mode_paiement, setMode_paiement] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const total = quantite * prix_unitaire
        const data = { prix_unitaire, produit_id, client_id, dates, quantite, montant_total: total, mode_paiement }
        await axios.post('https://api-sgbd.onrender.com/api/vente/new', data).then((res) => {
            console.log(res.data);
        })
        if (onSucess) {
            onSucess();
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
            const res = await axios.get('https://api-sgbd.onrender.com/api/client/')
            setDataC(res.data.data)
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
                        <h2>Formulaire d'ajout d'une vente</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label for="">Nom produit</label>
                            <select onChange={(e) => setProduit_id(e.target.value)}>
                                <option value="">choisir le produit</option>
                                {!isEmpty(dataP) && dataP.map((data) => (
                                    <option key={data.id} value={data.id}>{data.nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label for="">Date de vente</label>
                            <input type="date" onChange={(e) => {
                                setDates(e.target.value)
                                console.log(e.target.value);
                                console.log(dates);

                            }} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Nom du client</label>
                            <select onChange={(e) => setClient_id(e.target.value)}>
                                <option value="">choisir le client</option>
                                {!isEmpty(dataC) && dataC.map((data) => (
                                    <option key={data.id} value={data.id}>{data.nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label for="">Prix de vente</label>
                            <input type="text" onChange={(e) => setPrix_vente(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">quantite</label>
                            <input type="number" onChange={(e) => setQuantite(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Montant-total</label>
                            <input type="number" value={quantite * prix_unitaire} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">mode de paiement</label>
                            <select onChange={(e) => setMode_paiement(e.target.value)}>
                                <option value="">choisir le mode de paiement</option>
                                <option value="especes">especes</option>
                                <option value="carte">carte</option>
                                <option value="cheque">cheque</option>
                                <option value="virement">virement</option>
                                <option value="mobile_money">mobile money</option>
                            </select>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='cancel' onClick={() => aff(false)}>Annuler</button>
                        <button onClick={handleSubmit}>Ajouter</button>
                    </div>
                </form>
            </div>
        </>
    )
}
