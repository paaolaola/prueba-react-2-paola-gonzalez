import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Loader from "../components/Loader";

const Home = () => {
    const { pizzas, loading, error, cart, setCart } = useContext(PizzaContext);
    const navigate = useNavigate();

    const handleClick = (name) => {
        const path = `/pizza/${name}`;
        navigate(path);
    };

    const addToCart = (pizza) => {
        console.log(pizza);
        setCart([...cart, pizza]);
    };

    return (
        <>
            <main className={`container ${!loading ? "loaded" : ""}`}>
                <Loader />

                {error && !loading && <h3 className="error">Ha ocurrido un error. Intente de nuevo más tarde</h3>}
            </main>
            <section>
                <div className="header-container">
                    <img className="header-pizza" src="../img/pexels-pizza.jpg" alt="pizzaheader"></img>
                    <p className="header-text"> Ingredientes frescos e Ideas originales </p>
                </div>

                <h1 className="home-title">PIZZAS</h1>
                <div className="home-gallery">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="home-card-container">
                            <img className="img-pizza" src={pizza.img} alt={pizza.name}></img>
                            <div className="data-pizza">
                                <h3 className="name-pizza">{pizza.name.toUpperCase()}</h3>
                                <p className="list-pizza">
                                    {pizza.ingredients[0]}, {pizza.ingredients[1]}, {pizza.ingredients[2]} & {pizza.ingredients[3]}
                                </p>

                                <p>${pizza.price}</p>
                                <div className="btns-pizza">
                                    <button onClick={() => handleClick(pizza.name)}>Ver Detalle</button>

                                    <button onClick={() => addToCart(pizza)}>
                                        <AddShoppingCartIcon className="addcart-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
