import React from "react";
import { Box, TextField, MenuItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const WorkspaceSelector = () => {
  const [workspace, setWorkspace] = React.useState("Matrix Domain");

  const handleChange = (event) => {
    setWorkspace(event.target.value);
  };

  return ( 
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // width: "250px",
        borderRadius: "10px",
        backgroundColor: "white",
        p: 1.5,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        margin:2
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
          color: "#B8B8B8", 
          mb: 0.5, 
        }}
      >
        Workspace
      </Typography>

      <TextField
        select
        value={workspace}
        onChange={handleChange}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          endAdornment: <ArrowDropDownIcon sx={{ color: "#FABB18" }} />,
        }}
        sx={{
          "& .MuiInputBase-root": {
            fontSize: "16px",
            fontWeight: 700,
            color: "#000", 
          },
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          },
        }}
        fullWidth
      >
        <MenuItem value="Matrix Domain">Matrix Domain</MenuItem>
        <MenuItem value="Other Workspace">Other Workspace</MenuItem>
      </TextField>
    </Box>
  );
};

export default WorkspaceSelector;
