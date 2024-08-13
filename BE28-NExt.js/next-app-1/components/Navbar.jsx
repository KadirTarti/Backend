import Link from "next/link";
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
        <div className="flex items-center py-5 mr-4 ">
          <Link href="/" className="flex items-center">
            <img src="/clarusway-logo.png" width="150px" alt="" />
          </Link>
        </div>
        <ul className="flex">
          {navigation.map((item) => (
            <li
              key={item.title}
              className={`font-medium hover:bg-gray-300 rounded-full py-2 px-4 hover:text-white inline-block text-lg`}
            >
              {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
              <Link href={item.path}> {item.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
