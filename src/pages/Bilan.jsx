import React, { useState } from 'react'
import { CircleDashed, Eye, Scale, SquarePen, Trash } from 'lucide-react'
import Portal from '../components/Portal'
import FormBilan from '../forms/FormBilan'

export default function Bilan() {
    const [aff, setAff] = useState(false)
    return (
        <>
            <div className='produits-container'>
                <nav>
                    <p>
                        <Scale size={35} />
                        <span>Bilan Financier(654)</span>
                    </p>
                </nav>
                <div className='body-container'>
                    <div className='nav-data'>
                        <div className='btn'>
                            <button onClick={() => setAff(true)}>+ Nouveau bilan financier</button>

                        </div>
                        <div className='nav'>
                            <li>Nom Produit</li>
                            <li>Prix_achat</li>
                            <li>Prix_vente</li>
                            <li>Quantite en stock</li>
                            <li>Fournisseur</li>
                            <li>Date Livraison</li>
                            <li>options</li>
                        </div>
                    </div>
                    <div className='container-data'>
                        <div className='card-prod'>
                            <li>fruitas</li>
                            <li>1900.00</li>
                            <li>2500.00</li>
                            <li>250</li>
                            <li>Albien choune</li>
                            <li>19/06/2025</li>
                            <li>
                                <section>
                                    <Eye />
                                    <SquarePen />
                                    <Trash />
                                </section>
                            </li>
                        </div>
                        <div className='card-prod'>
                            <li>fruitas</li>
                            <li>1900.00</li>
                            <li>2500.00</li>
                            <li>250</li>
                            <li>Albien choune</li>
                            <li>19/06/2025</li>
                            <li>
                                <section>
                                    <Eye />
                                    <SquarePen />
                                    <Trash />
                                </section>
                            </li>
                        </div>
                    </div>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                </div>
            </div>
            {aff && <Portal><FormBilan aff={setAff} /></Portal>}
        </>
    )
}
