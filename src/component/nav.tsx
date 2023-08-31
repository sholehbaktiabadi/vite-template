import React, { useState } from "react";
import laratech from '../assets/laratech.png'

function Navbar() {

  const [toogleIcon, setToogleIcon] = useState('fa-solid fa-bars cursor-pointer text-2xl md:hidden text-slate-200')

  const onToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    toogleIcon == 'fa-solid fa-bars cursor-pointer text-2xl md:hidden text-slate-200' ? 
    setToogleIcon('fa-solid fa-xmark cursor-pointer text-2xl md:hidden text-slate-200 z-20'):
    setToogleIcon('fa-solid fa-bars cursor-pointer text-2xl md:hidden text-slate-200')
    const navlink = document.querySelector('.nav-links')
    navlink?.classList.toggle('top-[3%]')
  }

  return (
    <>
      <div className="container-lg bg-slate-900">
      <nav className="flex justify-between items-center w-[80%] mx-auto">
        <div className="z-20">
          <img src={laratech} className="cursor-pointer w-48 my-4 md:m-7" alt="laratech indonesia" />
        </div>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 my-11 z-10 bg-slate-900">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-4 mx-8">
            <li>
              <a href="#" className="text-lg font-bold text-slate-200 hover:text-gray-500 hover:border-b-4 border-slate-500 py-2 px-1">Home</a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold text-slate-200 hover:text-gray-500 hover:border-b-4 border-slate-500 py-2 px-1">Service</a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold text-slate-200 hover:text-gray-500 hover:border-b-4 border-slate-500 py-2 px-1">About</a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold text-slate-200 hover:text-gray-500 hover:border-b-4 border-slate-500 py-2 px-1">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 md:hidden">
          <i onClick={onToggleMenu} className={toogleIcon}></i>
        </div>

      </nav>
      </div>
    </>
  );
}

export default Navbar;
