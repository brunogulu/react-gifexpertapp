import React from 'react'

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <div className="card__title">
        <p>{ title }</p>
      </div>
      
      <div className="card__img">
        <img src={ url } alt={ title }></img>
      </div>
    </div>
  )
}
