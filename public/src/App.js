import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Importation de la barre de navigation

// Importation des pages
const Home = () => <div>Bienvenue sur la page d'accueil !</div>;
const EnglishPage = () => <div>Welcome to the English page!</div>;
const FrenchPage = () => <div>Bienvenue sur la page française !</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* La barre de navigation est affichée sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<EnglishPage />} />
        <Route path="/fr" element={<FrenchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
