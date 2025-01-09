import { Box, Typography } from "@mui/material";


const TodayComponent = () => (
  <>
    <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Today
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            Mon 22, 2021 | 10:00 AM
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            width: "250px",
            height: "90px",
            borderRadius: 3,

            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Start Time Tracker
          </Typography>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FABB18",
              padding: 2,
              borderRadius: "20%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={require("../../assets/pause.png")}
              alt={"menu"}
              style={{ width: 10, height: 10 }}
            />
          </Box>
        </Box>
      </Box>
  </>
);

export default TodayComponent;
