import "./assets/css/App.css";
import "./assets/css/Index.css";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./context/PizzaContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <PizzaProvider>
            <BrowserRouter>
                <TopBar />
                <Navbar />
                <Router />
                <ToastContainer />
                <Footer />
            </BrowserRouter>
        </PizzaProvider>
    );
}

export default App;
