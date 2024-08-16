import React from "react";
import CardContainer from "./components/CardContainer";

export const metadata = {
  title: "Profile",
  description: "This is Profile page",
};

const Profile = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl text-white text-center">
          Who's watching?
        </h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default Profile;
