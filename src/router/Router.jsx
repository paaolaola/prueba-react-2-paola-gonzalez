import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Card from "../views/Card";
import ShopCart from "../views/ShopCart";
import NotFound from "../views/NotFound";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:name" element={<Card />} />
            <Route path="/carro" element={<ShopCart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
