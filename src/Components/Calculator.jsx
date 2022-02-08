import React, {useState} from 'react'
import '../Styles/Calculator.css'
import {Select} from './Select'

const Calculator = () => {
  const [number, setNumber] = useState(100)
  const list1 = ['red', 'green', 'blue', 'orange']
  const [value, setDate] = useState(new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/'));
  const list2 = ['100%', '150%', '200%']
  const list3 = ['Kyiv', 'Odessa', 'Rivne', 'Lviv']
  const list4 = ['New Post', 'Urkposhta', 'Pickup', 'Lviv']
  
  const [test, setTest] = useState(true)

  return (
    <div className="calculator">
      <div className="calculator__wrapper">
        <h1 className="calculator__title">Calculator</h1>
        <h2 className="calculator__subtitle">Nam libero tempore, cum soluta nobis est eligendi optio</h2>
        <div className="calculator__row">
          <div>
            <div className="calculator__row">
              <Select list={list1} width={180} defaultValue={'Colors'}/>
              <Select list={list2} width={180} defaultValue={'Size'}/>
              <div className="calculator__counter counter">
                <div className="counter__body">
                  <button onClick={()=>setNumber(number - 1)}>-</button>
                  <div>{number}</div>
                  <button onClick={()=>setNumber(number + 1)}>+</button>
                </div>
              </div>
              <div className='calculator__calendar-body'>
                <label htmlFor='onDate' className="calculator__calendar" onClick={() => {
                  setTest(!test)
                }}>
                  {value.toString()}
                </label>
                <input className='inputDate' id='onDate' type="date" onChange={(e) => {
                  setDate(e.target.value)
                }} />
              </div>
            </div>
            <div className="calculator__row">
              <Select list={list3} width={380} defaultValue={'City'}/>
              <Select list={list4} width={380} defaultValue={'Delivery'}/>
            </div>
          </div>
          <div className="calculator__column">
            <div className="calculator__number">$ 56.25</div>
            <button className='calculator__btn'>Procced</button>
          </div>
        </div>
         
        </div>
    </div>
  )
}

export default Calculator
