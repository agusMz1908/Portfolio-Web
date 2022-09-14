import React from 'react'
import Imagen from '../Images/imagenProyecto.png'

const Proyecto = () => {
  return (
    <div className="text-center">
        <h1 className="pb-10 font-bold text-white">PROYECTOS</h1>

        <div className="flex flex-col items-center justify-center pb-10">
          <div className="rounded-tl-lg rounded-br-lg border-4 border-red-500 shadow-red-500/50 shadow-xl">
            <img
              src={Imagen}
              className="p-2 w-[275px]"
            />
            <div className="flex flex-col items-center text-white">
              <h1 className="m-3 font-bold">PROYECTO 1</h1>
              <hr className="h-[5px] w-[150px] bg-white"></hr>
              <p className="m-3">Breve descripcion del proyecto</p>

              <div className="flex flex-col justify-center items-center">
                <button className="w-[150px] border-2 border-black rounded-tl-lg rounded-br-lg bg-black text-white m-3 hover:bg-white hover:text-black">Visitar</button>
                <button className="w-[150px] border-2 border-black rounded-tl-lg rounded-br-lg bg-black text-white m-3 hover:bg-white hover:text-black">GitHub</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-10">
          <div className="rounded-tl-lg rounded-br-lg border-4 border-red-500 shadow-red-500/50 shadow-xl">
            <img
              src={Imagen}
              className="p-2 w-[275px]"
            />
            <div className="flex flex-col items-center text-white">
              <h1 className="m-3 font-bold">PROYECTO 2</h1>
              <hr className="h-[5px] w-[150px] bg-white"></hr>
              <p className="m-3">Breve descripcion del proyecto</p>

              <div className="flex flex-col justify-center items-center">
                <button className="w-[150px] border-2 border-black rounded-tl-lg rounded-br-lg bg-black text-white m-3 hover:bg-white hover:text-black">Visitar</button>
                <button className="w-[150px] border-2 border-black rounded-tl-lg rounded-br-lg bg-black text-white m-3 hover:bg-white hover:text-black">GitHub</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-10">
          <div className="rounded-tl-lg rounded-br-lg border-4 border-red-500 shadow-red-500/50 shadow-xl">
            <img
              src={Imagen}
              className="p-2 w-[275px]"
            />
            <div className="flex flex-col items-center text-white">
              <h1 className="m-3 font-bold">PROYECTO 3</h1>
              <hr className="h-[5px] w-[150px] bg-white"></hr>
              <p className="m-3">Breve descripcion del proyecto</p>

              <div className="flex flex-col justify-center items-center">
                <button className="w-[150px] border-2 border-black rounded-tl-lg rounded-br-lg bg-black text-white m-3 hover:bg-white hover:text-black">Visitar</button>
                <button className="w-[150px] border-2 border-black rounded-tl-lg rounded-br-lg bg-black text-white m-3 hover:bg-white hover:text-black">GitHub</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyecto