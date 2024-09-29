import Image from "next/image";
import React from "react";
import { User, LogOut } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { signOut } from "next-auth/react";

const Nav = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold">TestArc</h1>

      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer w-14 h-14 overflow-hidden rounded-full bg-white">
            <Image
              src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
              width={500}
              height={500}
              alt="Profile"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2  bg-white rounded-md border border-gray-300">
          <ul>
            <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
              <User className="w-4 h-4 mr-2" />
              Profile
            </li>
            <li
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => signOut()}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Nav;
