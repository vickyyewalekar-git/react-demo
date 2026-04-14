import Header from "../common/Header";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
};

export default PublicLayout;