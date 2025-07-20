import { Mail, Phone, UserRoundPen } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router';

export default function Profil() {
    const navigate = useNavigate();

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
                            <img src="../img/px-3.jpg" alt="profil" />
                        </div>
                    </div>
                    <div className='left2'>
                        <h1>N'nang Moumbe Romeo Fresnel</h1>
                        <section>
                            <div className='inter'>
                                <Mail />
                                <h3>romeofresnel@gmail.com</h3>
                            </div>
                            <div className='inter'>
                                <Phone />
                                <span>692 38 59 60</span>
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
                    <button onClick={() => navigate('/authentification')}>
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
