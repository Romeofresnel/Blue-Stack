import { ClipboardPen } from 'lucide-react'
import React from 'react'

export default function FormBilan({ aff }) {
    return (
        <>
            <div className='forms-containers'>
                <form action="#">
                    <div className='entete'>
                        <ClipboardPen size={35} />
                        <h2>Formulaire d'ajout d'un bilan financier</h2>
                    </div>
                    <div className='body'>
                        <div className='ifon-form'>
                            <label for="">Nom produit</label>
                            <select>
                                <option value="">choisir le statut</option>
                                <option value="plein">Plein</option>
                                <option value="vide">vide</option>
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label for="">Date de vente</label>
                            <input type="date" />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Nom du client</label>
                            <select>
                                <option value="">choisir le statut</option>
                                <option value="plein">Plein</option>
                                <option value="vide">vide</option>
                            </select>
                        </div>
                        <div className='ifon-form'>
                            <label for="">Prix de vente</label>
                            <input type="text" />
                        </div>
                        <div className='ifon-form'>
                            <label for="">quantite</label>
                            <input type="number" />
                        </div>
                        <div className='ifon-form'>
                            <label for="">Montant-total</label>
                            <input type="number" />
                        </div>
                        <div className='ifon-form'>
                            <label for="">mode de paiement</label>
                            <select>
                                <option value="">choisir le mode de paiement</option>
                                <option value="immediat">Immediat</option>
                                <option value="partiel">partielle</option>
                            </select>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='cancel' onClick={() => aff(false)}>Annuler</button>
                        <button>Ajouter</button>
                    </div>
                </form>
            </div>
        </>
    )
}
