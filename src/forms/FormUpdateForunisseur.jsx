import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../IsEmpty'

export default function FormUpdateForunisseur({ aff, four, success }) {
    const [nom, setNom] = useState(four.nom)
    const [email, setEmail] = useState(four.email)
    const [telephone, setTelephone] = useState(four.telephone)
    const [adresse, setAdresse] = useState(four.adresse)
    const [produit_id, setProduit_id] = useState(four.produit_id)
    const [dataP, setDataP] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { nom, email, telephone, adresse, produit_id }
        await axios.put(`https://api-sgbd.onrender.com/api/fournisseur/${four.id}`, data).then((res) => {
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
                            <input type="text" defaultValue={nom} onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">email</label>
                            <input type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Telephone</label>
                            <input type="tel" defaultValue={telephone} onChange={(e) => setTelephone(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Adresse</label>
                            <input type="text" defaultValue={adresse} onChange={(e) => setAdresse(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Nom produit a fournir</label>
                            <select defaultValue={produit_id} onChange={(e) => setProduit_id(e.target.value)}>
                                <option value="">choisir le produit</option>
                                {!isEmpty(dataP) && dataP.map((data) => (
                                    <option key={data.id} value={data.id}>{data.nom}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='cancel' onClick={() => aff(false)}>Annuler</button>
                        <button onClick={handleSubmit}>Modifier</button>
                    </div>
                </form>
            </div></>
    )
}
