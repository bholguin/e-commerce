import { FC } from "react";
import Shield from "../../assets/escudo-de-proteccion.png"
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Twiter from "../../assets/twiter.png"

export const Footer: FC = (): JSX.Element => {
    return (<div className="footer-container">
        <div className="footer-section">
            <div className="footer-info-content">
                <p className="footer-logo">Pufi</p>
            </div>
            <div className="footer-info-content-line">
                <p>Pufi RAIN</p>
                <p>Pufi PUFF</p>
                <p>Pufi CART</p>
                <p>Pufi NAP</p>
            </div>
            <div className="footer-info-content-line">
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>CÓMO COMPRAR</p>
                <p>TÉRMINOS Y CONDICIONES</p>
            </div>
            <div className="footer-info-content-line">
                <p>COMPRA 100% SEGURA</p>
                <div className="footer-sure-section">
                    <img src={Shield} alt="shield" className="footer-shield" />
                    <p>COMPRÁ CON LA GARANTIA PUFI</p>
                </div>

            </div>
            <div className="footer-info-content">
                <div className="footer-social-network">
                    <p>SEGINOS EN</p>
                    <div className="footer-social-network-icons">
                        <img src={Facebook} alt="shield"  />
                        <img src={Twiter} alt="shield"  />
                        <img src={Instagram} alt="shield" />
                    </div>
                </div>

            </div>
        </div>
        <div className="footer-copy">
            <hr />
            <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
        </div>

    </div>

    )
}