import Erreur404 from '../../composants/Erreur404'
import Header from '../../composants/Header'
import Footer from '../../composants/Footer'

function Erreur() {
    return (
        <div>
            <header className="defaultstyle">
                <Header />
            </header>
            <main className='defaultstyle'>
                <Erreur404 />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Erreur