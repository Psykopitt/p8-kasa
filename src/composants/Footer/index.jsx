import logoFooter from '../../assets/img/logo-footer.png'
import './_footer.scss'

function Footer() {
    return (
        <footer className="footer-container">
            <div>
            <img className="footer-logo" src={logoFooter} alt="Logo Kasa" />
            </div>
            <div className="footer-text-container">
            <p className="footer-text">© 2020 Kasa. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer