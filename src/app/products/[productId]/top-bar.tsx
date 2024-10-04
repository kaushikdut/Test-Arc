import React from "react";
import { Button } from "@/app/components/ui/button";
import { MessageSquare, Pencil, VideoIcon } from "lucide-react";
import Image from "next/image";

const info = [
  { icon: <VideoIcon size={20} />, title: "Video", credits: "02" },
  { icon: <MessageSquare size={20} />, title: "Text", credits: "10" },
];
const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-200 p-3">
      {/* Left Side */}
      <div className="flex items-center">
        <Image
          src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
          height={100}
          width={100}
          alt="space_logo"
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold">Avokit</h1>
          <p>Space public url: https://test-arc.to/avokit</p>
        </div>
      </div>
      {/* Right Side */}
      <div>
        <div className="flex">
          {info.map((ele) => (
            <div key={ele.title} className="mx-5">
              <div className="flex items-center">
                {ele.icon}
                <p className="text-md text-muted-foreground ml-3">
                  {ele.title}
                </p>
              </div>
              <p className="ml-6">{ele.credits}</p>
            </div>
          ))}
          <Button className="rounded" variant={"outline"}>
            {" "}
            <Pencil size={15} className="mr-4" /> Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
