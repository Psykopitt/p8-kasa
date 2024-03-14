import { Link } from 'react-router-dom'

function Erreur404() {
    return(
        <div className="erreur404">
            <div>
                <h1 className="erreur404-title">{`404`}</h1>
            </div>
            <div>
                <h2 className="erreur404-subtitle">{`Oups! La page que vous demandez n'existe pas.`}</h2>
            </div>
            <div className="erreur404-text-container">
                <Link to="/"
                className="erreur404-text">{`Retourner sur la page d'accueil`}</Link>
            </div>
        </div>
    )
}

export default Erreur404