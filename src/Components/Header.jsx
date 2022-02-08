import React, { useState } from 'react'
import '../Styles/Header.css'

export const Header = () => {
  const list = ['About', 'Product', 'FAQ', 'Contact']
  const [active, openMenu] = useState(false)
  return (
    <header className="header">
      <div className="header__container">
        <img src="./Assets/logo.png" alt="" />
        <div className={active ? "header__menu menu header__menu--active" : "header__menu menu"}>
          <div className="menu__icon" onClick={()=>{
            openMenu(!active)
          }}><span></span></div>
        </div>
        <nav className={active ? 'menu__body menu__body--active': 'menu__body'}>
          <ul className="menu__list">
            <li className='menu__search'><img src="./Assets/search-alt.svg" alt="" /></li>
            <li className='menu__call'><img src="./Assets/mobile-vibration.svg" alt="" />Call us</li>
            {list.map((item, index) => (
              <li 
                key={index} 
                className="menu__link" 
                onClick={() => {
                openMenu(false)
              }}>
                {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => {
              openMenu(false)
            }} 
            className="menu__btn">
              Download
            </button>
          <button 
            onClick={() => {
              openMenu(false)
            }} 
            className="menu__btn">
              Sing up
            </button>
        </nav>
      </div>
    </header>
  )
}
