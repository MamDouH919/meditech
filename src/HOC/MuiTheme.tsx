import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CssBaseline } from "@mui/material";
import { Toaster } from "sonner";

export const muiCache = createCache({
    key: "mui",
});
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function withRoot(Component: any) {
    function WithRoot(props: any) {
        const { i18n } = useTranslation();

        const darkMode = "light"

        const dir = i18n.language === "ku" ? "rtl" : i18n.dir()

        const theme = createTheme({
            direction: dir,
            shape: {
                borderRadius: 20,
            },
            components: {
                // MuiCssBaseline: {
                //   styleOverrides: (themeParam) => ({
                //     body: themeParam.palette.mode === 'dark' ? darkScrollbar() : lightScrollbar(),
                //   }),
                // },

                MuiIcon: {
                    styleOverrides: {
                        root: {
                            fontFamily: "'Material Icons Outlined' !important",
                        },
                    },
                },
                MuiToolbar: {
                    styleOverrides: {
                        root: {
                            textTransform: "capitalize",
                        },
                    },
                },

                MuiTableCell: {
                    styleOverrides: {
                        root: {
                            padding: "0 16px",
                            maxHeight: "45px",
                            height: "45px",
                            whiteSpace: "nowrap",
                        },
                        head: {
                            // fontWeight: 600,
                        },
                    },
                },
                MuiSelect: {
                    defaultProps: {
                        variant: "filled",
                    },
                },
                MuiPaper: {
                    styleOverrides: {
                        root: {
                            backgroundImage: "none"
                        }
                    }
                },
                MuiFormControl: {
                    styleOverrides: {
                        root: {
                            "& label ,& input ,& .MuiSelect-select": {
                                // fontSize: "0.800rem",
                            },
                        },
                    },
                },
                // MuiOutlinedInput: {
                //   notchedOutline: {
                //     "& legend": {
                //       float: "none",
                //       margin: "initial",
                //     },
                //   },
                // },
                MuiTextField: {
                    defaultProps: {
                        size: "small"
                    }
                },
                // MuiButton: {
                //     variants: [
                //         {
                //             props: { variant: 'contained' },
                //             style: {
                //                 color: '#FFFFFF', // Set the text color to white
                //             },
                //         },
                //     ],
                // },
            },

            palette: {
                mode: darkMode,
                // mode: "dark",
                primary: {
                    main: "#d10e0e",
                },
                secondary: {
                    main: "#1879bd",
                },
                background: {
                    default: "#fafafa",
                    paper: "#fff",
                }
                // secondary: { main: color.blue[400] }
            },
            typography: {
                fontFamily: [`cairo`, "sans-serif"].join(","),
                fontSize: 12.5,
            },
        });

        // JssProvider allows customizing the JSS styling solution.
        return (
            <CacheProvider value={dir === "rtl" ? cacheRtl : muiCache}>
                {/* <StyledProvider injectFirst> */}
                <ThemeProvider
                    theme={
                        dir === "rtl"
                            ? {
                                ...theme,

                                direction: "rtl",
                            }
                            : {
                                ...theme,

                                direction: "ltr",
                            }
                    }
                >
                    <CssBaseline />
                    <Toaster richColors toastOptions={{
                        style: {
                            fontFamily: [`cairo`, "sans-serif"].join(","),
                            fontSize: 12.5,
                        },
                    }}
                    />
                    <Component {...props} />

                </ThemeProvider>
                {/* </StyledProvider> */}
            </CacheProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
