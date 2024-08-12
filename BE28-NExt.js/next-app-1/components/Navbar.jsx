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
    <nav className="bg-navbarColor text-sm px-4 flex justify-between">
    <div className="flex items-center">
      <div>
        <img src="/clarusway-logo.png" width='150px' alt="" />
      </div>
      <ul ckassName='flex'>
        {navigation.map((item)=>(
            <li key={item.title} className={`font-medium hover:bg-gray-300 rounded-full py-2 px-4 hover:text-white inline-block text-lg`}>
                <a href={item.path}> {item.title}</a>
            </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
