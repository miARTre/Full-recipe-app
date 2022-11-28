import React from "react";
import Home from "../pages/Home"
import Cuisine from "./Cuisine";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cuisine/:type" element={<Cuisine/>}/>
                <Route path="/searched/:search" element={<Searched/>}/>
                <Route path="/recipe/:name" element={<Recipe/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;