import { createContext, useState, useEffect } from "react";
export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (pizzas.length > 0) {
            setLoading(false);
            return;
        }
        getPizzas();
    }, []);
    const getPizzas = async () => {
        const response = await fetch("/data/pizzas.json");
        const data = await response.json();
        setPizzas(data);
        console.log(data);
    };
    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return <PizzaContext.Provider value={{ pizzas, cart, setCart, loading, setLoading, error, setError }}>{children}</PizzaContext.Provider>;
};

export default PizzaProvider;
