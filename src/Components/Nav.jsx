import React from 'react'
import { useState } from 'react'
import Configuracion from './Configuracion'
import RedesSociales from './RedesSociales'


const Nav = () => {

  const clickMenu = (e) => {
    e.preventDefault();
    const nav = document.querySelector('#navMobile');
    const contenedorBoton = document.querySelector('#contenedorBoton');
    const botonCerrar = document.createElement('i');
    const botonAbrir = document.createElement('i');
    
    if(nav.classList.contains('mobile')) {
      nav.classList.remove('mobile');
      contenedorBoton.innerHTML = '';
      botonCerrar.innerHTML = `<i class="fa-solid fa-x py-[10px] text-5xl hover:text-red-500"></i>`
      contenedorBoton.appendChild(botonCerrar);

    } else {

      nav.classList.add('mobile');
      contenedorBoton.innerHTML = '';
      botonAbrir.innerHTML = `<i class="fa-sharp fa-solid fa-bars py-[10px] text-5xl"></i>`
      contenedorBoton.appendChild(botonAbrir);
    }
  }

  return (
    <div className="flex flex-col text-white pt-3">

      <div className="flex align-items justify-between pb-5">
        <Configuracion />
        <RedesSociales />
      </div>
        
      <div className="md:hidden flex items-center justify-center">
        <button id="contenedorBoton" onClick={clickMenu}><i className="fa-sharp fa-solid fa-bars text-5xl text-white hover:text-red-500"></i></button>
      </div>

      <nav id="navMobile" className="flex flex-col text-xl items-center mobile md:flex md:flex-row">
        <a href="https://www.google.com/" target="_blank" className="py-4"><button className="btn draw-border">Tecnologys</button></a>
        <a href="https://www.google.com/" target="_blank" className="py-4"><button className="btn draw-border">Proyects</button></a>
        <a href="https://www.google.com/" target="_blank" className="py-4"><button className="btn draw-border">Contact Me</button></a>
      </nav>
    </div>
  )
}

export default Nav