import React from "react";
import { Outlet } from "react-router";
import NavBarLink from "../components/NavBarLink";
import NavUser from "../components/NavUser";

export default function Layout() {
    return (
        <>
            <div className="layout-container">
                <div className="container-left">
                    <NavBarLink />
                </div>
                <div className="container-rigth">
                    <NavUser />
                    <Outlet />
                </div>
            </div>
        </>
    );
}
