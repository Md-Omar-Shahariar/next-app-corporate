import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-2xl text-red-300 font-bold w-full flex justify-between py-4 px-4">
      <Link href={"/"}>Home</Link>
      <div className="flex gap-8 text-right ">
        <Link href={"/performance"}>Performance</Link>
        <Link href={"/reliability"}>Reliability</Link>
        <Link href={"/scale"}>Scale</Link>
      </div>
    </div>
  );
};

export default Header;
