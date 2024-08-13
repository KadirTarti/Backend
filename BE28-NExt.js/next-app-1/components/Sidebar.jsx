import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-40 h-screen bg-cyan-300 float-left text-black pt-10 pl-3 ">
      <nav className="flex flex-col">
        <Link href="/dashboard/settings" className="underline">
          Settings
        </Link>
        <Link href="/dashboard/profile" className="underline">
          Profile
        </Link>
        <Link href="/dashboard/users" className="underline">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
