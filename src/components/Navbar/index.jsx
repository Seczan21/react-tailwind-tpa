import React from 'react';
import Logo from '../../assets/logo.png';
import Profile from '../../assets/profile.png';

export default function Navbar() {
  return (
    <nav className=" bg-gray-900 md:1/2 lg:1/5 ">
      <div className="sticky container mx-auto top-0 py-8 flex justify-between items-center py-3 px-6 mx-1 ">
        <div className="flex items-center ">
          <img src={Logo} alt="Neva" className="mr-6  top- w-12 cursor-pointer  " />
          <span className="text-slate-300 text-2xl font-semibold mx-1 my-3 md:mx-1/2 lg:-text-xl">Silpa |</span>
          <a href="" className="text-slate-300 flex ">
            Tulus Asih Group
          </a>
        </div>
        <div className="">
          <img src={Profile} alt="" className=" inline-block h-12 w-12 rounded-full ring-2 ring-transparent ring-opacity-1 justify-items-end" /> <h1 className="inline-block text-slate-300 font-semibold">Fauzan</h1>
        </div>
      </div>
    </nav>
  );
}
