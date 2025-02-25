import { useState } from "react";
import { MenuButtonWide, XCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function NavBar(){

  const [mobileNav, setMobileNav] = useState(false);


  return(
    <>
      <nav className="flex flex-row w-full justify-between items-center top-0 sticky z-50 h-16 bg-white px-4">
        <NavLink to="/" className="flex flex-row justify-center items-center gap-2">
          <img src="/assets/logo_insam.png" alt="logo" className="w-10 h-10" />
          <span className="merienda-font text-xl">
            Smart Pro
          </span>
        </NavLink>

        <ul className="hidden md:flex flex-row gap-6">
          <li>
            <NavLink to="/" className="nav-underline text-colorBlue transition-all">
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink to="/planification" className="nav-underline hover:text-colorBlue transition-all">
              Planification
            </NavLink>
          </li>

          <li>
            <NavLink to="/motivation" className="nav-underline hover:text-colorBlue transition-all">
              Motivation
            </NavLink>
          </li>

          <li>
            <NavLink to="/developpement-personnel" className="nav-underline hover:text-colorBlue transition-all">
              Développement personnel
            </NavLink>
          </li>

          <li>
            <NavLink to="/gestion-financiere" className="nav-underline hover:text-colorBlue transition-all">
              Gestion financière
            </NavLink>
          </li>

          <li>
            <NavLink to="/auto-evaluation" className="nav-underline hover:text-colorBlue transition-all">
              Auto-évaluation
            </NavLink>
          </li>

          <li>
            <NavLink to="/espace-client" className="border-[2px] border-colorBlue py-2 px-4 rounded-md text-colorBlue hover:bg-colorBlue hover:text-white transition-all">
              Espace client
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          {
            mobileNav ?
            (
              <XCircle className="text-colorBlue text-xl" onClick={()=>setMobileNav(!mobileNav)}/>
            ):(
              <MenuButtonWide className="text-colorBlue text-xl" onClick={()=>setMobileNav(!mobileNav)}/>
            )
          }
        </div>

        <div className={`md:hidden fixed top-16 bg-white h-full w-[100%] z-50  ${mobileNav ? ` left-0 animate__animated animate__slideInLeft` : `left-[100%]` }`}>

          <ul className="flex flex-col">
            <li className="my-2 mx-4">
              <NavLink to="/" className="nav-underline text-colorBlue transition-all">
                Accueil
              </NavLink>
            </li>

            <li className="my-2 mx-4">
              <NavLink to="/planification" className="nav-underline hover:text-colorBlue transition-all">
                Planification
              </NavLink>
            </li>

            <li className="my-2 mx-4">
              <NavLink to="/motivation" className="nav-underline hover:text-colorBlue transition-all">
                Motivation
              </NavLink>
            </li>

            <li className="my-2 mx-4">
              <NavLink to="/developpement-personnel" className="nav-underline hover:text-colorBlue transition-all">
                Développement personnel
              </NavLink>
            </li>

            <li className="my-2 mx-4">
              <NavLink to="/gestion-financiere" className="nav-underline hover:text-colorBlue transition-all">
                Gestion financière
              </NavLink>
            </li>

            <li className="my-2 mx-4">
              <NavLink to="/auto-evaluation" className="nav-underline hover:text-colorBlue transition-all">
                Auto-évaluation
              </NavLink>
            </li>

            <li className="my-6 mx-4">
              <NavLink to="/espace-client" className="border-[2px] border-colorBlue py-2 px-8 rounded-md hover:bg-colorBlue text-colorBlue hover:text-white transition-all">
                Espace client
              </NavLink>
            </li>
          </ul>

        </div>


      </nav>
    </>
  )
}