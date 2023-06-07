const LocationInfo = ({ location }) => {


  return (
    <article>
        <div className="location__box">
          <h2 className="location__title">{location?.name}</h2>
          <ul className="location__list">
              <li className="location__item"><span>Type:</span><span className="location__span">{location?.type}</span></li>
              <li className="location__item"><span>Dimension:</span><span className="location__span">{location?.dimension}</span></li>
              <li className="location__item"><span>Population:</span><span className="location__span">{location?.residents.length}</span></li>
          </ul>
        </div>
    </article>
  )
}

export default LocationInfo