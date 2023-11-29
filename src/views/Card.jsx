import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Card = () => {
    const { pizzas, cart, setCart } = useContext(PizzaContext);
    const { name } = useParams();

    const selectedPizza = pizzas.find((pizza) => pizza.name === name);
    if (!selectedPizza) {
        return <p>No se encontró el producto</p>;
    }
    const addToCart = (selectedPizza) => {
        console.log(selectedPizza);
        setCart([...cart, selectedPizza]);
    };
    return (
        <>
            <div key={selectedPizza.id} className="card-container">
                <img className="card-img" src={selectedPizza.img} alt={selectedPizza.name}></img>
                <div className="info-container">
                    <h3 className="card-title">{selectedPizza.name.toUpperCase()}</h3>
                    <p className="card-details">{selectedPizza.desc}</p>
                    <p className="card-data">
                        Ingredientes: {selectedPizza.ingredients[0]}, {selectedPizza.ingredients[1]}, {selectedPizza.ingredients[2]} &{" "}
                        {selectedPizza.ingredients[3]}
                    </p>
                    <div className="info-price">
                        <h3>${selectedPizza.price}</h3>
                    </div>
                    <div className="btns-pizza">
                        <button onClick={() => addToCart(selectedPizza)}>
                            {" "}
                            <AddShoppingCartIcon className="addcart-icon" />
                        </button>
                        <Link to="/">
                            {" "}
                            <button className="home-btn">Seguir viendo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
