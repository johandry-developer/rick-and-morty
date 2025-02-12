import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<h2>Hola soy otra página</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;