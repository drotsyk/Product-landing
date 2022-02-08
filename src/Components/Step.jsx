import React, {useState, useEffect} from 'react'
import '../Styles/Step.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

export const Step = () => {
  const currentList = ["Nemo enim", "Die ipsam voluptatem", "Ut enim ad minima", "Quis autem vel", "Sed ut perspiciatis"]
  const currentInfo = [
    [ 
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium",
      "Doloremque laudantium,quae ab illo inventore totam rem aperiam eaque ipsa" ,
      "Fet enim ad minima veniam, quis nostrum exercitationem ullam corporis" 
    ],
    [ 
      "Sed ut perspiciatis, sit unde omnis iste natus error voluptatem accusantium",
      "Doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore" ,
      "quis nostrum exercitationem ullam corporis, fet enim ad minima veniam " 
    ],
    [ 
      "Sed ut perspiciatis, unde iste natus error sit voluptatem omnis accusantium",
      "Doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore" ,
      "Fet enim ad minima veniam, quis nostrum exercitationem ullam corporis" 
    ],
    [ 
      "Doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore" ,
      "Sed ut perspiciatis, unde iste natus error sit voluptatem omnis accusantium",
      "Fet enim ad minima veniam, quis nostrum exercitationem ullam corporis" 
    ],
    [ "Fet enim ad minima veniam, quis nostrum exercitationem ullam corporis",
      "Doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore" ,
      "Sed ut perspiciatis, unde iste natus error sit voluptatem omnis accusantium"
    ],
  ]
  const stepList = ["1", "2", "3" ,"4"]
  const [step, setStep] = useState(1)
  const [current, setCurrent] = useState(0)
  const [size, setSize] = useState(null)
  
  useEffect(() => {
    window.addEventListener('resize', windowSize)
    windowSize()
    return () => {
      window.removeEventListener('resize', windowSize);
    };
  },[]);
  
  
  function windowSize() {
    setSize(window.innerWidth)
  }
  
  return (
    <div className="step">
      <h2 className="step__title">How it works</h2>
      <div className="step__subtitle"> 
        Ut enim ad minim veniam, q
        uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <ul className="step__list">
        {stepList.map((item, index) => (
          <li key={index} className="step__item" onClick={() => setStep(item)}>
            <div className="step__container">
            {item >= 2 && (
              <hr className={ step >= item ? "step__line step__line--active" : "step__line"}></hr>
            )}
              <div>
              <span className={step >= item ? "step__circle step__circle--active" : "step__circle"}>{item}</span>
            <div className="step__name">Step {item}</div>
            </div>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="step__current">Step {step}</h3>
      <h2 className="step__instruction">Sed ut perspiciatis</h2>
      <div className={size <= 768 ? "step__container--space" : "step__container step__container--space"}>
        {size <= 768 ? (
          <Swiper
            spaceBetween={15}
            slidesPerView={2}
          >
            <ul className="step__info-list">
              {currentList.map((item,index) => (
                <SwiperSlide key={index}>
                  <li 
                    className={current === index ? "info-list__item info-list__item--active" : "info-list__item" }
                    onClick={() => setCurrent(index)}
                  >
                    {item}
                  </li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        ) : (
          <ul className="step__info-list">
            {currentList.map((item,index) => (
              <li 
                key={index} 
                className={current === index ? "info-list__item info-list__item--active" : "info-list__item" }
                onClick={() => setCurrent(index)}
              >
                ――― {item},
              </li>
            ))}
          </ul>
        )}
        <div className="step__block">
          <div className="step__current-title">Nemo enim ipsam voluptatem, quia voluptas sit</div>
            <ul className="step__current-list">
              {currentInfo[current].map((item, index) => (
                <li key={index}>
                  <span className="step__list-number">
                    {index + 1}.
                  </span>
                  <span className="step__current-info">  
                    {item}
                  </span>
                </li>
              ))
              }
            </ul>
          <span className="step__notice">Notice:</span>
          <div className="step__current-info">Dolorem ipsum, quia dolor sit amet consectetu</div>
          </div>
      </div>
  </div>
  )
}
