"use client";
import React, { useState } from "react";
import TopBar from "./top-bar";
import MainContent from "./main-content";
import WorkSpace from "./workspace";

const Testimonials = () => {
  const [isWorkspace, setIsWorkspace] = useState(false);
  const handleClick = () => {
    setIsWorkspace((prev) => !prev);
  };
  return (
    <div className="">
      {isWorkspace ? (
        <WorkSpace isVisible={handleClick} />
      ) : (
        <>
          {/* Top Bar */}
          <TopBar handleClick={handleClick} />
          {/* Main Body */}
          <MainContent />
        </>
      )}
    </div>
  );
};

export default Testimonials;
