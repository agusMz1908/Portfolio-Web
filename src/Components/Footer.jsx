import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-white flex flex-row items-center justify-evenly text-2xl py-4">
            <hr className="h-[2px] w-[150px] bg-white"></hr>
            <a><i class="fa-brands fa-whatsapp text-red-500"></i></a>
            <a><i class="fa-regular fa-envelope text-red-500"></i></a>
            <a><i class="fa-brands fa-github text-red-500"></i></a>
            <a><i class="fa-brands fa-linkedin text-red-500"></i></a>
        </footer>
    </div>
  )
}

export default Footer