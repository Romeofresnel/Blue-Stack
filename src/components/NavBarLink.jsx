import React from 'react'
import {
    Bed,
    CalendarDays,
    CircleDashed,
    LayoutDashboard,
    MessagesSquare,
    PackageOpen,
    Scale,
    ScanHeart,
    ShoppingBag,
    UserRound,
    UserRoundPen,
    Users,
    UsersRound,
} from "lucide-react";
import { NavLink } from 'react-router-dom';
export default function NavBarLink() {
    return (
        <>
            <div className="container-link">
                <div className="container-link-top">
                    <div className="container-logo">
                        <img src="../img/px-6.jpg" alt="logo" />
                    </div>
                    <h3>Blue Stock</h3>
                </div>
                <div className="container-link-bottom">
                    <div className="container-menu">
                        <ul>
                            <NavLink
                                to="/dashbord"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <LayoutDashboard className="icons" />
                                    <span>Dashbord</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/produit"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <CircleDashed className="icons" />
                                    <span>Produit</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/vente"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <ShoppingBag className="icons" />
                                    <span>Vente</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/bilan"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <Scale className="icons" />
                                    <span>Bilan Financier</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/commande"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <PackageOpen className="icons" />
                                    <span>Commande</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/client"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <Users className='icons' />
                                    <span>Client</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/fournisseur"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <UsersRound className='icons' />
                                    <span>Fournisseur</span>
                                </li>
                            </NavLink>
                            <NavLink
                                to="/profil"
                                className={(nav) => (nav.isActive ? "active" : "")}
                                id="use"
                            >
                                <li>
                                    <UserRoundPen className="icons" />
                                    <span>Profil</span>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
