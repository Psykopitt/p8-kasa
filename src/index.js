import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./composants/Header/index";
import Footer from "./composants/Footer/index";
import Home from "./pages/Home/index";
import Apropos from "./pages/Apropos/index";
import Estate from "./pages/Estate/index";
import Error from "./pages/Error/index";
import "../src/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            {/*Route*/}
            <Routes>
                {/*Route pour la page d'accueil*/}
                <Route path="/" element={<Home />} />
                {/*Route pour la page à propos*/}
                <Route path="/a-propos" element={<Apropos />} />
                {/*Route pour la page des logements*/}
                <Route path="/estate/:id" element={<Estate />} />
                {/*Route pour la page erreur 404*/}
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
