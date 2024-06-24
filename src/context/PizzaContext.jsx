import { createContext, useState, useEffect } from "react";
import { Zoom, toast } from "react-toastify";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const increase = (pizzaId) => {
        setCart((prevCart) => {
            return prevCart.map((pizza) => (pizza.id === pizzaId ? { ...pizza, quantity: pizza.quantity + 1 } : pizza));
        });
    };

    const decrease = (pizzaId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart
                .map((pizza) => (pizza.id === pizzaId ? { ...pizza, quantity: pizza.quantity - 1 } : pizza))
                .filter((pizza) => pizza.quantity > 0);

            const removedPizza = prevCart.find((pizza) => pizza.id === pizzaId && pizza.quantity === 1);
            if (removedPizza) {
                const toastStyle = {
                    background: "#f4d43e",
                    color: "#000000",
                };
                toast.error(`Se ha eliminado "${removedPizza.name}"!`, {
                    transition: Zoom,
                    position: "bottom-center",
                    style: toastStyle,
                    autoClose: 1000,
                });
            }

            return updatedCart;
        });
    };

    const deletePizza = (pizzaId) => {
        setCart((prevCart) => prevCart.filter((pizza) => pizza.id !== pizzaId));
        const { name } = pizzas.find((pizza) => pizza.id === pizzaId);
        const toastStyle = {
            background: "#f4d43e",
            color: "#000000",
        };
        toast.error(`Se ha eliminado "${name}"!`, {
            transition: Zoom,
            position: "bottom-center",
            style: toastStyle,
            autoClose: 1000,
        });
    };

    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existingPizza = prevCart.find((item) => item.id === pizza.id);
            if (existingPizza) {
                return prevCart.map((item) => (item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item));
            } else {
                return [...prevCart, { ...pizza, quantity: 1 }];
            }
        });

        const toastStyle = {
            background: "#f4d43e",
            color: "#000000",
        };
        toast.success(`Se agregó "${pizza.name}" al carro!`, {
            transition: Zoom,
            position: "bottom-center",
            style: toastStyle,
            autoClose: 1000,
        });
    };

    useEffect(() => {
        if (pizzas.length > 0) {
            setLoading(false);
            return;
        }
        getPizzas();
    }, []);

    const getPizzas = async () => {
        try {
            const response = await fetch("/data/pizzas.json");
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return <PizzaContext.Provider value={{ pizzas, cart, loading, error, increase, decrease, deletePizza, addToCart }}>{children}</PizzaContext.Provider>;
};

export default PizzaProvider;
