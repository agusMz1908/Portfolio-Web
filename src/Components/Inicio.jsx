import React from 'react'
import ProfilePic from '../Images/perfilPic.png'

const Inicio = () => {
  return (
    <div className=" flex flex-col">
        <div className="flex flex-col items-center justify-center p-7 font-bold text-white">
            <img 
              src={ProfilePic}
              className="mb-8 rounded-md shadow-red-500/50 shadow-lg w-[250px] h-[250px]"
            />
            <p>I'm <span className="text-red-500">Agustin Muniz</span> a Full Stack Web Developer Junior with knowledge in JavaScript language and all the enviroment of JS technologies like React and Node.JS. I also used SQL in a few of my projects.</p>
        </div>
    </div>
  )
}

export default Inicio