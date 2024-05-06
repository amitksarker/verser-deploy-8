import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
    </div>
    <a className="font-work font-bold text-3xl text-[#131313]">Book Vibe</a>
  </div>
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to="/"> Home </NavLink></li>
      <li> <NavLink to="/listedbook"> Listed Books</NavLink></li>
      <li> <NavLink to="/pagetoread"> Pages to Read</NavLink></li>
    </ul>
  </div>

  <div className="navbar-end gap-6">
    <a className="btn w-[124px] h-[57px] bg-[#23BE0A] font-work font-semibold text-lg text-[#ffffff]">Sign In</a>
    <a className="btn w-[124px] h-[57px] bg-[#59C6D2] font-work font-semibold text-lg text-[#ffffff]">Sign Up</a>
  </div>
</div>
    );
};

export default Header;