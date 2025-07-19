import axios from 'axios';
import { PackageOpen, Trash } from 'lucide-react';
import React from 'react'

export default function BoxDeleteC({ aff, commande, success }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`https://api-sgbd.onrender.com/api/commande/${commande.id}`).then((res) => {
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
                        <h2>Supprimer une commande</h2>
                    </div>
                    <div className='form'>
                        <p>
                            <PackageOpen size={35} />
                            <h2>{commande.id}</h2>
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
