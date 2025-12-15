import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import StarBorder from "@mui/icons-material/StarBorder";

import React from "react";
import Avatar from "react-avatar";

function Navbar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4!">
        <Avatar name="Rajendra kumar" size="70" round={true} className="p-4" />
        <span className="text-[1.2rem] font-bold">Rajendra kumar</span>
        <span className="text-gray-500">rajendraxd1@gmail.com</span>
      </div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
    </>
  );
}

export default Navbar;
