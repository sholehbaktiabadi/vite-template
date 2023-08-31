import React, { useState } from "react";

function Navbar() {

  const [toogleIcon, setToogleIcon] = useState('fa-solid fa-bars cursor-pointer text-2xl md:hidden')

  const onToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    toogleIcon == 'fa-solid fa-bars cursor-pointer text-2xl md:hidden' ? 
    setToogleIcon('fa-solid fa-xmark cursor-pointer text-2xl md:hidden'):
    setToogleIcon('fa-solid fa-bars cursor-pointer text-2xl md:hidden')
    const navlink = document.querySelector('.nav-links')
    navlink?.classList.toggle('top-[3%]')
  }

  return (
    <>
      <div className="container-lg bg-slate-200">
      <nav className="flex justify-between items-center w-[80%] mx-auto">
        <div>
          <p>Logos</p>
        </div>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[25vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-4">
            <li>
              <a href="#" className="hover:text-gray-500">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-slate-200 px-5 py-2 rounded-full">Sign In</button>
          <i onClick={onToggleMenu} className={toogleIcon}></i>
        </div>

      </nav>
      </div>
    </>
  );
}

export default Navbar;
