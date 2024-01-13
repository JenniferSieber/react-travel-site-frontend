import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import LikesButton from './LikesButton'

function Card({ image, obj }) {
  const imgPath = `images/${obj.image}`
  console.log(imgPath)
  return (
    <section className="card shadow">
      <section className="card--image-container">
        <img className="card--image shadow" src={imgPath} alt={obj.title} />
      </section>

      <section className="card--details-container">
        <div className="card--loc bold">
          <div>
            <span className="card--loc-icon">
              <FontAwesomeIcon icon={faMapMarker} /> 
            </span>
            <span className="card--loc-country">{obj.country}</span>
            <span className="card--loc-link">
              <a href={obj.mapLink} className="card--loc-google gray" target="_blank" rel="noreferrer" >
                Google Maps
              </a>
            </span>
          </div>
          <LikesButton />
        </div>
        <div className="card--details">
          <h2 className="card--title bold">{obj.title}</h2>  
          <span className="card--dates bold">best time to visit: {obj.dates}</span>
          <p className="card--desc">{obj.desc}</p>
        </div>   
      </section>
    </section>
  )
}

export default Card
