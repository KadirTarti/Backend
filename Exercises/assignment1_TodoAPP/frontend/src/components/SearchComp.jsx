import React from 'react';
import FaMagnifyingGlass from 'react-icons/fa6';

const handleChange = (event) => {
  // Arama sorgusunu işle ve gerekli işlemleri yap
  console.log(event.target.value);
};

const SearchComp = () => {
  return (
    <div className="mt-5">
      <div className="relative w-6/12 mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* <img src={<FaMagnifyingGlass />} alt="" /> */}
        </div>
        <input
          type="search"
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900 focus:bg-gray-700 focus:text-white"
          placeholder="Ara..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchComp;