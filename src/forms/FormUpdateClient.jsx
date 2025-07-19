import axios from 'axios';
import { ClipboardPen } from 'lucide-react';
import React, { useState } from 'react'

export default function FormUpdateClient({ aff, client, success }) {
    const [nom, setNom] = useState(client.nom)
    const [contact, setContact] = useState(client.contact)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nom, contact }
        await axios.put(`https://api-sgbd.onrender.com/api/client/${client.id}`, data).then((res) => {
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
                        <h2>Modifier le client ({client.nom})</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label for="">Nom Client</label>
                            <input type="text" defaultValue={nom} onChange={(e) => setNom(e.target.value)} />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Contact client</label>
                            <input type="number" defaultValue={contact} onChange={(e) => setContact(e.target.value)} />
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
