import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../IsEmpty'

export default function FormFournisseur({ aff, success }) {
    const [nom, setNom] = useState()
    const [email, setEmail] = useState()
    const [telephone, setTelephone] = useState()
    const [adresse, setAdresse] = useState()
    const [produit_id, setProduit_id] = useState()
    const [dataP, setDataP] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { nom, email, telephone, adresse, produit_id }
        await axios.post('https://api-sgbd.onrender.com/api/fournisseur/new', data).then((res) => {
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
    useEffect(() => {
        fetchProduits()
    }, [])
    return (
        <>
            <div className='forms-containers'>
                <form action="#">
                    <div className='entete'>
                        <ClipboardPen size={35} />
                        <h2>Formulaire d'ajout d'un fournisseur</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label for="">Nom fournisseur</label>
                            <input type="text" onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Telephone</label>
                            <input type="tel" onChange={(e) => setTelephone(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Adresse</label>
                            <input type="text" onChange={(e) => setAdresse(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Nom produit a fournir</label>
                            <select onChange={(e) => setProduit_id(e.target.value)}>
                                <option value="">choisir le produit</option>
                                {!isEmpty(dataP) && dataP.map((data) => (
                                    <option key={data.id} value={data.id}>{data.nom}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='cancel' onClick={() => aff(false)}>Annuler</button>
                        <button onClick={handleSubmit}>Ajouter</button>
                    </div>
                </form>
            </div></>
    )
}
