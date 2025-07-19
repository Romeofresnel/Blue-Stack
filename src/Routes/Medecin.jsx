import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Medecins/Layout";
import Dashbord from "../pages/Medecins/Dashbord";
import Patients from "../pages/Medecins/Patients";
import Agenda from "../pages/Medecins/Agenda";
import Profils from "../pages/Medecins/Profils";


export default function Medecin() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashbord />} />
          <Route path="/home" element={<Dashbord />} />
          <Route path="/patient" element={<Patients />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/profils" element={<Profils />} />
        </Route>
      </Routes>
    </>
  );
}
