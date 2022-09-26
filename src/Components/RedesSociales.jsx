import React from 'react'

const RedesSociales = () => {
  return (
    <div className="flex flex-row pr-3">
        <a href="https://api.whatsapp.com/send/?phone=59891844131" target="_blank"><i className="fa-brands fa-whatsapp text-white text-3xl hover:text-red-500"></i></a>
        <a><i className="fa-regular fa-envelope text-white text-3xl ml-3 hover:text-red-500"></i></a>
        <a href="https://github.com/agusMz1908" target="_blank"><i className="fa-brands fa-github text-white text-3xl ml-3 hover:text-red-500"></i></a>
        <a href="https://www.linkedin.com/in/agustin-muniz-02577220a/" target="_blank"><i className="fa-brands fa-linkedin text-white text-3xl ml-3 hover:text-red-500"></i></a>
    </div>
  )
}

export default RedesSociales