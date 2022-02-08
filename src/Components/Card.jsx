import React from 'react'
import '../Styles/Card.css'

export const Card = () => {
  return (
    <div className="card__block">
      <div className="card__container">
        <img className="card__quotes" src="./Assets/quotes.svg" alt=""/>
        <div>
          <span>5.0</span>
          <img src="./Assets/Star.svg" alt="start"/>
          <img src="./Assets/Star.svg" alt="start"/>
          <img src="./Assets/Star.svg" alt="start"/>
          <img src="./Assets/Star.svg" alt="start"/>
          <img src="./Assets/Star.svg" alt="start"/>
        </div>
      </div>
      <p className="card__info">
        Nam libero tempore, cum soluta nobis est eligendi optio, 
        cumque nihil impedit, quo minus id, quod maxime placeat, 
        facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
        Temporibus autem quibusdam.
      </p>
      <div className="card__id">
        <img className="card__id-photo" src="./Assets/user.svg" alt=""/>
        <span>ID: 21015</span>
      </div>
      <div className="card__footer">
        Category|Subcategory
      </div>
    </div>
  )
}
