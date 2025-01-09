import { Box, Typography } from "@mui/material";
import TextwithMenu from "../../components/TextwithMenu";
import { workedcountData } from "./Data";

const WorkedCount = () => (
  <>
       <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        {workedcountData.map(({ title, value, imageSrc, imageAlt }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              width: "30%",
              borderRadius: 3,

              p: 3,
            }}
          >
            <TextwithMenu text={title} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 700,
                }}
              >
                {value}
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff5db",
                  padding: 4,
                  borderRadius: "20%",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  style={{ width: 30, height: 30 }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
  </>
);

export default WorkedCount;
