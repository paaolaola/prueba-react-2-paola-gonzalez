import EastIcon from "@mui/icons-material/East";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
    return (
        <>
            <div className="footer-1">
                <div className="footer-data">
                    <h3 className="footer-title">SUSCRÍBETE</h3> <h5 className="footer-text"> Y RECIBE NUESTRAS NOVEDADES Y PROMOCIONES</h5>
                </div>

                <form className="form-container">
                    <input type="email" name="email" placeholder="TU CORREO"></input>
                    <button>
                        <EastIcon className="arrow-icon" />
                    </button>
                </form>
            </div>

            <div className="footer-2">
                <img className="footer-img" src="./img/cuadritos.png" alt="footer"></img>
                <p className="footer-text-1">
                    SÍGUENOS | <InstagramIcon style={{ fontSize: "18px", cursor: "pointer" }} /> |{" "}
                    <FacebookIcon style={{ fontSize: "18px", cursor: "pointer" }} /> | #MammaMiaPizza
                </p>

                <div className="footer-text-2">
                    <p>2023 MAMMA MIA PIZZERIA. TODOS LOS DERECHOS RESERVADOS</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
