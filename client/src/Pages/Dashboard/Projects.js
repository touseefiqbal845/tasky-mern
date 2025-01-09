import { Box, Typography } from "@mui/material";
import TextwithMenu from "../../components/TextwithMenu";
import Avatar from "@mui/material/Avatar";
import CustomButton from "../../components/Button";
import CustomizedProgressBars from "../../components/progressBar";
import { imageUrlsData, projectsData } from "./Data";

const Projects = () => (
  <>
     <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            width: "49%",
            borderRadius: 3,
            p: 3,
          }}
        >
          <TextwithMenu text={"Recent Activity"} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              borderRadius: 2,
              borderColor: "#F9F9F9",
              borderStyle: "solid",
              borderWidth: "1px",
              marginTop: "30px",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1735812849~exp=1735816449~hmac=5450924722b556afdf49023217f79eefeeff19674beba27394a842fc394b7979&w=740"
                alt="Dummy Profile"
                sx={{
                  width: 30,
                  height: 30,
                }}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  marginLeft: "10px",
                }}
              >
                Rubik Sans
              </Typography>
            </Box>
            <CustomButton
              title="View All"
              MFontSize="12px"
              width="95px"
              bgColor="#fff5db"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: "20px",
              gap: 1,
            }}
          >
            {imageUrlsData.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`img-${index}`}
                style={{ width: 100, height: 60, borderRadius: 5 }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            width: "49%",
            borderRadius: 3,
            p: 3,
          }}
        >
          <TextwithMenu text={"Projects"} />

          {projectsData.map((project, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: 2,
                borderColor: "#F9F9F9",
                borderStyle: "solid",
                borderWidth: "1px",
                marginTop: "30px",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff5db",
                    padding: 0,
                    borderRadius: "50%",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: 30,
                    height: 30,
                  }}
                >
                  <Avatar
                    src={project.avatar}
                    alt="Dummy Profile"
                    sx={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "10px",
                  }}
                >
                  {project.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <CustomButton
                  title="00:40:00"
                  MFontSize="12px"
                  width="95px"
                  bgColor="#fff5db"
                />
                <CustomizedProgressBars
                  widthstack={"90px"}
                  marginLeft={"10px"}
                />
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <CustomButton
              title="View All"
              MFontSize="12px"
              color="white"
              width="95px"
              bgColor="#000000"
              sx={{
                alignSelf: "flex-end",
                marginTop: "10px",
              }}
            />
          </Box>
        </Box>
      </Box>
  </>
);

export default Projects;
