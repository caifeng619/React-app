import React, { Component } from "react";
import "../style/_footer.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import { FaMapMarkerAlt, FaPhoneSquare, FaEnvelopeSquare, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa"

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div>
                        <h5>Tjänster</h5>
                        <ul>
                            <li><Link className={"link"} to="/">Akuttandvård</Link></li>
                            <li><Link className={"link"} to="/">Undersökning</Link></li>
                            <li><Link className={"link"} to="/">Hygienistbehandling</Link></li>
                            <li><Link className={"link"} to="/">Barntandvård</Link></li>
                            <li><Link className={"link"} to="/">Vuxentandvård</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Länkar</h5>
                        <ul>
                            <li><Link className={"link"} to="/">Hem</Link></li>
                            <li><Link className={"link"} to="/bokningar">Mina bokningar</Link></li>
                            <li><Link className={"link"} to="/">Boka tid</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Kontakta oss</h5>
                        <p><FaMapMarkerAlt /> Tulegatan 41, 113 53 Stockholm</p>
                        <p><FaPhoneSquare /> 0123456789</p>
                        <p><FaEnvelopeSquare /> Epost:info@dinatander.com</p>
                    </div>
                    <div>

                    </div>
                    <div>
                        <h5>Följ oss!</h5>
                        <div className={"icons"}>
                            <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
                            <a href="https://www.facebook.com" target="_blank"><FaFacebookF/></a>
                            <a href="https://www.instagram.com" target="_blank"><FaInstagram/></a>
                            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a>
                        </div>
                    </div>
                    <img  src={logo}/>
                </footer>
                <div className="copyright">
                    copyright@ 2020 dinatander
                </div>
            </div>
        )
    }
}

export default Footer;