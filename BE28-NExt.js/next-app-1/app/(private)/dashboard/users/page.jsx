import GoBack from "@/components/GoBack";
import Link from "next/link";
import React from "react";

const Users = () => {
  const userArr = [1, 2, 3, 4];
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, this is Users Page
      </h1>
      <nav className="flex flex-col p-2">
        {userArr.map((user) => (
          <Link
            key={user}
            href={`/dashboard/users/${user}`}
            className="underline"
          >
            Go User - {user}
          </Link>
        ))}
      </nav>
      <GoBack />
    </div>
  );
};

export default Users;
