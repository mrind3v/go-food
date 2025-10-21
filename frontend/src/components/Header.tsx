import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
export default function Header() {
  return (
    <div className="border-b-2 border-b-gray-600 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl font-bold tracking-tight text-gray-600"
          to={"/"}
        >
          GoFood
        </Link>
        <div className="md:hidden">
            <MobileNav/>
        </div>
        <div className="hidden md:block">
            <MainNav/>
        </div>
      </div>
    </div>
  );
}
