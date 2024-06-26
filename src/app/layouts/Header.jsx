import { t } from 'i18next'

import './header.css'
import { Logo } from '../../assets/images'
import { Link } from 'react-router-dom'

export default function Header() {

    const currentPage = window.location.pathname;

    return (
        <header className="header" >
            <div className="header_logo-text">
                <Link to="/">
                    <img src={Logo} className="header_logo-img" />
                </Link>
                <Link to="/">
                    <h2>MARCUS</h2>
                </Link>
            </div>

            <div className="header_last-column">
                {currentPage !== "/login" &&
                    !localStorage.getItem("MercorUserToken")
                    ? <Link to="/login" >
                        <button className="login-btn btn-primary">{t('tLogin')}</button>
                    </Link> : null}
            </div>
        </header>
    )
}
