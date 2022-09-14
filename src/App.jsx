import { useState } from 'react'
import Nav from './Components/Nav'
import Inicio from './Components/Inicio'
import ListaProyectos from './Components/ListaProyectos'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="w-full h-full bg-[#181818]">
      <Nav />
      <Inicio />
      <ListaProyectos />
      <Footer />
    </div>
  )
}

export default App
