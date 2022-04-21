import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Vector008 from "@images/Vectors/Vector008.png";
import ShadowButton from "@components/Custom/ShadowButton";
import CircleIcon from "@mui/icons-material/Circle";

interface iPackageInfo {
  title: String;
  description: String;
  price: Number;
  focusTag?: String;
  buttonText: String;
  included: Array<String>;
}

const packageInfo: iPackageInfo[] = [
  {
    title: "Member",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 9.99,
    buttonText: "SUBSCRIBE",
    included: [
      "Exclusive Content",
      "5% Discount on Merch",
      "Join the Community",
      "Livestreaming Access",
    ],
  },
  {
    title: "Family",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 14.99,
    focusTag: "MOST POPULAR",
    buttonText: "SUBSCRIBE",
    included: [
      "Free tickets to Events",
      "Limited Edition Merch",
      "Promote your Product",
      "Request Topic",
    ],
  },
  {
    title: "Official",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 29.99,
    buttonText: "SUBSCRIBE",
    included: [
      "Exclusive Badge on Livestreaming",
      "Become an Official Sponsor",
      "Early Access to All Episodes",
      "Free Stikers and Merch",
    ],
  },
];

const Sponsor = () => {
  return (
    <Box
      component="section"
      sx={{
        py: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              textAlign: "center",
              left: -35,
              top: -15,
              transform: "scaleX(-1)",
            }}
          >
            <Image height="60px" width="60px" src={Vector008} alt="bn" />
          </Box>
          Become our sponsor
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "22.65px",
          fontWeight: "medium",
          textAlign: "center",
        }}
      >
        Get exclusive episodes, merch and more
      </Typography>
      <Grid container columnSpacing={2} sx={{ px: "100px", mt: "100px" }}>
        {packageInfo.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <Box
                sx={{
                  border: "1.5px solid",
                  borderColor: item?.focusTag ? "#CD4631" : "#000",
                  bgcolor: item?.focusTag && "#F7EDE8",
                  width: "100%",
                  height: "360px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "36.65px",
                      fontWeight: "bold",
                    }}
                  >
                    {item?.title}
                  </Typography>
                  {item?.focusTag && (
                    <Typography
                      gutterBottom
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        bgcolor: "vermillion.main",
                        padding: "3px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      MOST POPULAR
                    </Typography>
                  )}
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "medium",
                    flexGrow: 1,
                  }}
                >
                  {item?.description.length > 180
                    ? item?.description.substring(0, 190) + "..."
                    : item?.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ShadowButton
                    sx={{
                      width: "160px",
                      height: "60px",
                    }}
                  >
                    {item?.buttonText}
                  </ShadowButton>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "22.65px",
                        fontWeight: "bold",
                        color: "vermillion.main",
                      }}
                    >
                      {`$${item?.price}`}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      /month
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  border: "1.5px solid #CD4631",
                  bgcolor: "#F7EDE8",
                  marginTop: "20px",
                  width: "100%",
                  height: "300px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  What’s included:
                </Typography>
                <List sx={{ mt: "10px" }}>
                  {index > 0 && (
                    <ListItem key={index} sx={{ padding: 0 }}>
                      <ListItemIcon sx={{ minWidth: "10px" }}>
                        <CircleIcon
                          sx={{ color: "#000", fontSize: "6px", mr: 1 }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                          }}
                        >
                          Everything in Tier {index}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )}
                  {item?.included?.map((item, index) => {
                    return (
                      <ListItem key={index} sx={{ padding: 0 }}>
                        <ListItemIcon sx={{ minWidth: "10px" }}>
                          <CircleIcon
                            sx={{ color: "#000", fontSize: "6px", mr: 1 }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "medium",
                            }}
                          >
                            {item}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Sponsor;
