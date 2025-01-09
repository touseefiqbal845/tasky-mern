import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextwithMenu = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width:"100%"
      }}
    >
      <Typography  sx={{ fontWeight: 600,fontSize:"20px" }}>
        {text}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        //   padding: 1,
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
         <img src={require("../assets/menuIcon.png")} alt={"menu"} style={{ width: 4, height: 10 }} />
      </Box>
    </Box>
  );
};

export default TextwithMenu;
