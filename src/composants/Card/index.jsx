import './_card.scss'

function Card({ cover, name }) {
  return (
    <div className="lodging-card">
      <div className="card-gradient">
      <img className="lodging-card-image" src={cover} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default Card