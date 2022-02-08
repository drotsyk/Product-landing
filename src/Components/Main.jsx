import React from 'react'
import '../Styles/Main.css'

export const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main__body">
          <div className="main__row">
            <div className="main__container">
              <h1 className="main__title">At vero eos et accusamus et iusto odio dignissimos ducimus</h1>
              <div className="main__subtitle">
                Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, 
                quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, 
                omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum 
                necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. 
              </div>
              <button className="main__btn">Try for free</button>
            </div>
                <img className="main__img" src="/Assets/computer.svg" alt="" />
          </div>
        </div>
        <div className="main__row main__row--reverse">
            <img className="main__img" src="/Assets/clock.svg" alt="" />
          <div className="main__container">
            <h1 className="main__title">Temporibus autem quibusdam et aut officiis debitis</h1>
            <div className="main__subtitle">
              At vero eos et accusamus et iusto odio dignissimos ducimus,
              qui blanditiis praesentium voluptatum deleniti atque corrupti, 
              quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, 
              similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </div>
            <button className="main__btn">Try for free</button>
          </div>
        </div>
      </section>
    </>
  )
}

