import Logo from "../header/logo"
import Copyright from "./FooterCopyright";
import Footer__menu from "./FooterMenu";

function Footer() {
    return (
        <div className="Footer">

        <Logo />
        <Footer__menu />
        <Copyright />

        </div>

    )
}

export default Footer;