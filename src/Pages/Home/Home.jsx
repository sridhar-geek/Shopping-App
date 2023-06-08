
import Navbar from '../../Component/Navbar'
import Annocement from '../../Component/Annocement'
import "../../Css/Home.css"
import Slider from './Slider'
import Categories from './Categories'

function Home() {
  return (
    <>
    <Annocement/>
    <Navbar />
    <Slider />
    <Categories />
    </>
  )
}

export default Home