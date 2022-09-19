import React from 'react'
import { useState } from 'react'

const Nav = () => {

  const [navMobile, setNavMobile] = useState(false);

  const clickMenu = (e) => {
    e.preventDefault();
    console.log('Diste click en el boton');
    const nav = document.getElementById('navMobile');
    const botonMenu = document.getElementById('botonNavMobile');
    
    if(nav.classList.contains('mobile')) {
      nav.classList.remove('mobile')
    } else {
      nav.classList.add('mobile')
    }
  }

  return (
    <div className="flex flex-col pt-3 text-white">

        <div className="md:hidden flex items-center justify-center">
          <button id="botonNavMobile" className="hover:text-red-500" onClick={clickMenu}><i className="fa-sharp fa-solid fa-bars py-[10px] text-5xl"></i></button>
        </div>

        <nav id="navMobile" className="flex flex-col text-xl items-center justify-around mobile md:flex md:flex-row">
            <a href="https://www.google.com/" target="_blank" className="py-4"><button className="btn draw-border">Proyects</button></a>
            <a href="https://www.google.com/" target="_blank" className="py-4"><button className="btn draw-border">Tecnologys</button></a>
            <a href="https://www.google.com/" target="_blank" className="py-4"><button className="btn draw-border">Contact Me</button></a>
        </nav>
    </div>
  )
}

export default Nav