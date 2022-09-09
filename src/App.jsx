import { useState } from 'react'
import Nav from './Components/Nav'
import Inicio from './Components/Inicio'
import Proyectos from './Components/Proyecto'
import ListaProyectos from './Components/ListaProyectos'

function App() {

  return (
    <div className="w-full h-full">
      <Nav />
      <Inicio />
      <ListaProyectos />
    </div>
  )
}

export default App
