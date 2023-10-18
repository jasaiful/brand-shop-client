import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 rounded-t-3xl bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-5 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center gap-2 grid-flow-col">
                    <img className="w-11/12" src={logo} alt="" />
                    <p> <span className="text-2xl font-bold text-red-600">Alloy Dreams Ltd.</span> <br />Providing reliable tech since 1994</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid text-4xl grid-flow-col gap-4">
                        <Link><FaFacebook className="text-blue-900"></FaFacebook></Link>
                        <Link><FaYoutube className="text-red-500"></FaYoutube></Link>
                        <Link><FaTwitter className="text-blue-500"></FaTwitter></Link>
                        <Link><FaLinkedin className="text-blue-800"></FaLinkedin></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;