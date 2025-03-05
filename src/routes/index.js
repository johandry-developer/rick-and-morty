import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/home';
import Example from '../pages/example/example';
import Character from '../pages/character/character';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<h2>Hola soy otra página</h2>} />
                <Route path="/example" element={<Example/>}/>
                <Route path="/character/:id" element={<Character/>} /> {/* Ruta dinámica */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;