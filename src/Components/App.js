import Calculator from './Calculator'
import { Header } from './Header'
import { Main } from './Main'
import { Step } from './Step'
import { Reviews } from './Reviews'
import { Faq } from './Faq'
import { Footer } from './Footer.jsx'

export function App() {
  return (
    <>
      <Header />
      <Main/>
      <Calculator/>
      <Step/>
      <Reviews/>
      <Faq/>
      <Footer />
    </>
  );
}

