import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation des champs vides
        if (!name.trim() || !password.trim()) {
            toast.error("Veuillez remplir tous les champs");
            return;
        }

        setIsLoading(true);

        try {
            // Simulation d'une requête async (remplacez par votre logique d'authentification)
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (name.toLowerCase() === 'romeo fresnel' && password === 'bienvenue') {
                toast.success("Connexion réussie ! Redirection en cours...");

                // Petit délai pour laisser le toast s'afficher avant la navigation
                setTimeout(() => {
                    navigate("/dashbord"); // Correction de la typo
                }, 1500);
            } else {
                toast.error("Nom d'utilisateur ou mot de passe incorrect");
            }
        } catch (error) {
            toast.error("Une erreur est survenue lors de la connexion");
            console.error("Erreur de connexion:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // Gestion de la touche Entrée
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSubmit(e);
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
                    <form action="#" onSubmit={handleSubmit}>
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
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        disabled={isLoading}
                                        autoComplete="username"
                                    />
                                </div>
                                <div className='inputBox'>
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        disabled={isLoading}
                                        autoComplete="current-password"
                                    />
                                </div>
                            </section>
                            <button
                                type="submit"
                                disabled={isLoading}
                                style={{
                                    opacity: isLoading ? 0.7 : 1,
                                    cursor: isLoading ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isLoading ? 'Connexion en cours...' : 'Connexion'}
                            </button>
                        </div>
                    </form>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                </div>
            </div>

            <Toaster
                position="top-center"
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
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    },
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: '#10B981',
                            secondary: 'white',
                        },
                        style: {
                            background: '#10B981',
                            color: 'white',
                        },
                    },
                    error: {
                        duration: 5000,
                        iconTheme: {
                            primary: '#EF4444',
                            secondary: 'white',
                        },
                        style: {
                            background: '#EF4444',
                            color: 'white',
                        },
                    },
                    loading: {
                        duration: Infinity,
                        style: {
                            background: '#3B82F6',
                            color: 'white',
                        },
                    },
                }}
            />
        </>
    )
}