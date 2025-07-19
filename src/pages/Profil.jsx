import { Mail, Phone, UserRoundPen } from 'lucide-react'
import React from 'react'

export default function Profil() {
    return (
        <div className='profil-container'>
            <div className='top'>
                <nav>
                    <p>
                        <UserRoundPen size={35} />
                        <span>Profil</span>
                    </p>
                </nav>
                <div className='info'>
                    <div className='left'>
                        <div className='img'>
                            <img src="/px-3.jpg" alt="profil" />
                        </div>
                    </div>
                    <div className='left2'>
                        <h1>jean claude bernard</h1>
                        <section>
                            <div className='inter'>
                                <Mail />
                                <h3>claude@gmail.com</h3>
                            </div>
                            <div className='inter'>
                                <Phone />
                                <span>698 52 14 75 21</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut debitis magnam cupiditate commodi </p>
                <div className='btns'>
                    <button>
                        <UserRoundPen />
                        <span>Modifier le profil</span>
                    </button>
                    <button>
                        <UserRoundPen />
                        <span>Deconnexion</span>
                    </button>
                </div>
            </div>
            <div className='circle'></div>
            <div className='circle1'></div>
        </div>
    )
}
