import React from 'react'
import Navbar from '../Component/Navbar'
import Annocement from '../Component/Annocement'
import "../Css/Home.css"
import Slider from '../Component/Slider'

function Home() {
  return (
    <>
    <Annocement/>
    <Navbar />
    <Slider />
    </>
  )
}

export default Home