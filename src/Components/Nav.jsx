import React from 'react'

const Nav = () => {
  return (
    <div className="flex flex-col pt-3">
        <h1 className="flex justify-center pb-5 text-3xl">PORTFOLIO</h1>
        <nav className="flex items-center justify-around text-xl">
            <a href="">Proyectos</a>
            <a href="">Tecnologias</a>
            <a href="">Sobre Mi</a>
        </nav>
    </div>
  )
}

export default Nav