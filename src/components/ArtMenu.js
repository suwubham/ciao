import React, { useState } from "react";
import Box from "@mui/material/Box";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import authService from "../services/auth.service";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export default function ArtMenu(props) {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const action = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Register
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setOpen(false);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const warning = () => {
    setOpen(true);
  };

  const actions = authService.getCurrentUser()
    ? [
        { icon: <SaveIcon />, name: "Save", click: props.save },
        { icon: <DownloadIcon />, name: "Download", click: props.download },
        { icon: <ShareIcon />, name: "Share", click: props.share },
      ]
    : [
        { icon: <SaveIcon />, name: "Savee", click: warning },
        { icon: <DownloadIcon />, name: "Download", click: warning },
        { icon: <ShareIcon />, name: "Share", click: props.share },
      ];

  // const hello = [
  //   { icon: <CloudUploadIcon />, name: "Save", click: props.save },
  //   { icon: <SaveIcon />, name: "Download", click: props.download },
  //   { icon: <ShareIcon />, name: "Share", click: props.share },
  // ];

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
      <Snackbar
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        autoHideDuration={3000}
        message="This feature is only available for registered users."
        action={action}
      />
    </div>
  );
}
