import { Box } from "@mui/material";
import { useState, useEffect ,useContext  } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import TodayComponent from "./TodayComponent";
import WorkedCount from "./WorkedCount";
import Projects from "./Projects";
import Members from "./Members";
import { AuthContext } from "../../AuthContext";

const Main = () => {

    const auth = useContext(AuthContext);

    if (!auth.isAuthenticated) {
      return <p>You need to log in.</p>;
    }

  return (
    <Box component="main" sx={{ p: 6, backgroundColor: "#F9F9F9" }}>
      <TodayComponent />
      <WorkedCount />
      <Projects />
      <Members />
    </Box>
  );
};

export default Main;
