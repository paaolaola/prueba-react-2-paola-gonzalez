import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ShopCart = () => {
    const { cart, increase, decrease, deletePizza } = useContext(PizzaContext);
    const navigate = useNavigate();

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const calculateTotalPrice = () => {
        const totalPrice = cart.reduce((total, pizza) => {
            return total + pizza.price * pizza.quantity;
        }, 0);

        return totalPrice.toLocaleString("es-ES");
    };

    return (
        <>
            <div className="shop-container">
                <button className="btn-detail" onClick={(e) => goBack(e)}>
                    Volver Atrás
                </button>
                <div className="box-container">
                    <h2 className="box-title">Carro de Compra</h2>
                    {cart.length === 0 ? (
                        <p className="cart-text">Vacío</p>
                    ) : (
                        cart.map((pizza) => (
                            <div key={pizza.id} className="box-price">
                                <div className="shop-details-1">
                                    <img className="cart-img" src={pizza.img} alt={pizza.name}></img>
                                    <h3 className="cart-title">{pizza.name}</h3>
                                    <p className="cart-list">
                                        ({pizza.ingredients[0]}, {pizza.ingredients[1]}, {pizza.ingredients[2]} & {pizza.ingredients[3]})
                                    </p>
                                </div>

                                <div className="shop-details-2">
                                    <div>
                                        <h3 className="text-price">${pizza.price}</h3>
                                    </div>
                                    <div className="btns-shop">
                                        <button className="btn-shop-cart" onClick={() => decrease(pizza.id)}>
                                            -
                                        </button>
                                        <span>{pizza.quantity}</span>
                                        <button className="btn-shop-cart" onClick={() => increase(pizza.id)}>
                                            +
                                        </button>
                                        <div onClick={() => deletePizza(pizza.id)}>
                                            <DeleteForeverIcon className="btn-delete" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="total-price">
                        <h3>Total: ${calculateTotalPrice()}</h3>
                    </div>
                    <div className="info-price">
                        <button className="home-btn">Ir a Pagar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopCart;
