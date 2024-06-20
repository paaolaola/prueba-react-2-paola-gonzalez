import { NavLink, Link } from "react-router-dom";
import TotalPrice from "./TotalPrice";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
    const ActiveClass = ({ isActive }) => (isActive ? "pizza-active" : "pizza-inactive");

    return (
        <header>
            <div className="pizza-nav">
                <Link to="/" className="link-btn">
                    {" "}
                    <div className="logo-text-img">
                        <img className="pizza-home" src="../icons/pizza-icon.svg" alt="pizza" />
                        <h1>MAMMA MIA PIZZERIA</h1>
                    </div>
                </Link>

                <nav>
                    <NavLink to="/carro" className={ActiveClass}>
                        <div className="cart-container">
                            <ShoppingCartIcon className="cart-icon" /> <TotalPrice />
                        </div>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
