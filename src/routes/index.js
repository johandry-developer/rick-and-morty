import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/home';
import Example from '../pages/example/example';
import Character from '../pages/character/character';
import Header from '../components/header/header';
import NewCharacter from '../pages/new-character/new-character';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<h2>Hola soy otra página</h2>} />
                <Route path="/example" element={<Example/>}/>
                <Route path="/character/:id" element={<Character/>} /> {/* Ruta dinámica */}
                <Route path="/new-character" element={<NewCharacter/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;