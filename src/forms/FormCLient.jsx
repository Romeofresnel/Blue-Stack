import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useState } from 'react'

export default function FormCLient({ aff, success }) {
    const [nom, setNom] = useState("")
    const [contact, setContact] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nom, contact }
        await axios.post('https://api-sgbd.onrender.com/api/client/new', data).then((res) => {
            console.log(res.data);
        })
        if (success) {
            success();
        }
        aff(false)
    }
    return (
        <>
            <div className='forms-containers'>
                <form action="#">
                    <div className='entete'>
                        <ClipboardPen size={35} />
                        <h2>Formulaire d'ajout d'un client</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label for="">Nom Client</label>
                            <input type="text" onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Contact client</label>
                            <input type="number" onChange={(e) => setContact(e.target.value)} />
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
