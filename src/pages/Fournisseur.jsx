import { Eye, SquarePen, Trash, UsersRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Portal from '../components/Portal'
import FormFournisseur from '../forms/FormFournisseur'
import axios from 'axios'
import { isEmpty } from '../IsEmpty'
import FormUpdateForunisseur from '../forms/FormUpdateForunisseur'
import BoxDeleteF from '../components/BoxDeleteF'

export default function Fournisseur() {
    const [aff, setAff] = useState(false)
    const [aff1, setAff1] = useState(false)
    const [aff2, setAff2] = useState(false)
    const [four, setFour] = useState()
    const [fourData, setFourData] = useState([])
    const fetchFournisseurs = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/fournisseur/')
            setFourData(res.data.data)

        } catch (err) {
            console.error("Erreur lors de la récupération des fournisseurs :", err)
        }
    }
    function formatDate(dateString) {
        const date = new Date(dateString).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return date;
    }
    const refreshProduits = () => {
        fetchFournisseurs()
    }

    useEffect(() => {
        fetchFournisseurs()
    }, [])
    return (
        <>
            <div className='produits-container'>
                <nav>
                    <p>
                        <UsersRound size={35} />
                        <span>Fournisseurs({fourData.length})</span>
                    </p>
                </nav>
                <div className='body-container'>
                    <div className='nav-data'>
                        <div className='btn'>
                            <button onClick={() => setAff(true)}>+ Ajouter un nouveau fournisseur</button>

                        </div>
                        <div className='nav'>
                            <li>Nom fournisseur</li>
                            <li>Email</li>
                            <li>Adresse</li>
                            <li>Telephone</li>
                            <li>Nom Produit</li>
                            <li>Date creation</li>
                            <li>options</li>
                        </div>
                    </div>
                    <div className='container-data'>
                        {!isEmpty(fourData) && fourData.length === '0' ? (
                            <div className=''>
                                Aucun fournisseur enregistrer
                            </div>
                        ) : (
                            fourData.map((fournisseur) => (
                                <div className='card-prod'>
                                    <li>{fournisseur.nom}</li>
                                    <li>{fournisseur.email}</li>
                                    <li>{fournisseur.adresse}</li>
                                    <li>{fournisseur.telephone}</li>
                                    <li>{fournisseur.produit_nom}</li>
                                    <li>{formatDate(fournisseur.created_at)}</li>
                                    <li>
                                        <section>
                                            <Eye />
                                            <SquarePen onClick={() => {
                                                setFour(fournisseur)
                                                setAff1(true)
                                            }} />
                                            <Trash onClick={() => {
                                                setFour(fournisseur)
                                                setAff2(true)
                                            }} />
                                        </section>
                                    </li>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                </div>
            </div>
            {aff && <Portal><FormFournisseur aff={setAff} success={refreshProduits} /></Portal>}
            {aff1 && <Portal><FormUpdateForunisseur aff={setAff1} four={four} success={refreshProduits} /></Portal>}
            {aff2 && <Portal><BoxDeleteF aff={setAff2} fournisseur={four} success={refreshProduits} /></Portal>}
        </>
    )
}
