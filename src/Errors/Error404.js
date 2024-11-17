import './Errors.css'
import ErrorLogo from "./Images/LogoForErrors.svg";

export default function Error404() {
    return (
        <div className="error404_root">
            <img className="error_logo" src={ErrorLogo} alt=""/>
            <p className="error_code">404</p>
            <p className="error_description">похоже данной страницы не существует</p>
        </div>
    )
}