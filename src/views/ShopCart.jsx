import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import TotalPrice from "../components/TotalPrice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ShopCart = () => {
    const { cart, count, increase, decrease, deletePizza } = useContext(PizzaContext);
    const navigate = useNavigate();

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <>
            <button onClick={(e) => goBack(e)}>Volver Atrás</button>

            <div className="shop-container">
                <div className="box-container">
                    <h2 className="box-title">Carro de Compra</h2>
                    {cart.map((pizza, index) => (
                        <div key={index} className="box-price">
                            <div className="shop-details-1">
                                <img className="cart-img" src={pizza.img} alt={pizza.name}></img>
                                <h4 className="cart-title">{pizza.name}</h4>
                                <p className="cart-list">
                                    ({pizza.ingredients[0]}, {pizza.ingredients[1]}, {pizza.ingredients[2]} & {pizza.ingredients[3]})
                                </p>
                            </div>

                            <div className="shop-details-2">
                                <p>${pizza.price}</p>
                                <button className="btn-shop-cart" disabled={count <= 0} onClick={() => decrease(pizza)}>
                                    -
                                </button>
                                <span>{count}</span>
                                <button className="btn-shop-cart" onClick={() => increase(pizza)}>
                                    +
                                </button>
                                <button className="btn-shop-cart" onClick={() => deletePizza(pizza)}>
                                    <DeleteForeverIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="total-price">
                        <h3>
                            <TotalPrice />
                        </h3>
                    </div>
                    <div className="info-price">
                        <button>Ir a Pagar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopCart;
