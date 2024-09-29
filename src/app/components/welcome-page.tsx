"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
// type Props = {};

const strArr = [
  " We help you collect testimonials and Show them in your website.",
  " Just select the way you want to show the testimonials.",
  "  Copy and paste the generated HTML in your website",
  " and show the world your beautiful testimonials",
];

const WelcomePage = () => {
  return (
    <div className="p-5">
      <div className="float-end">
        <Button variant={"outline"} className="" onClick={() => signIn()}>
          Sign In
        </Button>
      </div>
      <div className="h-[90vh] relative flex items-center justify-center ">
        <div className="ml-5 text-center absolute ">
          <h1 className="text-5xl font-bold mb-8">
            Collect your Testimonials easily!
          </h1>
          {strArr.map((ele) => (
            <p key={ele} className="text-2xl font-semibold text-gray-500">
              {ele}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
