"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/Vectors/ScribbleBlack.png
/* harmony default export */ const ScribbleBlack = ({"src":"/_next/static/media/ScribbleBlack.c15e6623.png","height":610,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEUAAAAAAABMaXEAAAAAAADyE3eRAAAABXRSTlMWCQAiPNgeEb4AAAAJcEhZcwAALEsAACxLAaU9lqkAAAAoSURBVAiZZcoxCgAACMPAGP3/m0XByaUcbVFCFc0D5KRGTbfgpndeNBAeAHINKQABAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/components/Custom/Scribble.tsx





const Scribble = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            position: "absolute",
            mt: "-78px",
            left: {
                xs: "35%",
                md: "45%"
            },
            right: 0
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            height: "150px",
            width: "150px",
            src: ScribbleBlack,
            alt: "bn"
        })
    });
};
/* harmony default export */ const Custom_Scribble = (Scribble);

;// CONCATENATED MODULE: ./src/assets/images/Vectors/ScribbleRed.png
/* harmony default export */ const ScribbleRed = ({"src":"/_next/static/media/ScribbleRed.79e0f4f0.png","height":610,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEXNRTDMRTDNRTDNRTBcDex3AAAABHRSTlMBEx8893puzwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAACNJREFUCJljYGBgYoACOIORkYkRwmCGMhiYoTQjlEbSBRYBAAQ6AByso7/tAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/components/Custom/ScribbleRed.tsx





const ScribbleRed_Scribble = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            position: "absolute",
            mt: "-78px",
            left: {
                xs: "35%",
                md: "45%"
            },
            right: 0
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            height: "150px",
            width: "150px",
            src: ScribbleRed,
            alt: "bn"
        })
    });
};
/* harmony default export */ const Custom_ScribbleRed = (ScribbleRed_Scribble);

// EXTERNAL MODULE: ./src/components/Custom/ShadowButton.tsx
var ShadowButton = __webpack_require__(5277);
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector010.png
/* harmony default export */ const Vector010 = ({"src":"/_next/static/media/Vector010.27fe31f2.png","height":1806,"width":1278,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAFVBMVEUWBwU7FA0BAAAEAQAAAABMaXGkOCe7m4yjAAAAB3RSTlMcAToPLgA4l2WsQgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAChJREFUCJkVyjECACAMg0CSiv9/snZhOYgqh0mgjBugKRd6VquB+ecDCZAAbKjgQw8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector011.png
/* harmony default export */ const Vector011 = ({"src":"/_next/static/media/Vector011.68566a3e.png","height":865,"width":622,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAALVBMVEVMaXGArch+rsrKRzOBrMiArcgIBgdwZW2BrMcAAADMRjHORC6Arcd/rcmBrMcKxHv2AAAAD3RSTlMAQh0bkXUcDjFQjFWzXdHt0DmhAAAACXBIWXMAACxLAAAsSwGlPZapAAAAL0lEQVQImR3JtxEAIBDEQN0bPPRfLgMKV4DEazVAmSEjQ9EM7Nh/u06nFnw4pT+6D2IAoXUVZXMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Home/Banner.tsx







{
/*
   */ }const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "champagne.main",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    position: "absolute",
                    right: 0,
                    display: {
                        xs: "none",
                        md: "block"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: "150px",
                    height: "215px",
                    src: Vector011,
                    alt: "Image-alt"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    position: "absolute",
                    left: 0,
                    display: {
                        xs: "none",
                        md: "block"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: "300px",
                    height: "400px",
                    src: Vector010,
                    alt: "Image-alt"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h1",
                component: "h1",
                sx: {
                    fontSize: {
                        xs: "40px",
                        md: "90px"
                    },
                    fontWeight: "bold",
                    mt: {
                        xs: "20px",
                        md: "60px"
                    },
                    textAlign: "center"
                },
                children: "Your Daily"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h1",
                component: "h1",
                sx: {
                    fontSize: {
                        xs: "40px",
                        md: "90px"
                    },
                    fontWeight: "bold",
                    lineHeight: "0.7",
                    color: "vermillion.main",
                    textAlign: "center"
                },
                children: "Podcast"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "14px",
                        md: "16px"
                    },
                    fontWeight: "medium",
                    my: {
                        xs: "20px",
                        md: "40px"
                    },
                    textAlign: "center"
                },
                children: [
                    "We cover all kinds of categories and ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " a weekly special guest."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ShadowButton/* default */.Z, {
                sx: {
                    height: {
                        xs: "40px",
                        md: "65px"
                    },
                    width: "180px",
                    mt: {
                        xs: 0,
                        md: "60px"
                    }
                },
                children: "SUBSCRIBE"
            })
        ]
    });
};
/* harmony default export */ const Home_Banner = (Banner);

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./src/components/Custom/ComposedLink.tsx
var ComposedLink = __webpack_require__(632);
;// CONCATENATED MODULE: external "react-icons/si"
const si_namespaceObject = require("react-icons/si");
;// CONCATENATED MODULE: ./src/assets/images/BrandIcons/GooglePodcast.png
/* harmony default export */ const GooglePodcast = ({"src":"/_next/static/media/GooglePodcast.1ac811e2.png","height":144,"width":792,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUPDykUFSpdl1m9hEPR+L78AAAABHRSTlMuOzBQb23T4QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAABFJREFUCJljYGZiYGRkYGAAAAA4AAizTSmAAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/BrandIcons/Spotify.png
/* harmony default export */ const Spotify = ({"src":"/_next/static/media/Spotify.ff8bb3b1.png","height":136,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEUAAQAAAAASiTwAAAAd2GAe3GIABAId1V8AAADwCNtLAAAACXRSTlNQRy1es6I0liw8JI+BAAAACXBIWXMAACxLAAAsSwGlPZapAAAAGklEQVQImWNgZ2ViYGNk5mBgYWFiZmBkYAQAAh0AMOTNcxcAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/BrandIcons/Youtube.png
/* harmony default export */ const Youtube = ({"src":"/_next/static/media/Youtube.b4cf5d60.png","height":112,"width":496,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEUuNjY2NjY2MzMVOzv7Dw/cBwcyMjLzBQX7EhL+JCT3fqCQAAAACXRSTlNqd4da66eNdMkzpm64AAAACXBIWXMAACxLAAAsSwGlPZapAAAAGklEQVQImWNg4WRlYGBiYGDg4GRnZmJkZAMAAhQAOtpShbEAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Home/PodcastTypes.tsx












const categoryData = [
    {
        title: "Test Category",
        cover: "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
        googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png"
    },
    {
        title: "Test Category",
        cover: "https://i.ibb.co/QbKrZqZ/besustainable-podcast-bg.jpg",
        googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png"
    },
    {
        title: "Test Category",
        cover: "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
        googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png"
    },
    {
        title: "Test Category",
        cover: "https://i.ibb.co/QbKrZqZ/besustainable-podcast-bg.jpg",
        googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png"
    },
    {
        title: "Test Category",
        cover: "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
        googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png"
    },
    {
        title: "Test Category",
        cover: "https://i.ibb.co/QbKrZqZ/besustainable-podcast-bg.jpg",
        googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
        youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png"
    }, 
];
const PodcastTypes = ()=>{
    const settings = {
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 0.25,
        autoplay: true,
        pauseOnHover: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 3000,
                    dots: true,
                    swipeToSlide: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 3000,
                    dots: true,
                    swipeToSlide: true
                }
            }, 
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            bgcolor: "champagne.main",
            py: "80px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    mx: {
                        xs: 1,
                        md: 5
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...settings,
                    children: categoryData === null || categoryData === void 0 ? void 0 : categoryData.map((podcast, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                mx: "4vw"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                sx: {
                                    height: {
                                        xs: "380px",
                                        md: "350px"
                                    },
                                    width: {
                                        xs: "90vw",
                                        md: "350px"
                                    },
                                    backgroundImage: `url(${podcast.cover})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "end",
                                            gap: "10px",
                                            padding: "20px"
                                        },
                                        children: [
                                            (podcast === null || podcast === void 0 ? void 0 : podcast.googlePodcastUrl) && /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                                                to: podcast.googlePodcastUrl,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiGooglepodcasts, {
                                                    style: {
                                                        fontSize: "24px",
                                                        color: "#fff"
                                                    }
                                                })
                                            }),
                                            (podcast === null || podcast === void 0 ? void 0 : podcast.spotifyUrl) && /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                                                to: podcast.spotifyUrl,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiSpotify, {
                                                    style: {
                                                        fontSize: "24px",
                                                        color: "#fff"
                                                    }
                                                })
                                            }),
                                            (podcast === null || podcast === void 0 ? void 0 : podcast.youtubeUrl) && /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                                                to: podcast.youtubeUrl,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiYoutube, {
                                                    style: {
                                                        fontSize: "24px",
                                                        color: "#fff"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: {
                                                xs: "25px",
                                                md: "36px"
                                            },
                                            fontWeight: "bold",
                                            color: "primary.main",
                                            padding: "20px"
                                        },
                                        children: podcast.title
                                    })
                                ]
                            })
                        }, index);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    mx: {
                        xs: "40px",
                        md: "140px"
                    },
                    my: "100px",
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                    height: {
                        md: "120px"
                    },
                    py: {
                        xs: "30px",
                        md: 0
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    rowGap: 5,
                    sx: {
                        height: 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 3,
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "18px",
                                        md: "22.6px"
                                    },
                                    fontWeight: "bold",
                                    textAlign: "center"
                                },
                                children: "Supported by:"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 3,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "35px",
                                width: "200px",
                                src: GooglePodcast,
                                alt: "podcastLogo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 3,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "35px",
                                width: "130px",
                                src: Spotify,
                                alt: "podcastLogo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 3,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "30px",
                                width: "125px",
                                src: Youtube,
                                alt: "podcastLogo"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Home_PodcastTypes = (PodcastTypes);

;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector009.png
/* harmony default export */ const Vector009 = ({"src":"/_next/static/media/Vector009.8a1bc10a.png","height":251,"width":236,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbsZG/AAAAEHRSTlMA/ysMhWW+rG05lPQcSd3LQSbNRgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUCJkdi0kWwCAIxfIRAYfW+9+2z2abBBgPl9Fn7WxA6KwOVEoKNyhJ7zRG+NJV1izNb8z+9w8obwEKomD/fgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector012.png
/* harmony default export */ const Vector012 = ({"src":"/_next/static/media/Vector012.c2f06006.png","height":124,"width":124,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXNRTDNRTDNRTDNRTDNRTCLgKVWAAAABXRSTlNAJxgDMLi8WNgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVAiZFcmxDQAADMKwQPj/5qqrjdqhGEgntg2R7gUJyUjYtmrYH4imLwcSDwB/t6HBnwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/BrandIcons/SpotifyIcon.png
/* harmony default export */ const SpotifyIcon = ({"src":"/_next/static/media/SpotifyIcon.f143ba7f.png","height":72,"width":72,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUJRh8QczMOay8AAAAXqksNXypMaXERfjgPbTAUlUIc0V0g7Wke3GIavlRixXMvAAAACnRSTlO09/0p/P4A+PL+am2pvgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADhJREFUCJk1y7EBwDAIBLGDh+AA3n/dVFEvHmGGHmQ7syYIz6wLddM9o6h2d1uDjnijQWdn+oi/fywBAUDL0SjoAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/Illustration/Illustration001.png
/* harmony default export */ const Illustration001 = ({"src":"/_next/static/media/Illustration001.d91dcb3d.png","height":1100,"width":1100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVOS0tRS0tMaXE+TE5LS0tMTEzSRS9MTEvfRS3XpQcXAAAACXRSTlMgFgAJL3IqTET2TuYSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAMUlEQVQImS3JwQ3AMBDDMFm+JN1/4iJFfwSIWqCozLPzITtzETrgnBLFteJ9yY/SixcUMQCMCLqbZQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Illustration/Illustration002.png
/* harmony default export */ const Illustration002 = ({"src":"/_next/static/media/Illustration002.2bdd028b.png","height":1100,"width":1100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXH+5wDmxQv83AHXuBDzzQVBQ1AwNletlyL/3QCHejL/7AD/2AC8oxxGTSTOAAAADXRSTlMAEAY50RQuLdJLWyhmZHuQFAAAAAlwSFlzAAAsSwAALEsBpT2WqQAAACdJREFUCJljYEABTCCCkZWTh5URxGNk4WUGi8MZTNwcXFCV7GxIOgEQuQB+g9+QKQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/Home/Promotional.tsx









const Promotional = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            py: "80px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "20px",
                        md: "60px"
                    },
                    fontWeight: "bold",
                    textAlign: "center",
                    my: "60px"
                },
                children: [
                    "Talk. Listen. Get inspired ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " by every minute of it."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        sx: {
                            padding: {
                                xs: 4,
                                md: 12
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    height: 275,
                                    width: 275,
                                    src: Illustration001,
                                    alt: "asv"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: "16px",
                                    fontWeight: "medium",
                                    mt: "40px"
                                },
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        sx: {
                            padding: {
                                xs: 4,
                                md: 12
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    height: 275,
                                    width: 275,
                                    src: Illustration002,
                                    alt: "asv"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: "16px",
                                    fontWeight: "medium",
                                    mt: "40px"
                                },
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    position: "relative",
                    textAlign: "center",
                    padding: {
                        xs: "10px",
                        md: "40px"
                    },
                    bgcolor: "champagne.main",
                    mx: {
                        xs: "20px",
                        md: "140px"
                    },
                    marginBottom: "80px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "absolute",
                            top: -70,
                            right: -70,
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: "200px",
                            width: "200px",
                            src: Vector009,
                            alt: "sdv"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontSize: {
                                xs: "45px",
                                md: "95px"
                            },
                            fontWeight: "bold",
                            color: "vermillion.main",
                            lineHeight: {
                                xs: "1",
                                md: "0.5"
                            }
                        },
                        children: `"`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                        sx: {
                            fontSize: {
                                xs: "18px",
                                md: "36px"
                            },
                            fontWeight: "bold"
                        },
                        children: [
                            "One of the best daily podcasts that ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "covers every topic on Spotify."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            mt: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                sizes: "48px",
                                alt: "Cindy Baker",
                                src: "http://placehold.jp/500x500.png"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "10px",
                                        md: "14px"
                                    },
                                    fontWeight: "medium"
                                },
                                children: "John Smith,"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: SpotifyIcon,
                                alt: "",
                                height: "16px",
                                width: "16px"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "10px",
                                        md: "14px"
                                    },
                                    fontWeight: "bold"
                                },
                                children: "Social Community Manager"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "absolute",
                            bottom: 30,
                            left: -60,
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: "120px",
                            width: "120px",
                            src: Vector012,
                            alt: "sdv"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Promotional = (Promotional);

;// CONCATENATED MODULE: ./src/assets/images/Vectors/Sparkle.png
/* harmony default export */ const Sparkle = ({"src":"/_next/static/media/Sparkle.db5918e1.png","height":420,"width":420,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEXNRTDNRTDNRTDNRTBLdvg0AAAABHRSTlMBCR0+OvNLxwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAChJREFUCJlNiEEKADAMwqL9/5+LskE9RCOcWHILnPGjKQSqBoPzPmMBBLIAIuOQflkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowBackIosOutlined"
const ArrowBackIosOutlined_namespaceObject = require("@mui/icons-material/ArrowBackIosOutlined");
var ArrowBackIosOutlined_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIosOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForwardIosOutlined"
const ArrowForwardIosOutlined_namespaceObject = require("@mui/icons-material/ArrowForwardIosOutlined");
var ArrowForwardIosOutlined_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIosOutlined_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Home/Reviews.tsx











const Reviews = ()=>{
    const customSlider = external_react_default().useRef();
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1500,
        cssEase: "linear",
        swipeToSlide: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    dots: true,
                    swipeToSlide: true
                }
            }, 
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            py: "140px",
            px: {
                xs: "20px",
                md: "140px"
            },
            bgcolor: "aliceBlue.main"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    component: "div",
                    sx: {
                        fontSize: {
                            xs: "20px",
                            md: "60px"
                        },
                        fontWeight: "bold",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                position: "absolute",
                                textAlign: "center",
                                left: -95,
                                top: -60,
                                display: {
                                    xs: "none",
                                    md: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "100px",
                                width: "100px",
                                src: Sparkle,
                                alt: "bn"
                            })
                        }),
                        "What our listeners say"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "16px",
                        md: "23px"
                    },
                    fontWeight: "medium",
                    textAlign: "center"
                },
                children: "Their experience throughout every platform"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    mt: {
                        xs: "50px",
                        md: "100px"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        ref: (slider)=>customSlider.current = slider
                        ,
                        ...settings,
                        children: [
                            1,
                            2,
                            3,
                            4
                        ].map((item, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    m: {
                                        xs: "2vw",
                                        md: "5px"
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                    elevation: 3,
                                    sx: {
                                        height: {
                                            md: "310px"
                                        },
                                        width: {
                                            xs: "85vw",
                                            md: "520px"
                                        },
                                        padding: {
                                            xs: "20px",
                                            md: "40px"
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                fontSize: {
                                                    xs: "45px",
                                                    md: "95px"
                                                },
                                                fontWeight: "bold",
                                                color: "vermillion.main",
                                                lineHeight: "0.7",
                                                marginBottom: {
                                                    md: "-20px"
                                                }
                                            },
                                            children: `"`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                fontSize: {
                                                    xs: "16px",
                                                    md: "22.65px"
                                                },
                                                fontWeight: "medium",
                                                flexGrow: 1
                                            },
                                            children: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                mt: "20px",
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                gap: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    sizes: "48px",
                                                    alt: "Cindy Baker",
                                                    src: "http://placehold.jp/500x500.png"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        fontSize: "14px",
                                                        fontWeight: "medium"
                                                    },
                                                    children: "Luna lovegood,"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: SpotifyIcon,
                                                    alt: "",
                                                    height: "16px",
                                                    width: "16px"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        fontSize: "14px",
                                                        fontWeight: "bold"
                                                    },
                                                    children: "Spotify"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            mt: "60px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIosOutlined_default()), {
                                onClick: ()=>customSlider.current.slickPrev()
                                ,
                                sx: {
                                    fontSize: "40px",
                                    marginRight: "20px",
                                    padding: "7px",
                                    border: "2px solid #000",
                                    borderRadius: "50%",
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "vermillion.main",
                                        borderColor: "vermillion.main"
                                    }
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIosOutlined_default()), {
                                onClick: ()=>customSlider.current.slickNext()
                                ,
                                sx: {
                                    fontSize: "40px",
                                    border: "2px solid #000",
                                    borderRadius: "50%",
                                    padding: "7px",
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "vermillion.main",
                                        borderColor: "vermillion.main"
                                    }
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Reviews = (Reviews);

;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector001.png
/* harmony default export */ const Vector001 = ({"src":"/_next/static/media/Vector001.f8b345b6.png","height":76,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEV8p8J8p8F8p8F4obp6pL5MaXEjyjf3AAAABnRSTlN6VWc4KQD8I430AAAACXBIWXMAACxLAAAsSwGlPZapAAAAGUlEQVQImQXBAQEAAAgCILT6fzlw3ShiNPIBDwAXqJ47+wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector002.png
/* harmony default export */ const Vector002 = ({"src":"/_next/static/media/Vector002.d6148dc2.png","height":228,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXEAAADHPSjkSSp8pb98p8HLRjIAAABQaXt2rMkAAAB/o7suEAwFAgEAAADFQy+PjZsAAADERTHFPCacGDvHAAAAFHRSTlMAKlkZU2hBXww5SSBTGxQuR0JUTdOMQ7oAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA4SURBVAiZJcZJEsAgDMRAEeyMDdn//1gKoosaZu1d45J+6CwNPAkp6GbUo4BFPtsOhGddwDvfDQMlXAElH2ReMQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector003.png
/* harmony default export */ const Vector003 = ({"src":"/_next/static/media/Vector003.5498931b.png","height":226,"width":188,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAGFBMVEXFQy/EQi5MaXHFQy/FQy/EQi7DQi7BQS7IqswAAAAACHRSTlNQNQBFYH8jD8IUTjUAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAsSURBVAiZFcW5EQAwCASxvQfov2OPlQgftvGSX45ZNhqFlhq0ZAp1BraS7gEPTACMdP/6bgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector004.png
/* harmony default export */ const Vector004 = ({"src":"/_next/static/media/Vector004.5d2026e2.png","height":222,"width":236,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv15x2AAAADXRSTlMAVigXdLA5DEWC14r6NSL23AAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUCJkVykESACEIA8FJAEHd/793y1NfGmCQoVNXAnB9NTKeOiUHrLM7A5zadECgfBVY6/EDHXcAweIPlZkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector005.png
/* harmony default export */ const Vector005 = ({"src":"/_next/static/media/Vector005.75f6e06b.png","height":188,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXF6o70CAQAAAAAAAAAAAACYx9QAAAA7FA6BVkvDQi7JRDDGQy/DQi57pb59p8IEBQY+ziKoAAAAEXRSTlMAJDNoJE4NXxgFO4QiX2R9CiYb0k4AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVAiZZco7FgAQDADBJUjif//T8rS2mGrhq8wAvUJZAUaD5Dhuiawb0AxRVCW+3+x6ABpnANUPgFf8AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector006.png
/* harmony default export */ const Vector006 = ({"src":"/_next/static/media/Vector006.f37648d9.png","height":231,"width":226,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUBAgICAwMAAAAFAQEBAAAAAAAAAAAAAAAAAADBdHIAAAAAAAD8VjwSGByu5/9LZPjvAAAAD3RSTlNlAVtNQjMlEqUYino7hTOkXhxUAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOUlEQVQImRXISRKAMAwEsR4vsZ0A/38ulaOEtAhHKLsuWO3P6HuxneM2AKZ0HdwIyZKC03sJVdzSDyUTAP8qCeY9AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector007.png
/* harmony default export */ const Vector007 = ({"src":"/_next/static/media/Vector007.cbf183bc.png","height":190,"width":228,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAG1BMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAABReBoRAAAACXRSTlMpARQAN0NRfQhhmU9RAAAACXBIWXMAACxLAAAsSwGlPZapAAAAL0lEQVQImS2LSQoAMBCDnDhd/v/i0tJDQMRQKm+7WQzImJ1eIdfLRKssg7f+hwcHFGYAouRK5ZsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Home/Benefits.tsx












const benefitCards = [
    {
        image: {
            src: Vector001,
            height: "20px",
            width: "70px"
        },
        title: "Topic by Request",
        description: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor."
    },
    {
        image: {
            src: Vector002,
            height: "78px",
            width: "78px"
        },
        title: "Exclusive Content",
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
    },
    {
        image: {
            src: Vector005,
            height: "70px",
            width: "70px"
        },
        title: "Join the Community",
        description: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor."
    },
    {
        image: {
            src: Vector006,
            height: "70px",
            width: "70px"
        },
        title: "Livestreaming Access",
        description: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor."
    },
    {
        image: {
            src: Vector003,
            height: "70px",
            width: "70px"
        },
        title: "Exclusive Episodes & Merch",
        description: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor."
    },
    {
        image: {
            src: Vector004,
            height: "70px",
            width: "70px"
        },
        title: "And much more!",
        description: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor."
    }, 
];
const Benefits = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            py: "140px",
            px: {
                xs: "20px",
                md: "140px"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    component: "div",
                    sx: {
                        fontSize: {
                            xs: "20px",
                            md: "60px"
                        },
                        fontWeight: "bold",
                        textAlign: "center",
                        position: "relative",
                        marginTop: {
                            md: "40px"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                position: "absolute",
                                textAlign: "center",
                                right: -95,
                                top: -120,
                                transform: "rotate(14.3deg)",
                                display: {
                                    xs: "none",
                                    md: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "240px",
                                width: "240px",
                                src: Vector007,
                                alt: "bn"
                            })
                        }),
                        "Membership benefits"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "16px",
                        md: "22.65px"
                    },
                    fontWeight: "medium",
                    textAlign: "center",
                    mb: "100px"
                },
                children: "Become our sponsor and get all benefits"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                rowSpacing: 10,
                children: benefitCards.map((benefit, index)=>{
                    var ref, ref1, ref2;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    height: {
                                        md: "100px"
                                    },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mb: "20px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    height: benefit === null || benefit === void 0 ? void 0 : (ref = benefit.image) === null || ref === void 0 ? void 0 : ref.height,
                                    width: benefit === null || benefit === void 0 ? void 0 : (ref1 = benefit.image) === null || ref1 === void 0 ? void 0 : ref1.width,
                                    src: benefit === null || benefit === void 0 ? void 0 : (ref2 = benefit.image) === null || ref2 === void 0 ? void 0 : ref2.src,
                                    alt: "bn"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "18px",
                                        md: "22.65px"
                                    },
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    pb: 1
                                },
                                children: benefit === null || benefit === void 0 ? void 0 : benefit.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "14px",
                                        md: "16px"
                                    },
                                    fontWeight: "medium",
                                    textAlign: "center"
                                },
                                children: benefit === null || benefit === void 0 ? void 0 : benefit.description
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    mt: "100px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ShadowButton/* default */.Z, {
                    sx: {
                        height: {
                            xs: "40px",
                            md: "60px"
                        },
                        width: "170px"
                    },
                    children: "SEE PRICING"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Benefits = (Benefits);

;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector008.png
/* harmony default export */ const Vector008 = ({"src":"/_next/static/media/Vector008.bd97e795.png","height":200,"width":163,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAFVBMVEVMaXHFQy7FQy/AQS3CQi7GQy/BQi5Pose/AAAAB3RSTlMAKkwPFWoWRxg+8QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAACVJREFUCJldybEBACAQg0BI1P1H/sZGKQ8qWDC4gR4ib14w6zsMBs4AJ7XmI5UAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Home/RecentEpisodes.tsx








const RecentEpisodes = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            bgcolor: "champagne.main",
            py: "150px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h2",
                component: "h2",
                gutterBottom: true,
                sx: {
                    fontSize: {
                        xs: "20px",
                        md: "60px"
                    },
                    fontWeight: "bold",
                    textAlign: "center"
                },
                children: "Recent Episodes"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "16px",
                        md: "22.65px"
                    },
                    fontWeight: "medium",
                    textAlign: "center"
                },
                children: "Available on your favorite platform"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                spacing: 3,
                sx: {
                    mt: {
                        xs: "30px",
                        md: "60px"
                    },
                    px: {
                        xs: "10px",
                        md: "120px"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "relative",
                            width: 1
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                position: "absolute",
                                textAlign: "center",
                                right: -70,
                                top: -60,
                                display: {
                                    xs: "none",
                                    md: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "125px",
                                width: "125px",
                                src: Vector008,
                                alt: "bn"
                            })
                        })
                    }),
                    [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ].map((item1, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                sx: {
                                    height: {
                                        md: "250px"
                                    },
                                    padding: "20px",
                                    border: "2px solid #000000",
                                    borderRadius: "12px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    "&:hover": {
                                        boxShadow: "10px 10px 0px #81ADC8"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        container: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 4.2,
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: "end",
                                                    gap: "10px",
                                                    padding: "5px 10px",
                                                    height: {
                                                        xs: "auto",
                                                        md: "170px"
                                                    },
                                                    width: 1,
                                                    backgroundImage: `url("https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg")`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    borderRadius: "8px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                                                        to: "/sd",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiGooglepodcasts, {
                                                            style: {
                                                                fontSize: "12px",
                                                                color: "#fff"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                                                        to: "/xb",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiSpotify, {
                                                            style: {
                                                                fontSize: "12px",
                                                                color: "#fff"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                                                        to: "/rdgr",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiYoutube, {
                                                            style: {
                                                                fontSize: "12px",
                                                                color: "#fff"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 7.8,
                                                sx: {
                                                    paddingLeft: "20px",
                                                    paddingTop: {
                                                        md: "15px"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ComposedLink/* default */.Z, {
                                                        to: "/iubsvi",
                                                        sx: {
                                                            "&:hover": {
                                                                color: "vermillion.main"
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                gutterBottom: true,
                                                                sx: {
                                                                    fontSize: {
                                                                        xs: "10px",
                                                                        md: "16px"
                                                                    },
                                                                    fontWeight: "bold"
                                                                },
                                                                children: "Eps. 6"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                gutterBottom: true,
                                                                sx: {
                                                                    fontSize: {
                                                                        xs: "16px",
                                                                        md: "22.65px"
                                                                    },
                                                                    fontWeight: "bold",
                                                                    lineHeight: {
                                                                        xs: "0.9",
                                                                        md: "1.2"
                                                                    }
                                                                },
                                                                children: "Pandemic Becoming Endemic"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                                        sx: {
                                                            mb: {
                                                                md: "8px"
                                                            },
                                                            my: {
                                                                xs: "8px",
                                                                md: 0
                                                            }
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            fontSize: {
                                                                xs: "11px",
                                                                md: "14px"
                                                            },
                                                            fontWeight: "medium"
                                                        },
                                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            mt: "10px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1
                                                },
                                                children: [
                                                    "covid-19",
                                                    "health"
                                                ].map((item)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            fontSize: {
                                                                xs: "10px",
                                                                md: "12px"
                                                            },
                                                            fontWeight: "medium",
                                                            border: "1px solid",
                                                            borderColor: "davysGrey.main",
                                                            color: "davysGrey.main",
                                                            borderRadius: "4px",
                                                            padding: {
                                                                xs: "3px 6px",
                                                                md: "6px 12px"
                                                            }
                                                        },
                                                        children: item
                                                    }, item);
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            fontSize: {
                                                                xs: "10px",
                                                                md: "12px"
                                                            },
                                                            fontWeight: "bold",
                                                            marginRight: "10px"
                                                        },
                                                        children: "Hosted by:"
                                                    }),
                                                    [
                                                        1,
                                                        2
                                                    ].map((item, index)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                            sx: {
                                                                width: {
                                                                    xs: "18px",
                                                                    md: "25px"
                                                                },
                                                                height: {
                                                                    xs: "18px",
                                                                    md: "25px"
                                                                },
                                                                marginRight: "-10px"
                                                            }
                                                        }, item);
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index);
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: {
                        xs: "50px",
                        md: "100px"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ShadowButton/* default */.Z, {
                    sx: {
                        height: {
                            xs: "40px",
                            md: "60px"
                        },
                        width: "250px"
                    },
                    children: "BROWSE ALL EPISODES"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_RecentEpisodes = (RecentEpisodes);

;// CONCATENATED MODULE: ./src/assets/images/Vectors/Vector013.png
/* harmony default export */ const Vector013 = ({"src":"/_next/static/media/Vector013.7e68e327.png","height":491,"width":491,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEWArMiArMiArciArMiArcgNFW80AAAABXRSTlMwQiASAWXpKCQAAAAJcEhZcwAALEsAACxLAaU9lqkAAAArSURBVAiZHcjBDQAwEMKwANl/5qr3s4xqoziScdjy0ZvR8FkKMCGnFAU6HhNJAHFJTIKlAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "@mui/icons-material/Circle"
var Circle_ = __webpack_require__(9233);
var Circle_default = /*#__PURE__*/__webpack_require__.n(Circle_);
;// CONCATENATED MODULE: ./src/components/Home/Sponsor.tsx









const packageInfo = [
    {
        title: "Member",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 9.99,
        buttonText: "SUBSCRIBE",
        included: [
            "Exclusive Content",
            "5% Discount on Merch",
            "Join the Community",
            "Livestreaming Access", 
        ]
    },
    {
        title: "Family",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 14.99,
        focusTag: "MOST POPULAR",
        buttonText: "SUBSCRIBE",
        included: [
            "Free tickets to Events",
            "Limited Edition Merch",
            "Promote your Product",
            "Request Topic", 
        ]
    },
    {
        title: "Official",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 29.99,
        buttonText: "SUBSCRIBE",
        included: [
            "Exclusive Badge on Livestreaming",
            "Become an Official Sponsor",
            "Early Access to All Episodes",
            "Free Stikers and Merch", 
        ]
    }, 
];
const Sponsor = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            pt: "100px",
            pb: "150px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    component: "div",
                    gutterBottom: true,
                    sx: {
                        fontSize: {
                            xs: "20px",
                            md: "60px"
                        },
                        fontWeight: "bold",
                        textAlign: "center",
                        position: "relative",
                        marginTop: "40px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                position: "absolute",
                                textAlign: "center",
                                left: -35,
                                top: -15,
                                transform: "scaleX(-1)",
                                display: {
                                    xs: "none",
                                    md: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "60px",
                                width: "60px",
                                src: Vector008,
                                alt: "bn"
                            })
                        }),
                        "Become our sponsor"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "16px",
                        md: "22.65px"
                    },
                    fontWeight: "medium",
                    textAlign: "center"
                },
                children: "Get exclusive episodes, merch and more"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                sx: {
                    px: {
                        xs: "10px",
                        md: "100px"
                    },
                    mt: {
                        xs: "20px",
                        md: "100px"
                    },
                    position: "relative",
                    width: 1
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "absolute",
                            top: -90,
                            right: 10,
                            zIndex: -5,
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: "200px",
                            width: "200px",
                            src: Vector009,
                            alt: "bn"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "absolute",
                            bottom: -50,
                            left: 40,
                            zIndex: -5,
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: "120px",
                            width: "120px",
                            src: Vector013,
                            alt: "bn"
                        })
                    }),
                    packageInfo.map((item1, index1)=>{
                        var ref;
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 4,
                            sx: {
                                padding: "10px"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        border: "1.5px solid",
                                        borderColor: (item1 === null || item1 === void 0 ? void 0 : item1.focusTag) ? "#CD4631" : "#000",
                                        bgcolor: (item1 === null || item1 === void 0 ? void 0 : item1.focusTag) ? "#F7EDE8" : "#FFF",
                                        width: 1,
                                        height: {
                                            md: "360px"
                                        },
                                        padding: {
                                            xs: "20px",
                                            md: "40px"
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    gutterBottom: true,
                                                    sx: {
                                                        fontSize: {
                                                            xs: "20px",
                                                            md: "36.65px"
                                                        },
                                                        fontWeight: "bold"
                                                    },
                                                    children: item1 === null || item1 === void 0 ? void 0 : item1.title
                                                }),
                                                (item1 === null || item1 === void 0 ? void 0 : item1.focusTag) && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    gutterBottom: true,
                                                    sx: {
                                                        fontSize: "12px",
                                                        fontWeight: "bold",
                                                        bgcolor: "vermillion.main",
                                                        padding: "3px 6px",
                                                        borderRadius: "4px"
                                                    },
                                                    children: "MOST POPULAR"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                fontSize: {
                                                    xs: "12px",
                                                    md: "14px"
                                                },
                                                fontWeight: "medium",
                                                flexGrow: 1
                                            },
                                            children: (item1 === null || item1 === void 0 ? void 0 : item1.description.length) > 180 ? (item1 === null || item1 === void 0 ? void 0 : item1.description.substring(0, 190)) + "..." : item1 === null || item1 === void 0 ? void 0 : item1.description
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginTop: "20px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ShadowButton/* default */.Z, {
                                                    sx: {
                                                        width: "160px",
                                                        height: {
                                                            xs: "40px",
                                                            md: "60px"
                                                        }
                                                    },
                                                    children: item1 === null || item1 === void 0 ? void 0 : item1.buttonText
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            sx: {
                                                                fontSize: {
                                                                    xs: "18px",
                                                                    md: "22.65px"
                                                                },
                                                                fontWeight: "bold",
                                                                color: "vermillion.main"
                                                            },
                                                            children: `$${item1 === null || item1 === void 0 ? void 0 : item1.price}`
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            sx: {
                                                                fontSize: {
                                                                    xs: "12px",
                                                                    md: "14px"
                                                                },
                                                                fontWeight: "bold"
                                                            },
                                                            children: "/month"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        border: "1.5px solid",
                                        borderColor: (item1 === null || item1 === void 0 ? void 0 : item1.focusTag) ? "#CD4631" : "#000",
                                        bgcolor: (item1 === null || item1 === void 0 ? void 0 : item1.focusTag) ? "#F7EDE8" : "#FFF",
                                        marginTop: "20px",
                                        width: "100%",
                                        height: {
                                            md: "300px"
                                        },
                                        padding: {
                                            xs: "20px",
                                            md: "40px"
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                fontSize: {
                                                    xs: "12px",
                                                    md: "14px"
                                                },
                                                fontWeight: "bold"
                                            },
                                            children: "What\u2019s included:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                                            sx: {
                                                mt: {
                                                    md: "10px"
                                                }
                                            },
                                            children: [
                                                index1 > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                                    sx: {
                                                        padding: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                                            sx: {
                                                                minWidth: "10px"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Circle_default()), {
                                                                sx: {
                                                                    color: "#000",
                                                                    fontSize: "6px",
                                                                    mr: 1
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                                sx: {
                                                                    fontSize: "15px",
                                                                    fontWeight: "bold"
                                                                },
                                                                children: [
                                                                    "Everything in Tier ",
                                                                    index1
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, index1),
                                                item1 === null || item1 === void 0 ? void 0 : (ref = item1.included) === null || ref === void 0 ? void 0 : ref.map((item, index)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                                        sx: {
                                                            padding: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                                                sx: {
                                                                    minWidth: "10px"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Circle_default()), {
                                                                    sx: {
                                                                        color: "#000",
                                                                        fontSize: "6px",
                                                                        mr: 1
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                    sx: {
                                                                        fontSize: "15px",
                                                                        fontWeight: "medium"
                                                                    },
                                                                    children: item
                                                                })
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, index1);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Sponsor = (Sponsor);

;// CONCATENATED MODULE: ./src/components/Home/ArticleNews.tsx








const articleNews = [
    {
        category: "PODCAST",
        title: "Setup your own podcast",
        coverImage: "https://i.ibb.co/3mpSWQk/img.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tagList: [
            "business",
            "startup"
        ],
        createdAt: "Sep 14, 2021"
    },
    {
        category: "TIPS & TRICK",
        title: "Doodle artwork 101",
        coverImage: "https://i.ibb.co/3FMwLsh/imascg.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tagList: [
            "art",
            "creative",
            "tips and trick"
        ],
        createdAt: "Sep 12, 2021"
    }, 
];
const ArticleNews = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        component: "section",
        sx: {
            py: "160px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                component: "h2",
                variant: "h2",
                gutterBottom: true,
                sx: {
                    fontSize: {
                        xs: "20px",
                        md: "60px"
                    },
                    fontWeight: "bold",
                    textAlign: "center"
                },
                children: "Article and News"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontSize: {
                        xs: "16px",
                        md: "22.65px"
                    },
                    fontWeight: "medium",
                    textAlign: "center",
                    color: "davysGrey.main"
                },
                children: "News, tips, tricks and more"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                sx: {
                    mt: {
                        xs: "20px",
                        md: "60px"
                    },
                    px: {
                        xs: "10px",
                        md: "140px"
                    },
                    position: "relative",
                    width: 1
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "absolute",
                            bottom: -90,
                            right: 50,
                            transform: "rotate(135deg)",
                            zIndex: -5,
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: "185px",
                            width: "185px",
                            src: Vector007,
                            alt: "bn"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "absolute",
                            top: -90,
                            left: 60,
                            transform: "rotate(21.97deg)",
                            zIndex: -5,
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: "240px",
                            width: "240px",
                            src: Vector004,
                            alt: "bn"
                        })
                    }),
                    articleNews.map((article, index1)=>{
                        var ref;
                        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            sx: {
                                padding: "10px"
                            },
                            component: ComposedLink/* default */.Z,
                            to: `/article/${article.title}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                elevation: 3,
                                sx: {
                                    height: {
                                        xs: "auto",
                                        md: "610px"
                                    },
                                    padding: "16px !important",
                                    border: "1px solid",
                                    borderRadius: "8px",
                                    transition: "box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        boxShadow: "10px 10px 0px #000000"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "540px",
                                        height: "320px",
                                        src: article === null || article === void 0 ? void 0 : article.coverImage,
                                        alt: "ImgAlt"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: {
                                                xs: "10px",
                                                md: "14px"
                                            },
                                            fontWeight: "bold",
                                            color: "davysGrey.main",
                                            marginTop: "40px"
                                        },
                                        children: article === null || article === void 0 ? void 0 : article.category
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        gutterBottom: true,
                                        sx: {
                                            fontSize: {
                                                xs: "20px",
                                                md: "36.65px"
                                            },
                                            fontWeight: "bold",
                                            "&:hover": {
                                                color: "vermillion.main"
                                            }
                                        },
                                        children: article === null || article === void 0 ? void 0 : article.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: {
                                                xs: "11px",
                                                md: "14px"
                                            },
                                            fontWeight: "medium",
                                            color: "davysGrey.main"
                                        },
                                        children: (article === null || article === void 0 ? void 0 : article.description.length) > 190 ? (article === null || article === void 0 ? void 0 : article.description.substring(0, 190)) + " ..." : article === null || article === void 0 ? void 0 : article.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                        sx: {
                                            my: {
                                                xs: "10px",
                                                md: "25px"
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    gap: 1
                                                },
                                                children: article === null || article === void 0 ? void 0 : (ref = article.tagList) === null || ref === void 0 ? void 0 : ref.map((item, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            fontSize: {
                                                                xs: "9px",
                                                                md: "12px"
                                                            },
                                                            fontWeight: "medium",
                                                            color: "davysGrey.main",
                                                            padding: {
                                                                xs: "3px 6px",
                                                                md: "6px 12px"
                                                            },
                                                            border: "1px solid",
                                                            borderColor: "davysGrey.main",
                                                            borderRadius: "4px"
                                                        },
                                                        children: item
                                                    }, index);
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    fontSize: {
                                                        xs: "8px",
                                                        md: "12px"
                                                    },
                                                    fontWeight: "bold"
                                                },
                                                children: article === null || article === void 0 ? void 0 : article.createdAt
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index1);
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: {
                        xs: "50px",
                        md: "100px"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ShadowButton/* default */.Z, {
                    sx: {
                        width: "170px",
                        height: {
                            xs: "40px",
                            md: "60px"
                        }
                    },
                    children: "BROWSE ALL"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_ArticleNews = (ArticleNews);

;// CONCATENATED MODULE: ./src/assets/images/Illustration/Illustration003.png
/* harmony default export */ const Illustration003 = ({"src":"/_next/static/media/Illustration003.10f0d356.png","height":4166,"width":2127,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAP1BMVEWdl5n5+fmpuMHEzNKgoaFbaHDx8vNRWV5MaXGys7SNl53h3998g4jV3uOVlJOysrP9/f6HiYujp6qhpafX1tbDZ9u7AAAAD3RSTlMY8Upw3XXA1gCsk+XgnHRtflGrAAAACXBIWXMAACxLAAAsSwGlPZapAAAAK0lEQVQImQXBhwHAIAwEsaOamgfC/rMiUaBAdxnbEu38g09rUu8KRMmTzHgXVgE1dCgI6gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Illustration/Illustration004.png
/* harmony default export */ const Illustration004 = ({"src":"/_next/static/media/Illustration004.df6c6b0f.png","height":3655,"width":2772,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAZlBMVEVMaXFtgo++wsXn5+aOjo7u8fKVl5hvdnqZmZpHRkZDSk4oKCiipaby8vLb29u0tLRleodLVlz18vEAAg6+0NuwxtMAAACNrMDFzNF3foJfX2D49PT//v47OjmysLDV1tfl6u1/hYgYo4F4AAAAGnRSTlMAZONC/pIe/Pz95/v75Xx5xrHEK/CpUV7s6X/OlE4AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA7SURBVAiZBcEJAoAQFEDBp/CptK8odf9LNkNtQm8Hqsd1WtN4LzEy3a3IiPpcMbCcOc2wXzm9FtS6HfxEagKyf4ReHAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/Home/DownloadApp.tsx










const DownloadApp = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        component: "section",
        sx: {
            paddingTop: "80px",
            bgcolor: "aliceBlue.main"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "60px",
                position: "relative",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    component: "span",
                    sx: {
                        position: "absolute",
                        bottom: -450,
                        left: -85,
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        height: "960px",
                        width: "500px",
                        src: Illustration003,
                        alt: "sdv"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    component: "span",
                    sx: {
                        position: "absolute",
                        bottom: -145,
                        right: -260,
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        height: "700px",
                        width: "580px",
                        src: Illustration004,
                        alt: "sdv"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        fontSize: {
                            xs: "10px",
                            md: "14px"
                        },
                        fontWeight: "bold",
                        padding: "3px 6px",
                        color: "vermillion.main",
                        border: "1px solid",
                        borderColor: "vermillion.main"
                    },
                    children: "BETA"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        fontSize: {
                            xs: "20px",
                            md: "60px"
                        },
                        fontWeight: "bold",
                        marginTop: "20px",
                        marginBottom: {
                            md: "-20px"
                        }
                    },
                    children: "Available now"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        fontSize: {
                            xs: "30px",
                            md: "60px"
                        },
                        fontWeight: "bold"
                    },
                    children: "Pod of Cast App"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        fontSize: {
                            xs: "16px",
                            md: "22.65px"
                        },
                        fontWeight: "medium",
                        color: "davysGrey.main",
                        marginTop: {
                            xs: "10px",
                            md: "28px"
                        }
                    },
                    children: "We just launched our podcast app!"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ShadowButton/* default */.Z, {
                    sx: {
                        width: "210px",
                        height: {
                            xs: "40px",
                            md: "60px"
                        },
                        marginTop: {
                            xs: "40px",
                            md: "140px"
                        },
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            component: "span",
                            sx: {
                                position: "absolute",
                                top: -35,
                                right: -35,
                                display: {
                                    xs: "none",
                                    md: "block"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: "60px",
                                width: "60px",
                                src: Vector008,
                                alt: "sdv"
                            })
                        }),
                        "DOWNLOAD NOW"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        fontSize: {
                            xs: "10px",
                            md: "14px"
                        },
                        fontWeight: "medium",
                        marginTop: "24px"
                    },
                    children: "Content also available on:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        display: "flex",
                        gap: 3,
                        marginTop: "10px",
                        marginBottom: "50px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                            to: "/sd",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiGooglepodcasts, {
                                style: {
                                    fontSize: "24px",
                                    color: "#000"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                            to: "/xb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiSpotify, {
                                style: {
                                    fontSize: "24px",
                                    color: "#000"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ComposedLink/* default */.Z, {
                            to: "/rdgr",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiYoutube, {
                                style: {
                                    fontSize: "24px",
                                    color: "#000"
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Home_DownloadApp = (DownloadApp);

;// CONCATENATED MODULE: ./src/pages/index.tsx













const getStaticProps = async (context)=>{
    return {
        props: {},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 1
    };
};
const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_PodcastTypes, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_ScribbleRed, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Promotional, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_Scribble, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Reviews, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_Scribble, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Benefits, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_Scribble, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_RecentEpisodes, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_Scribble, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Sponsor, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_Scribble, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_ArticleNews, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Custom_ScribbleRed, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_DownloadApp, {})
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 9233:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Circle");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,960], () => (__webpack_exec__(267)));
module.exports = __webpack_exports__;

})();