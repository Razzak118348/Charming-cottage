import { Link, NavLink } from "react-router-dom";
import '../../../src/index.css';

const Navbar = () => {

  const Navlink = <>
    <li><NavLink className=" mr-1   md:mr-4  my-0 md:my-0 F font-bold text-base   " to='/'>Home</NavLink> </li>
    <li><NavLink className=" mr-1   md:mr-4  my-0 md:my-0  font-bold text-base " to='/properties'>Properties</NavLink></li>
    <li><NavLink className=" mr-1   md:mr-4  my-0 md:my-0 font-bold text-base " to='/service'>Service</NavLink></li>
    <li> <NavLink className="mr-1   md:mr-4  my-0 md:my-0 font-bold text-base " to='/about'>About</NavLink></li>
    <li> <NavLink className="mr-1   md:mr-4  my-0 md:my-0  font-bold text-base " to='/contact'>Contact</NavLink></li>




  </>


  return (
    <div className="navbar bg-base-100 pt-4 popin-font">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {Navlink}

          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl md:text-2xl font-extrabold   animate__backInLeft animate__delay-2s">Charming Cottage</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Navlink}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'} className="btn bg-yellow-400 font-bold text-base md:text-xl">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;