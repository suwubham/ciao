import React from "react";
import Box from "@mui/material/Box";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";

export default function ArtMenu(props) {
  const actions = [
    { icon: <CloudUploadIcon />, name: "Save", click: props.save },
    { icon: <SaveIcon />, name: "Download", click: props.download },
    { icon: <ShareIcon />, name: "Share", click: props.share },
  ];

  return (
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
  );
}
