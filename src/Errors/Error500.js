import './Errors.css'
import ErrorLogo from './Images/LogoForErrors.svg'

export default function Error500() {
    return(
        <div className="error500_root">
            <img className="error_logo" src={ErrorLogo} alt=""/>
            <p className="error_code">500</p>
            <p className="error_description">похоже произошла ошибка на сервере</p>
        </div>
    )
}