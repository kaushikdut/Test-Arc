import Image from "next/image";
import React from "react";
import { User, LogOut } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const Nav = () => {
  const { data: session } = useSession();
  return (
    <div
      className={cn(
        "p-3 flex justify-between items-center bg-white",
        session && "bg-slate-200"
      )}
    >
      <Logo />
      <div>
        {!session ? (
          <Button variant={"outline"} className="" onClick={() => signIn()}>
            Sign In
          </Button>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer w-14 h-14 overflow-hidden rounded-full bg-white">
                <Image
                  src={
                    session?.user?.image ??
                    "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
                  }
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
        )}
      </div>
    </div>
  );
};

export default Nav;
