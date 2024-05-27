import React from "react";
import { IoAdd, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-screen ">
      <div className="relative h-full w-full">
        <div className="flex h-full w-full scroll-pt-2 flex-col items-center justify-center font-fedrick">
          <h2 className="text-center text-5xl font-[500] leading-normal text-teal-800 ">
            Satya Ayurvedic & Unani
          </h2>
          <div className="z-40 mt-4 flex items-center space-x-4 font-outfit">
            <Link to="members">
              <button className="flex  items-center justify-center gap-2 rounded-3xl bg-gradient-to-l from-green-500 to-green-700 px-4 py-3 text-white hover:bg-opacity-70">
                <IoAdd fontWeight={900} size={20} />
                Add Patient
              </button>
            </Link>
            <Link to="records">
              <button className="flex  items-center justify-center gap-2  rounded-3xl bg-gradient-to-r from-green-500 to-green-700 px-4 py-3  text-white">
                <IoSearch />
                Search Patient
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
