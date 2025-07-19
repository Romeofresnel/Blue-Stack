import axios from 'axios';
import { PackageOpen, Trash, Users } from 'lucide-react';
import React from 'react'

export default function BoxDeleteCl({ aff, client, success }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`https://api-sgbd.onrender.com/api/client/${client.id}`).then((res) => {
            console.log(res.data);
        })
        if (success) {
            success();
        }
        aff(false)
    }
    return (
        <>
            <div className='delete-container'>
                <div className='post'>
                    <div className='entete'>
                        <Trash size={35} />
                        <h2>Supprimer une client</h2>
                    </div>
                    <div className='form'>
                        <p>
                            <Users size={35} />
                            <h2>{client.nom}</h2>
                        </p>
                    </div>
                    <div className='btn'>
                        <button className='cancel' onClick={() => aff(false)}>Annuler</button>
                        <button onClick={handleSubmit}>Supprimer</button>
                    </div>
                </div>
            </div>
        </>
    )
}
