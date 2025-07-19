import Axios from 'axios';
import { Trash, UsersRound } from 'lucide-react';
import React from 'react'

export default function BoxDeleteF({ aff, fournisseur, success }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.delete(`https://api-sgbd.onrender.com/api/fournisseur/${fournisseur.id}`).then((res) => {
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
                        <h2>Supprimer une fournisseur</h2>
                    </div>
                    <div className='form'>
                        <p>
                            <UsersRound size={35} />
                            <h2>{fournisseur.nom}</h2>
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
