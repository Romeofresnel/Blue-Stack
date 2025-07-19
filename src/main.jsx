import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/index.scss";
import "./fontawesome-6/css/all.css";
import { BrowserRouter } from "react-router-dom";


const AppWrapper = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
