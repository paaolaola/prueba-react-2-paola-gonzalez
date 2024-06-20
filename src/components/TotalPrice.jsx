import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const TotalPrice = () => {
    const { cart } = useContext(PizzaContext);
    const totalPrice = cart.reduce((total, pizza) => {
        return total + pizza.price * pizza.quantity;
    }, 0);

    return (
        <div>
            <p>$ {totalPrice.toLocaleString("es-ES")}</p>
        </div>
    );
};

export default TotalPrice;
