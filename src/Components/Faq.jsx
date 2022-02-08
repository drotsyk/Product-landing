import React from 'react'
import { Info } from './Info'
import '../Styles/Faq.css'

export const Faq = () => {
  const title = ["At vero eos et accusamus et iusto odio?", " Nemo enim ipsam voluertrhs?", "nventore veritatis et quasi architecto beatae vitae dicta ?"]
  const infoText = [
    "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.",
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.", 
    "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor."
  ]
  return (
    <div className="faq">
      <h2 className="faq__title">FAQ</h2>
      <Info title={title[0]} text={infoText[0]}/>
      <Info title={title[1]} text={infoText[1]}/>
      <Info title={title[2]} text={infoText[2]}/>
      <button className="faq__btn">Try for free</button>
    </div>
  )
}
