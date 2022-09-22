import React from 'react'
import { useState } from 'react'

const Nav = () => {

  const clickMenu = (e) => {
    e.preventDefault();
    const nav = document.getElementById('navMobile');
    const botonCerrar = document.createElement('button');
    const botonAbrir = document.createElement('button');
    const contenedorBoton = document.querySelector('#contenedorBoton');
    
    if(nav.classList.contains('mobile')) {
      nav.classList.remove('mobile');
      contenedorBoton.innerHTML = '';
      botonCerrar.innerHTML = `<i class="fa-solid fa-x py-[10px] text-5xl"></i>`
      contenedorBoton.appendChild(botonCerrar);

    } else {
      
      nav.classList.add('mobile');
      contenedorBoton.innerHTML = '';
      botonAbrir.innerHTML = `<i class="fa-sharp fa-solid fa-bars py-[10px] text-5xl"></i>`
      contenedorBoton.appendChild(botonAbrir);
    }
  }

  return (
    <div className="flex flex-col pt-3 text-white">

        <div className="md:hidden flex items-center justify-center">
          <button id="contenedorBoton" className="hover:text-red-500" onClick={clickMenu}><i className="fa-sharp fa-solid fa-bars py-[10px] text-5xl"></i></button>
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