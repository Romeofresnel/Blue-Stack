import { Eye, SquarePen, Trash, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Portal from '../components/Portal'
import FormCLient from '../forms/FormCLient'
import axios from 'axios'
import { isEmpty } from '../IsEmpty'
import FormUpdateClient from '../forms/FormUpdateClient'
import BoxDeleteCl from '../components/BoxDeleteCl'


export default function Client() {
    const [aff, setAff] = useState(false)
    const [aff1, setAff1] = useState(false)
    const [aff2, setAff2] = useState(false)
    const [client, setClient] = useState()
    const [clientData, setClientData] = useState([])
    const fetchClients = async () => {
        try {
            const res = await axios.get('https://api-sgbd.onrender.com/api/client/')
            setClientData(res.data.data)
        } catch (err) {
            console.error("Erreur lors de la récupération des Clients :", err)
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
        fetchClients()
    }

    useEffect(() => {
        fetchClients()
    }, [])
    return (
        <>
            <div className='produits-container'>
                <nav>
                    <p>
                        <Users size={35} />
                        <span>Clients({clientData.length})</span>
                    </p>
                </nav>
                <div className='body-container'>
                    <div className='nav-data'>
                        {!isEmpty(clientData) && clientData.length === 0 ? (
                            <div className='btn'></div>
                        ) : (
                            <div className='btn'>
                                <button onClick={() => setAff(true)}>+ Ajouter un client</button>
                            </div>
                        )}
                        <div className='nav'>
                            <li>Nom client</li>
                            <li>Contact</li>
                            <li>nombre Achat</li>
                            <li>Date creation</li>
                            <li></li>
                            <li></li>
                            <li>options</li>
                        </div>
                    </div>
                    <div className='container-data'>
                        {!isEmpty(clientData) && clientData.length === 0 ? (
                            <div className='one-none'>
                                <p>Aucun client enregistrer</p>
                                <div className='btn'>
                                    <button onClick={() => setAff(true)}>+ Ajouter votre premier client</button>
                                </div>
                            </div>
                        ) : (
                            clientData.map((client) => (
                                <div key={client.id} className='card-prod'>
                                    <li>{client.nom}</li>
                                    <li>{client.contact}</li>
                                    <li>25</li>
                                    <li>{formatDate(client.created_at)}</li>
                                    <li></li>
                                    <li></li>
                                    <li>
                                        <section>
                                            <Eye />
                                            <SquarePen onClick={() => {
                                                setClient(client)
                                                setAff1(true)
                                            }} />
                                            <Trash onClick={() => {
                                                setClient(client)
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
            {aff && <Portal><FormCLient aff={setAff} success={refreshProduits} /></Portal>}
            {aff1 && <Portal><FormUpdateClient aff={setAff1} client={client} success={refreshProduits} /></Portal>}
            {aff2 && <Portal><BoxDeleteCl aff={setAff2} client={client} success={refreshProduits} /></Portal>}
        </>
    )
}
