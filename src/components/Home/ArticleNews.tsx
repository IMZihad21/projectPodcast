import React from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Vector004 from "@images/Vectors/Vector004.png";
import Vector007 from "@images/Vectors/Vector007.png";
import ComposedLink from "@components/Custom/ComposedLink";
import ShadowButton from "@components/Custom/ShadowButton";

const articleNews = [
  {
    category: "PODCAST",
    title: "Setup your own podcast",
    coverImage: "https://i.ibb.co/3mpSWQk/img.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tagList: ["business", "startup"],
    createdAt: "Sep 14, 2021",
  },
  {
    category: "TIPS & TRICK",
    title: "Doodle artwork 101",
    coverImage: "https://i.ibb.co/3FMwLsh/imascg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tagList: ["art", "creative", "tips and trick"],
    createdAt: "Sep 12, 2021",
  },
];

const ArticleNews = () => {
  return (
    <Box
      component="section"
      sx={{
        py: "160px",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        gutterBottom
        sx={{
          fontSize: "60px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Article and News
      </Typography>
      <Typography
        sx={{
          fontSize: "22.65px",
          fontWeight: "medium",
          textAlign: "center",
          color: "davysGrey.main",
        }}
      >
        News, tips, tricks and more
      </Typography>
      <Grid
        container
        columnSpacing={3}
        sx={{ mt: "60px", px: "140px", position: "relative", width: 1 }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: -90,
            right: 50,
            transform: "rotate(135deg)",
            zIndex: -5,
          }}
        >
          <Image height="185px" width="185px" src={Vector007} alt="bn" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: -90,
            left: 60,
            transform: "rotate(21.97deg)",
            zIndex: -5,
          }}
        >
          <Image height="240px" width="240px" src={Vector004} alt="bn" />
        </Box>
        {articleNews.map((article, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              component={ComposedLink}
              to={`/article/${article.title}`}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "610px",
                  padding: "16px !important",
                  border: "1px solid",
                  borderRadius: "8px",
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "10px 10px 0px #000000",
                  },
                }}
              >
                <Image
                  width="540px"
                  height="320px"
                  src={article?.coverImage}
                  alt="ImgAlt"
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "davysGrey.main",
                    marginTop: "40px",
                  }}
                >
                  {article?.category}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "36.65px",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "vermillion.main",
                    },
                  }}
                >
                  {article?.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "medium",
                    color: "davysGrey.main",
                  }}
                >
                  {article?.description.length > 190
                    ? article?.description.substring(0, 190) + " ..."
                    : article?.description}
                </Typography>
                <Divider sx={{ my: "25px" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {article?.tagList?.map((item, index) => {
                      return (
                        <Typography
                          key={index}
                          sx={{
                            fontSize: "12px",
                            fontWeight: "medium",
                            color: "davysGrey.main",
                            padding: "6px 12px",
                            border: "1px solid",
                            borderColor: "davysGrey.main",
                            borderRadius: "4px",
                          }}
                        >
                          {item}
                        </Typography>
                      );
                    })}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {article?.createdAt}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <ShadowButton
          sx={{
            width: "170px",
            height: "60px",
          }}
        >
          BROWSE ALL
        </ShadowButton>
      </Box>
    </Box>
  );
};

export default ArticleNews;
