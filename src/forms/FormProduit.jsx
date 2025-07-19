import axios from 'axios'
import { ClipboardPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function FormProduit({ aff, onSuccess }) {
  const [nom, setNom] = useState('')
  const [ref, setRef] = useState('')
  const [prix_achat, setPrix_achat] = useState('')
  const [prix_vente, setPrix_vente] = useState('')
  const [stock, setStock] = useState('')
  const [categorie, setCategorie] = useState('')
  const [statut, setStatut] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { nom, ref, prix_achat, prix_vente, stock, categorie, statut }
      const response = await axios.post('https://api-sgbd.onrender.com/api/produit/new', data)

      console.log(response.data);

      // Appeler la fonction onSuccess pour rafraîchir la liste
      if (onSuccess) {
        onSuccess();
      }

      // Fermer le modal
      aff(false)

    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
      // Ici vous pouvez ajouter une notification d'erreur si nécessaire
    }
  }

  return (
    <>
      <div className='forms-containers'>
        <form action="#">
          <div className='entete'>
            <ClipboardPen size={35} />
            <h2>Formulaire d'ajout d'un produit</h2>
          </div>
          <div className='body'>
            <div className='ifon-form'>
              <label htmlFor="">Nom produit</label>
              <input type="text" onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Reference Produit</label>
              <input type="number" onChange={(e) => setRef(e.target.value)} />
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Prix d'achat</label>
              <input type="number" onChange={(e) => setPrix_achat(e.target.value)} />
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Prix de vente</label>
              <input type="number" onChange={(e) => setPrix_vente(e.target.value)} />
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Stock produoit</label>
              <input type="number" onChange={(e) => setStock(e.target.value)} />
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Categorie du produit</label>
              <input type="text" onChange={(e) => setCategorie(e.target.value)} />
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Statut du produit</label>
              <select onChange={(e) => setStatut(e.target.value)}>
                <option value="">choisir le statut</option>
                <option value="plein">Plein</option>
                <option value="vide">vide</option>
              </select>
            </div>
            <div className='ifon-form'>
              <label htmlFor="">Fournisseur du produit</label>
              <select>
                <option value="">choisir le statut</option>
                <option value="plein">Plein</option>
                <option value="vide">vide</option>
              </select>
            </div>
          </div>
          <div className='btn'>
            <button className='cancel' type="button" onClick={() => aff(false)}>Annuler</button>
            <button type="submit" onClick={handleSubmit}>Ajouter</button>
          </div>
        </form>
      </div>
    </>
  )
}