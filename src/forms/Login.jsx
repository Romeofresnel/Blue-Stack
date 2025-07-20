import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === 'romeo fresnel' && password === 'bienvenue') {
            navigate("/dashbord")
        } else {
            alert("cett utilisateur n'existe pas")
        }
    }
    return (
        <>
            <div className='login-container'>
                <nav>
                    <h1>BlueStock</h1>
                    <span>Login</span>
                </nav>
                <div className='container-form'>
                    <form action="#">
                        <div className='img'>
                            <div className='sombre'>
                                <h2>Welcome to back to BlueStock</h2>
                                <p>connectez-vous a votre session et commencer a gerer les stock de blue</p>
                            </div>
                        </div>
                        <div className='input'>
                            <h2>Se connecter</h2>
                            <section>
                                <div className='inputBox'>
                                    <span>Username</span>
                                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='inputBox'>
                                    <span>Password</span>
                                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </section>
                            <button onClick={handleSubmit}>Connexion</button>
                        </div>
                    </form>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                </div>
            </div>
            <Toaster
                position="top"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                        fontFamily: 'font-1',
                    },
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                    error: {
                        duration: 5000,
                        style: {
                            background: '#ff4444',
                            color: 'white',
                        },
                    },
                }}
            />
        </>
    )
}
