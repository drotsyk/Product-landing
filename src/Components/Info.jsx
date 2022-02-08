import React, { useState } from 'react'
import '../Styles/Info.css'

export const Info = ({ title, text}) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="info" onClick={() => setOpen(!open)}>
      <div className="info__container">
        <h2 className="info__title">{title}</h2>
        <img className={open ? "info__arr-active" : "info__arr"} src="./Assets/arrow.svg" alt="arr"/>
      </div>
        <p className={open ? "info__text" : "info__text info__text--active"}>{text}</p>
    </div>
  )
}
