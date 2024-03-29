import Collapse from '../../composants/Collapse'
import Banner from '../../composants/Banner'
import AproposBanner from '../../assets/img/banner-a-propos.png'
import '../Apropos'

const banner = 'banner a-propos'

function Apropos() {
  return (
    <main>
      <Banner img={AproposBanner} className={banner} />
      <div className="about-container">
        <Collapse collapseTitle={'Fiabilité'}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse collapseTitle={'Respect'}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse collapseTitle={'Service'}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse collapseTitle={'Sécurité'}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </main>
  )
}

export default Apropos