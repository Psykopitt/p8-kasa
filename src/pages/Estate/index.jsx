import Carrousel from '../../composants/Carrousel'
import Collapse from '../../composants/Collapse'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/index.scss'
import './_estate.scss'
import ProfilePicture from '../../composants/PhotoProfile'
import Rating from '../../composants/Rating'
import Error from '../../pages/Error'

function Estate() {
  const { id } = useParams()
  const [data, setData] = useState()
  const [error, setError] = useState()

  //filter estate data
  const filterData = useCallback((datas) => {
    let filteredData = datas.filter((d) => d.id === id)
    if (filteredData.length === 0) {
      setError(true)
    } else {
      setError(false)
      return filteredData
    }
  }, [id])

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('../logements.json')
        const datas = await response.json()
        setData(filterData(datas))
      } catch (err) {
        setError(true)
      }
    }
    getData()
  }, [filterData])

  if (error) {
    return <Error />
  } else if (data) {
    return (
      <main>
        <article className="estate">
          <Carrousel slides={data[0].pictures} />
          <section className="estate-details">
            <div className="estate-details-header">
              <div className="estate-title-container">
                <h1>{data[0].title}</h1>
                <p>{data[0].location}</p>
                <ul className="tag-container">
                  {data[0].tags.map((tag, index) => {
                    return (
                      <li key={index} className="tag">
                        {tag}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="estate-owner-container">
                <ProfilePicture
                  picture={data[0].host.picture}
                  name={data[0].host.name}
                />
                <Rating rating={data[0].rating} />
              </div>
            </div>
            <div className="estate-collapsibles">
              <Collapse collapseTitle={'Description'}>
                <p>{data[0].description}</p>
              </Collapse>
              <Collapse collapseTitle={'Équipements'}>
                <ul>
                  {data[0].equipments.map((equipment, index) => {
                    return <li key={index}>{equipment}</li>
                  })}
                </ul>
              </Collapse>
            </div>
          </section>
        </article>
      </main>
    )
  }
}

export default Estate