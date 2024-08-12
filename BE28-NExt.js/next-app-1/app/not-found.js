import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen ">
      <div className="max-w-lg mx-auto space-y-3 text-center  ">
        <h3 className="text-gray-950 font-semibold">404 Error</h3>
        <p className="text-gray-800 text-4xl font-semibold ">Page Not Found</p>
        <p className="text-gray-600">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="block py-2 px-4 text-white font-medium bg-main duration-150 hover:bg-orange-600 rounded-lg">
            Go Back
          </button>
          <button className="block py-2 px-4 text-gray-700 font-medium hover:text-white duration-150 hover:bg-gray-800 rounded-lg border">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
