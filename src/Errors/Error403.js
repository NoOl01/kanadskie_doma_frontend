import './Errors.css'
import ErrorLogo from "./Images/LogoForErrors.svg";

export default function Error403() {
    return (
        <div className="error403_root">
            <img className="error_logo" src={ErrorLogo} alt=""/>
            <p className="error_code">403</p>
            <p className="error_description">похоже у вас недостаточно прав для посещения этой страницы</p>
        </div>
    )
}