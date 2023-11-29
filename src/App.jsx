import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./context/PizzaContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import Footer from "./components/Footer";

function App() {
    return (
        <PizzaProvider>
            <BrowserRouter>
                <TopBar />
                <Navbar />
                <Router />
                <Footer />
            </BrowserRouter>
        </PizzaProvider>
    );
}

export default App;
