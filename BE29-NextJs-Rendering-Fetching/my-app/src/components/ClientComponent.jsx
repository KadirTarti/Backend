"use client";
import React from "react";
import ServerComponent from "./ServerComponent";

const ClientComponent = ({ children }) => {
  console.log("client comp.");
  return (
    <div onClick={() => alert("i'm client")}>
      <h1>ClientComponent</h1>
      {children}
      {/* <ServerComponent /> */}
    </div>
  );
};

export default ClientComponent;
