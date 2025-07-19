import axios from 'axios';
import { ShoppingBag, Trash } from 'lucide-react';
import React from 'react'

export default function BoxDeleteV({ aff, vente, onSucess }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`https://api-sgbd.onrender.com/api/vente/${vente.id}`).then((res) => {
            console.log(res.data);
        })
        if (onSucess) {
            onSucess();
        }
        aff(false)
    }
    return (
        <>
            <div className='delete-container'>
                <div className='post'>
                    <div className='entete'>
                        <Trash size={35} />
                        <h2>Supprimer une vente</h2>
                    </div>
                    <div className='form'>
                        <p>
                            <ShoppingBag size={40} />
                            <h2>{vente.id}</h2>
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
