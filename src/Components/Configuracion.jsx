import React from 'react'
import Spanish from '../Images/espana.png'

const Configuracion = () => {

    const clickDarkMode = (e) => {
        e.preventDefault();
        const appBody = document.querySelector('#appBody')
        appBody.classList.toggle('darkMode');
    }

    return (
        <div className="flex flex-row items-center justify-start pl-3">
            <button onClick={clickDarkMode}><i id="botonDarkMode" className="fa-solid fa-moon text-2xl"></i></button>
            <button><img 
                src={Spanish}
                className=" ml-2 h-[20px] w-[20px]"
            /></button>
        </div>
    )
}

export default Configuracion