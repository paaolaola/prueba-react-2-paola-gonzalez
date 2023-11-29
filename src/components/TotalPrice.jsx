import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const TotalPrice = () => {
    const { cart } = useContext(PizzaContext);
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    const formattedTotal = total.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
    });
    return (
        <div>
            <p>Total: {formattedTotal}</p>
        </div>
    );
};

export default TotalPrice;
