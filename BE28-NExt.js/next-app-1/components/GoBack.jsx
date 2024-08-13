"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-800 hover:text-gray-100 hover:bg-gray-800 font-semibold px-4 py-2 border border-gray-800 rounded shadow float-right mt-4"
    >
      Go Back
    </button>
  );
};

export default GoBack;
