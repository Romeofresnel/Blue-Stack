import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Removed useNavigate as it's not used
import Dashbord from "./pages/Dashbord";
import Produit from "./pages/Produit";
import Vente from "./pages/Vente";
import Commande from "./pages/Commande";
import Client from "./pages/Client";
import Fournisseur from "./pages/Fournisseur";
import Profil from "./pages/Profil";
import Layout from "./pages/Layout";
import Login from "./forms/Login";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/authentification" element={<Login />} />
        <Route element={<Layout />}>
          <Route index element={<Dashbord />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/vente" element={<Vente />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/client" element={<Client />} />
          <Route path="fournisseur" element={<Fournisseur />} />
          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
