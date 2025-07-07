import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="container mt-4">
      <div className="flex items-center justify-between border px-4 py-2 rounded">
        <div className="w-[50px] h-[50px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <Link to="/">
              <li className="hover:text-[#059CFA] duration-300">Home</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#059CFA] duration-300">Cart</li>
            </Link>
          </ul>
        </div>
        <div>
          <BsCart3 />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
