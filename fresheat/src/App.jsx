
import './App.css'
import About from './components/About'
import Chef from './components/Chef'
import Delete from './components/Delete'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbaar from './components/Navbaar'
import Offer from './Offer/Offer'
import One from './components/One'
import Pizzaa from './components/Pizzaa'
import Word from './components/Word'
import Clients from './components/Clients'
import Testimonial from './testimonial/Testimonial'
import Words from './components/Words'
import Latest from './latest/Latest'
import Slider from './slider/Slider'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import Mouse from './components/Mouse'

function App() {
  
  return (
    <>
    <div className='overflow-hidden'>

       <div className='w-full'>
        <div className='max-w-7xl mx-auto'>
          <Navbaar />
         </div>
    </div>
    <div className='w-full'>
         <div className='max-w-7xl mx-auto'>
           <Hero />
         </div>
    </div>
   
     <One />
     <About />
     <Menu />
     <Pizzaa />
     <Delete />
     <Word />
     <Offer />
     <Chef />
     <Clients />
     <Testimonial />
     <Words />
     <Latest />
     <Slider />
     <Footer />
     <Scroll />
     <div className='hidden lg:block'>
     <Mouse />
     </div>
     </div>
    </>
  )
}

export default App
