"use client";

import React, { useState } from "react";
import avatar from "../public/avatar.svg";
import profilePic from "../public/profilePic.jpg";
import Image from "next/image";

const Avatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  console.log(isHovered);
  return (
    <div
      className="py-3 mt-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={isHovered ? profilePic : avatar}
        alt="avatar"
        className={`w-60 h-60 md:w-60 md:h-60 object-cover object-top bg-gradient-to-br from-red-400 to-purple-500 rounded-full ${
          isHovered ? "hovered" : ""
        }`}
        width={240}
        height={240}
      />
    </div>
  );
};

export default Avatar;
