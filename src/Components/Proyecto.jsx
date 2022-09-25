import React from 'react'
import Imagen from '../Images/imagenProyecto.png'

const Proyecto = () => {
  return (
    <div id="contenedorProyectos" className="text-center">
        <h1 className="pb-10 font-bold text-white">PROYECTS</h1>

        <div className="flex flex-col items-center justify-center pb-10">
          <div className="rounded-tl-lg rounded-br-lg border-4 border-red-500 shadow-red-500/50 shadow-xl">
            <a href="https://www.google.com/" target="_blank" className="hover:opacity-40"><img
              src={Imagen}
              className="p-2 w-[275px]"
            /></a>
            <div className="flex flex-col items-center text-white">
              <h1 className="m-3 font-bold text-white">PROYECT 1</h1>
              <hr className="h-[5px] w-[150px] bg-white"></hr>
              <p className="m-3">Breve descripcion del proyecto</p>

              <div className="flex flex-row m-4 justify-end">
                <a href="https://github.com/agusMz1908/Portfolio-Web" target="_blank" className="m-2"><button className="btn draw-border">Visitar</button></a>
                <a href="https://github.com/agusMz1908/Portfolio-Web" target="_blank" className="m-2"><button className="btn draw-border">GitHub</button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-10">
          <div className="rounded-tl-lg rounded-br-lg border-4 border-red-500 shadow-red-500/50 shadow-xl">
            <a href="https://www.google.com/" target="_blank" className="hover:opacity-40"><img
              src={Imagen}
              className="p-2 w-[275px]"
            /></a>
            <div className="flex flex-col items-center text-white">
              <h1 className="m-3 font-bold text-white">PROYECT 2</h1>
              <hr className="h-[5px] w-[150px] bg-white"></hr>
              <p className="m-3">Breve descripcion del proyecto</p>

              <div className="flex flex-row m-4 justify-end items-center">
                <a href="https://github.com/agusMz1908/Portfolio-Web" target="_blank" className="m-2"><button className="btn draw-border">Visitar</button></a>
                <a href="https://github.com/agusMz1908/Portfolio-Web" target="_blank" className="m-2"><button className="btn draw-border">GitHub</button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-10">
          <div className="rounded-tl-lg rounded-br-lg border-4 border-red-500 shadow-red-500/50 shadow-xl">
            <a href="https://www.google.com/" target="_blank" className="hover:opacity-40"><img
              src={Imagen}
              className="p-2 w-[275px]"
            /></a>
            <div className="flex flex-col items-center text-white">
              <h1 className="m-3 font-bold text-white">PROYECT 3</h1>
              <hr className="h-[5px] w-[150px] bg-white"></hr>
              <p className="m-3">Breve descripcion del proyecto</p>

              <div className="flex flex-row m-4 justify-end items-center">
                <a href="https://github.com/agusMz1908/Portfolio-Web" target="_blank" className="m-2"><button className="btn draw-border">Visitar</button></a>
                <a href="https://github.com/agusMz1908/Portfolio-Web" target="_blank" className="m-2"><button className="btn draw-border">GitHub</button></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyecto