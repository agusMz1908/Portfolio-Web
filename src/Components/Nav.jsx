import React from 'react'

const Nav = () => {
  return (
    <div className="flex flex-col pt-3 text-white">
        <nav className="flex text-xl items-center justify-around">
            <a href="https://www.google.com/" target="_blank"><button className="btn draw-border">Proyects</button></a>
            <a href="https://www.google.com/" target="_blank"><button className="btn draw-border">Tecnologys</button></a>
            <a href="https://www.google.com/" target="_blank"><button className="btn draw-border">Contact Me</button></a>
        </nav>
    </div>
  )
}

export default Nav