import React from "react";
import logoMC from './Img/logoMC.png';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <section className="flex">
              <img src={logoMC} className="h-20"/>
                <label className="label flex mx-4 mt-4" style={{color: '#f2b313', fontSize: '20px'}}>
                  MortalCombat
                </label>
            </section>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mt-4">
              <li className="nav-item">
                <Link to='/' className="no-underline text-white"><span className="ml-2">Home</span></Link>
              </li>
              <li className="nav-item">
                  <Link to='/movie' className="text-white no-underline"><span className="ml-2">Movie</span></Link>
              </li>
              <li className="nav-item">
                  <Link to='/Login' className="no-underline text-white"><span className="ml-2">Login</span></Link>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;