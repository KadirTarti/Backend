"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import logo from "/public/clarusway-logo.png";

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
  let pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="bg-navbarColor text-sm px-4 flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center py-5 mr-4 ">
          <Link href="/" className="flex items-center">
            {/* //? Next.js, import edilen dosyaya göre image genişliğini ve yüksekliğini otomatik olarak belirler ancak Next.js'nin build işlemi sırasında remote dosyalara erişimi olmadığından, genişlik ve yükseklik özelliklerini manuel olarak sağlamanız gerekir. */}
            {/* //* farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir. */}
            <Image
              width={150}
              height={50}
              // src="/clarusway-logo.png"
              // src={logo}
              src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="flex">
          {navigation.map((item) => (
            <li
              key={item.title}
              className={`font-medium hover:bg-gray-300 rounded-full py-2 px-4 hover:text-white inline-block text-lg ${
                item.path === pathname && "bg-gray-300"
              } `}
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
