import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
