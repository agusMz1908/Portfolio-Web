import React from 'react'
import Imagen from '../Images/imagenProyecto.png'
import ImagenGitHub from '../Images/github.png'
import ImagenLink from '../Images/www.png'

const Proyecto = () => {
  return (
    <div className="p-10">
        <h1 className="pb-10">Proyectos</h1>

        <div className="flex flex-col items-center justify-center">
          <div className="rounded-tl-lg rounded-br-lg border border-black w-[250px] h-[350px]">
            <img
              src={Imagen}
              className="p-2"
            />
            <div className="flex flex-col items-center">
              <h1>PROYECTO 1</h1>
              <p>Breve descripcion del proyecto</p>

              <div className="flex flex-row justify-center items-center">
                <img
                  src={ImagenGitHub}
                  className="w-[35px] h-[35px]"
                />
                <img
                  src={ImagenLink}
                  className="w-[35px] h-[35px]"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyecto