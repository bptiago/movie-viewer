"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import CameraIcon from "@mui/icons-material/Camera";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MinimalButton from "./MinimalButton";

const Navbar = () => {
  return (
    <div className="flex justify-between px-24 py-4 border-b-2">
      <div className="flex space-x-6 items-center">
        <CameraIcon style={{ fontSize: "32px" }}></CameraIcon>
        <Button variant="ghost">Browse</Button>
        <Button variant="ghost">Movies</Button>
        <Button variant="ghost">TV Shows</Button>
      </div>
      <div className="flex space-x-6 items-center">
        <Popover>
          <PopoverTrigger>
            <MenuIcon style={{ fontSize: "32px" }}></MenuIcon>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <ul className="grid grid-cols-1 3 p-4 gap-y-4">
              <MinimalButton body="Profile"></MinimalButton>
              <MinimalButton body="Settings"></MinimalButton>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
