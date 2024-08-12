import React from "react";

const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/clarusway-logo.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
