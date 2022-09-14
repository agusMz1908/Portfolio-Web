import React from 'react'
import ImagenGitHub from '../Images/github.png'
import ImagenLinkedIn from '../Images/linkedin.png'

const Nav = () => {
  return (
    <div className="flex flex-col pt-3 text-white">
        <nav className="flex text-xl items-center justify-around">
            <a href="">Proyects</a>
            <a href="">Tecnologys</a>
            <a href="">About Me</a>
            <a href="https://www.linkedin.com/in/agustin-muniz-02577220a/" target="_blank"><i className="fa-brands fa-linkedin text-white"></i></a>
            <a href="https://github.com/agusMz1908" target="_blank"><i className="fa-brands fa-github text-white"></i></a>
        </nav>
    </div>
  )
}

export default Nav