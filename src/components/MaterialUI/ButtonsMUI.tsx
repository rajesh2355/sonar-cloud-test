import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import "./MUI.css";

const ButtonsMUI = () => {
  return (
    <div>
      <div className="mui">
        <div>
          <h3>Types of Buttons</h3>
        </div>
        <div className="mui">
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="contained" disableElevation>
              Disable elevation
            </Button>

            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
            </IconButton>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ButtonsMUI;
