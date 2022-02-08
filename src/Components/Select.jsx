import React,{useState} from 'react';
import '../Styles/Select.css'

export const Select = ({list,width, defaultValue}) => {
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className={open ? 'select select--active' : 'select'} style={{width:`${width}px`}}>
      <div className="select__body">
        <button className='select__btn' onClick={() => {
          setOpen(!open)
        }}>{value}</button>
          <ul className={open ? 'select__list select__list--active' : 'select__list'}>
          {list.map(item => (
            <li key={item} className='select__item' onClick={() => {
              setValue(item)
              setOpen(false)
            }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
};
