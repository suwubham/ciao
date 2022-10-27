import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

function help() {
  console.log("hello world");
}

const actions = [
  { icon: <FileCopyIcon />, name: "Copy", click: help },
  { icon: <SaveIcon />, name: "Save", click: help },
  { icon: <PrintIcon />, name: "Print", click: help },
  { icon: <ShareIcon />, name: "Share", click: help },
];

export default function About() {
  return (
    <>
      <div className="about">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <div>About</div>
        <div className="menu">
          <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.click}
                />
              ))}
            </SpeedDial>
          </Box>
        </div>
      </div>
    </>
  );
}
