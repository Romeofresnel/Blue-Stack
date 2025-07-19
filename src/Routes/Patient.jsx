import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Patients/Home";
import Consultation from "../pages/Patients/Consultation";
import Prescription from "../pages/Patients/Prescription";
import Examen from "../pages/Patients/Examen";
import Layout from "../pages/Patients/Layout";

export default function Patient() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="consultation" element={<Consultation/>} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="examen" element={<Examen />} />
        </Route>
      </Routes>
    </>
  );
}
