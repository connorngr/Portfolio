import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "../../public/ThemeSwtich";
import { useEffect, useState } from "react";
import {motion, AnimatePresence} from "framer-motion"
import { routes } from "../../public/Infos";
import Item from "./NavItem";


function Nav() {
  const [open, setOpen] = useState(false);
  function toggleNav() {
      setOpen(!open);
  }
    return (
    <div className="nav-bar">
        <nav className="nav bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" >
        <img
         src="images/Z5cP.gif" 
        className="h-8 w-14 rounded-full text-yellow-50 object-cover" alt="Logo" />
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><HomeRoundedIcon /></span> */}
    </Link>
      <div className=" flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {/* <!-- <button onclick="themeSwtich()" type="button" className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
          </svg>
        </button> --> */}
        
        <ThemeSwitcher />
        <button data-collapse-toggle="navbar-sticky" onClick={toggleNav} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      </div>
    <div className={`items-center justify-between ${open ? null : "hidden"} transition w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {routes.map((elem, index) => {
          return <Item key={index} id={index} href={elem.href} title={elem.title} toggle={setOpen}/>
        })}
      </ul>
    </div>
  </div>
  </nav>
</div>

    )
}

export default Nav;