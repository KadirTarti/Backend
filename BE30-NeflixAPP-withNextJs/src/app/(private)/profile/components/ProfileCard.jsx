import React from "react";

const ProfileCard = ({ name, image }) => {
  return (
    <div className="w-44 mx-auto cursor-pointer group">
      <div className="w-44 h-44 ">
        <img src={image} alt="profile" />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default ProfileCard;
