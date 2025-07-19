import React from 'react'
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
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
                                    <input type="email" required />
                                </div>
                                <div className='inputBox'>
                                    <span>Password</span>
                                    <input type="password" required />
                                </div>
                            </section>
                            <button onClick={() => navigate("/dashbord")}>Connexion</button>
                        </div>
                    </form>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                </div>
            </div>
        </>
    )
}
