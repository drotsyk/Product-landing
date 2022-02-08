import React from 'react'
import '../Styles/Footer.css'

export const Footer = () => {
  const navManu = ["About", "Product", "FAQ", "Contact"]
  const menu = ["Blog", "How it works", "Client", "Reviews"]
  const social = ["logos-facebook", "logos-instagram", "logos-pinterest", "logos-youtube"]
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__call">
            <p>+49(621) 53399112</p> 
            <p>Call us</p> 
          </div>
          <div className="footer__stars">
          </div>
        
        </div>
        <div className="footer__container">
          <ul className="footer__nav">
            {navManu.map((item, index) => (
              <li className="menu__item" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer__container">
          <ul className="footer__menu">
            {menu.map((item, index) => (
              <li className="menu__item" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer__container">
          {social.map((item, index) => (
            <img key={index} className="footer__icon" src={`./Assets/${item}.svg`} alt="logo"/>
          ))}
          <div className="footer__container">
            <img className="footer__icon" src="./Assets/visa.svg" alt="logo"/>
            <img className="footer__icon" src="./Assets/master.svg" alt="logo"/>
          </div>
          <div className="footer__container">
            <img className="footer__icon" src="./Assets/dmca.svg" alt="logo"/>
            <img className="footer__icon" src="./Assets/protected.svg" alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}
