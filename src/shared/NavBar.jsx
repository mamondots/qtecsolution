import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

import CartSideBar from "./CartSideBar";

const NavBar = () => {
  return (
    <div className="container mt-4">
      <div className="flex items-center justify-between border px-4 py-2 rounded">
        <Link to="/">
          <div className="w-[50px] h-[50px]">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
        </Link>
        <div>
          <ul className="flex items-center gap-3">
            <Link to="/">
              <li className="hover:text-[#059CFA] duration-300">Home</li>
            </Link>
            <Link to="/cart">
              <li className="hover:text-[#059CFA] duration-300">Cart</li>
            </Link>
          </ul>
        </div>
        <div>
          <CartSideBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
