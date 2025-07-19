import axios from 'axios';
import { CircleDashed, Trash, X } from 'lucide-react'
import React from 'react'

export default function BoxDelete({ aff, produits, onSuccess }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`https://api-sgbd.onrender.com/api/produit/${produits.id}`)

            console.log(response.data);

            // Appeler la fonction onSuccess pour rafraîchir la liste
            if (onSuccess) {
                onSuccess();
            }

            // Fermer le modal
            aff(false)

        } catch (error) {
            console.error("Erreur lors de la suppression du produit:", error);
            // Ici vous pouvez ajouter une notification d'erreur si nécessaire
        }
    }

    return (
        <>
            <div className='delete-container'>
                <div className='post'>
                    <div className='entete'>
                        <Trash size={35} />
                        <h2>Supprimer un produit</h2>
                    </div>
                    <div className='form'>
                        <p>
                            <CircleDashed size={40} />
                            <h2>{produits.nom}</h2>
                        </p>
                    </div>
                    <div className='btn'>
                        <button className='cancel' type="button" onClick={() => aff(false)}>Annuler</button>
                        <button type="submit" onClick={handleSubmit}>Supprimer</button>
                    </div>
                </div>
            </div>
        </>
    )
}