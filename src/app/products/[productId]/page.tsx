"use client";
import React, { useState } from "react";
import TopBar from "./_components/top-bar";
import MainContent from "./_components/main-content";
import WorkSpace from "./_components/workspace";

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
