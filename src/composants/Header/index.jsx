import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/LOGO.svg'
import '../../composants/Header/_header.scss'

function Header() {
    const location = useLocation()
    return (
        <header className="header-container">
            <Link to="/">
            <img src={logo} className='logo' alt="Logo Kasa" />
            </Link>
            <nav className="header-link">
               <Link className={`text-link ${location.pathname === '/' ? 'active' : ''}`}
               to='/'>Accueil
               </Link>
               <Link className={`text-link ${location.pathname === '/a-propos' ? 'active' : ''}`}
               to='/a-propos'>A propos
               </Link>
            </nav>
        </header>
    )
}

export default Header