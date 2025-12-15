import IconButton from "@mui/material/IconButton";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "react-avatar";
import profilePic from "../../assets/profile-pic/cartoon too much funny face and in background xD logo.jpg";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-3! h-15 shadow-2xs bg-white">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <IconButton>
              <RxHamburgerMenu size="35" />
            </IconButton>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconButton>
            {/* <Avatar name="Rajendra kumar" size="30" round={true} /> */}
            <Avatar src={profilePic} size="35" round={true} />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Header;
