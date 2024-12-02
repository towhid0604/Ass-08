import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
