"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/utils/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(4865);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Custom/ComposedLink.tsx
var ComposedLink = __webpack_require__(632);
;// CONCATENATED MODULE: ./src/assets/images/PodcastLogo.png
/* harmony default export */ const PodcastLogo = ({"src":"/_next/static/media/PodcastLogo.1f9bea4e.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzElEQVR42mOAAVFRUUthYWE/ERERNwkJCV6QGJDPBJOMAErYSIkIi1tIS2ipiYslO8hKyYElxcTEvETExAwZUAEjAwOXO5gF1Bnlr67MDGIf9bNjO+1r7XHJ38b6jI+VzzEfazGQ8dE+akqsIAUHva15zvnbxp31s8k672sVdcHfVhRkha20mJgLzGygZDxQUTiY7WMJNplBRkzUg0FAKCBPR0XjYoBdGFBRzjk/m2KgwkCEs4RFlC1kpTVvhzhKnvGzVQRKqpwLsOcFAEVuLewR4zUmAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/Footer/GPodcasts.png
/* harmony default export */ const GPodcasts = ({"src":"/_next/static/media/GPodcasts.0086d59a.png","height":144,"width":792,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJ0lEQVR4nGO8MzvMZc1vlQcVWYuZZeQE+L5//fuTgYHhGxCzADEDAPGfC3o41y2aAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/Footer/Spotify.png
/* harmony default export */ const Spotify = ({"src":"/_next/static/media/Spotify.5fe9bd95.png","height":136,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGOUvRa/mJGZifHr0cfdb5P2KDMocjxluP9DlIGBQQqIT4MUbGFkYmT8cfNd/iv/TaYM0mzfGJ7++gmU5ALi9wAcLRd1AeHYmwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Footer/YouTube.png
/* harmony default export */ const YouTube = ({"src":"/_next/static/media/YouTube.2a59742d.png","height":112,"width":497,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGP87ez8mVlJief57NlLpF1cTsezsb14+fevFgsr64ePHz++BitgAir4Nnt2P6+b2we/37+1frOzv//3/z/ft69fmQECxyFyljU4mwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/images/Footer/AppStore.png
/* harmony default export */ const AppStore = ({"src":"/_next/static/media/AppStore.84fd1a3c.png","height":126,"width":126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA70lEQVR42hWJvUoDQRhF70uInYUoZECx1cLWh9BaC0mj+LM+ghKw0sqIaGPAMsYq6BQiqVIoKKawUISQnWWz2c3uTMLc5Ltw4HIO5l8KTFErutBoFk6QLw4yVR+qpUYe4TFn9d3x5sNRvjhVzxUWaplee8iIq9S2f0d8+3FENbWrUycNy9cDh8vEb9VSvnYcn78sN+9T4iLx0oDTvqs0Mv8Xjtn5H7H1bdmNxzx/yigNCCJ9dJuw2c7tRiXm+lnM1mdhg7uEOI40cGBU6SQypcAQe8Zj3/iZQ0Nx0oCdnqBmd0O9WA6dMFcONbZ7CgAmvTWleHHrH/EAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/Footer/PlayStore.png
/* harmony default export */ const PlayStore = ({"src":"/_next/static/media/PlayStore.8c294f18.png","height":117,"width":108,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA2UlEQVR42mNgP3P/Ds/t2nX8zxmEGaDgxlNnFjCD7dT/F+wXb/1ne5z+RuJ5cR4DFJx84cPMwHvp1zOOM///C129+p/hVdp/hrel1x49sXEDqxC4/vuZyJVf/+XO/v/LcO/a7/2v7P//f8T0/+9Tzv0Mknd/PVO98fM/w73/f9dPOvT7/zSG//8eC/z/95RlP4Pmgx/PGF78/79i6YH/Xxh4/79X8r32a4+uGwMYvPz/Yt76o/8/MIi8eW0VAnfQ91WmzAxTN5++81TMY91nBna4V37u0Ad7BQDwI2xkcAzWdgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "@mui/icons-material/Circle"
var Circle_ = __webpack_require__(9233);
var Circle_default = /*#__PURE__*/__webpack_require__.n(Circle_);
;// CONCATENATED MODULE: ./src/components/Shared/Footer.tsx













const footerLinks = [
    {
        title: "About",
        to: "/about"
    },
    {
        title: "Episodes",
        to: "/episodes"
    },
    {
        title: "Testimonials",
        to: "/testimonials"
    },
    {
        title: "Pricing",
        to: "/pricing"
    },
    {
        title: "Features",
        to: "/features"
    },
    {
        title: "Blog",
        to: "/blog"
    }, 
];
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            px: {
                xs: "20px",
                md: "140px"
            },
            pb: "40px",
            pt: {
                xs: "50px",
                md: "100px"
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                sx: {
                    pb: {
                        xs: "20px",
                        md: "60px"
                    },
                    borderBottom: "0.5px solid",
                    borderColor: "davysGrey.main"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        sx: {
                            padding: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItems: "end"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            mr: "24px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: "74px",
                                            height: "74px",
                                            src: PodcastLogo,
                                            alt: "Brand-logo"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: {
                                                xs: "10px",
                                                md: "12px"
                                            },
                                            fontWeight: "medium",
                                            pb: "10px"
                                        },
                                        children: "\xa92021."
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
                                    my: {
                                        xs: "10px",
                                        md: "40px"
                                    }
                                },
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    my: {
                                        xs: "25px",
                                        md: 0
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitter, {
                                        style: {
                                            fontSize: "24px",
                                            marginRight: "25px"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaInstagram, {
                                        style: {
                                            fontSize: "24px",
                                            marginRight: "25px"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTiktok, {
                                        style: {
                                            fontSize: "24px"
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        sx: {
                            padding: "10px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            sx: {
                                justifyContent: "space-between"
                            },
                            children: footerLinks.map((link, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 5,
                                    sx: {
                                        mb: {
                                            xs: "5px",
                                            md: "20px"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: ComposedLink/* default */.Z,
                                        to: link.to,
                                        sx: {
                                            fontSize: {
                                                xs: "14px",
                                                md: "16px"
                                            },
                                            fontWeight: "medium",
                                            color: "black.main",
                                            "&:hover": {
                                                color: "vermillion.main"
                                            }
                                        },
                                        children: link.title
                                    })
                                }, `footerNav-${index}`);
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        sx: {
                            padding: "10px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "14px",
                                        md: "16px"
                                    },
                                    fontWeight: "medium"
                                },
                                children: "Listen to episodes on your fav platform:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    my: {
                                        xs: "30px",
                                        md: "40px"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "122px",
                                        height: "22px",
                                        src: GPodcasts,
                                        alt: "Google-Podcast-logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "80px",
                                        height: "22px",
                                        src: Spotify,
                                        alt: "Spotify-logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "94px",
                                        height: "22px",
                                        src: YouTube,
                                        alt: "YouTube-logo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "14px",
                                        md: "16px"
                                    },
                                    fontWeight: "medium",
                                    mt: {
                                        xs: "20px",
                                        md: "60px"
                                    }
                                },
                                children: "App available on:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    mt: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "30px",
                                        height: "30px",
                                        src: AppStore,
                                        alt: "Spotify-logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: "30px",
                                        height: "30px",
                                        src: PlayStore,
                                        alt: "YouTube-logo"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    mt: "10px",
                    display: "flex",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            alignItems: {
                                md: "center"
                            },
                            gap: "10px",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "10px",
                                        md: "12px"
                                    },
                                    fontWeight: "medium"
                                },
                                children: "\xa92022. All Rights Reserved."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "10px",
                                        md: "12px"
                                    },
                                    fontWeight: "medium",
                                    color: "vermillion.main"
                                },
                                children: "Pod of Cast"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "10px",
                                        md: "12px"
                                    },
                                    fontWeight: "medium"
                                },
                                children: "Terms"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Circle_default()), {
                                sx: {
                                    width: "5px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: {
                                        xs: "10px",
                                        md: "12px"
                                    },
                                    fontWeight: "medium"
                                },
                                children: "Privacy"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Shared_Footer = (Footer);

;// CONCATENATED MODULE: external "@mui/icons-material/ExpandCircleDownOutlined"
const ExpandCircleDownOutlined_namespaceObject = require("@mui/icons-material/ExpandCircleDownOutlined");
var ExpandCircleDownOutlined_default = /*#__PURE__*/__webpack_require__.n(ExpandCircleDownOutlined_namespaceObject);
// EXTERNAL MODULE: ./src/components/Custom/ShadowButton.tsx
var ShadowButton = __webpack_require__(5277);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Shared/Navbar.tsx








const Navbar = ()=>{
    const [open, setOpen] = external_react_default().useState(false);
    const toggleDrawer = (event)=>{
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.AppBar, {
        position: "sticky",
        sx: {
            background: "#F7EDE8E8",
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            height: {
                sm: "3rem",
                md: "6rem"
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                variant: "dense",
                component: "nav",
                sx: {
                    my: {
                        md: "1.6rem"
                    },
                    mx: {
                        xs: "1rem",
                        md: "8rem"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            position: "relative",
                            width: 0
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            onClick: toggleDrawer,
                            size: "large",
                            edge: "start",
                            sx: {
                                display: {
                                    xs: "inline",
                                    md: "none"
                                },
                                ml: "10px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            flexGrow: {
                                xs: 1,
                                md: 0
                            },
                            display: {
                                xs: "flex",
                                md: "block"
                            },
                            marginRight: {
                                xs: 0,
                                md: "8rem"
                            },
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: "74px",
                            height: "74px",
                            src: PodcastLogo,
                            alt: "Brand-logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    mr: "3.5rem"
                                },
                                children: "Episodes"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    mr: "3.5rem"
                                },
                                children: "About"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                sx: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    "More",
                                    /*#__PURE__*/ jsx_runtime_.jsx((ExpandCircleDownOutlined_default()), {
                                        sx: {
                                            height: "0.9rem"
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            flexGrow: 0,
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                variant: "outlined",
                                color: "black",
                                sx: {
                                    height: "2.7rem",
                                    width: "12rem",
                                    borderRadius: "0.6rem",
                                    border: "0.15rem solid black",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    mr: "20px"
                                },
                                children: "RECENT EPISODES"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ShadowButton/* default */.Z, {
                                variant: "contained",
                                color: "black",
                                sx: {
                                    height: "2.7rem",
                                    width: "10rem",
                                    fontSize: "14px",
                                    fontWeight: "bold"
                                },
                                children: "SUBSCRIBE"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                sx: {
                    display: {
                        sm: "block",
                        md: "none"
                    }
                },
                anchor: "left",
                open: open,
                onClose: toggleDrawer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        width: 200,
                        height: 1,
                        background: "#F7EDE8E8",
                        backdropFilter: "blur(10px)"
                    },
                    role: "presentation",
                    onClick: toggleDrawer,
                    onKeyDown: toggleDrawer,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                        sx: {
                            mt: "6rem",
                            "& .MuiListItem-button": {
                                borderTop: 1,
                                borderBottom: 1
                            },
                            "& .MuiListItem-button:last-child": {
                                borderTop: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                button: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        mx: "auto"
                                    },
                                    children: "Episodes"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                button: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        mx: "auto"
                                    },
                                    children: "About"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Shared_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Shared/Layout.tsx






const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "POD OF CAST | Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae consectetur interdum, nisl nisi aliquam eros, eget egestas nisl nisi eget."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Shared_Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        component: "main",
                        sx: {
                            flexGrow: 1
                        },
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shared_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const Shared_Layout = (Layout);

;// CONCATENATED MODULE: ./src/configs/theme.ts

// Get palette from theme
const { palette  } = (0,styles_.createTheme)();
// Create a theme instance.
const theme = (0,styles_.createTheme)({
    // Include font in MUI components.
    typography: {
        fontFamily: [
            "Montserrat Alternates",
            "sans-serif"
        ].join(",")
    },
    // Override the default palette and add custom colors.
    palette: {
        // mode: "dark" as PaletteMode,
        primary: {
            main: "#81ADC8"
        },
        black: {
            main: "#000000",
            contrastText: "#fff"
        },
        vermillion: {
            main: "#CD4631"
        },
        davysGrey: {
            main: "#4D4D4D"
        },
        champagne: {
            main: "#F7EDE8"
        },
        aliceBlue: {
            main: "#EDF3F7"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#CD4631 #F7EDE8",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#F7EDE8",
                        width: "15px"
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#CD4631",
                        minHeight: 24,
                        border: "3px solid #F7EDE8"
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#81ADC8"
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#CD4631"
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#81ADC8"
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#CD4631"
                    }
                }
            }
        }
    }
});
/* harmony default export */ const configs_theme = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.tsx










// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
                theme: configs_theme,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Shared_Layout, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/createEmotionCache.ts

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
};


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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,960], () => (__webpack_exec__(9749)));
module.exports = __webpack_exports__;

})();