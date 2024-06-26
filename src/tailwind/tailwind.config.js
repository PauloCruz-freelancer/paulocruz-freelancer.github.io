module.exports = {
    "presets": [
        {
            "theme": {
                "extend": {
                    "screens": {
                        "sm": "640px",
                        "md": "768px",
                        "lg": "1024px",
                        "xl": "1146px",
                        "2xl": "1280px",
                        "3xl": "1540px"
                    },
                    "colors": {
                        "current": "currentColor",
                        "transparent": "transparent",
                        "black": "#000",
                        "white": "#fff",
                        "gray": {
                            "50": "#FEFEFE",
                            "100": "#F8F8F8",
                            "200": "#DFDFDF",
                            "300": "#C5C5C5",
                            "400": "#ABABAB",
                            "500": "#8A888B",
                            "600": "#787878",
                            "700": "#5F5F5F",
                            "800": "#22222B",
                            "900": "#101010"
                        },
                        "blueGray": {
                            "50": "#e1dfe3",
                            "100": "#c3c0c8",
                            "200": "#b9b5bf",
                            "300": "#afabb6",
                            "400": "#a5a0ad",
                            "500": "#9B96A4",
                            "600": "#8b8793",
                            "700": "#7c7883",
                            "800": "#3e3c41",
                            "900": "#1f1e20"
                        },
                        "red": {
                            "50": "#FFFCFC",
                            "100": "#FFF5F3",
                            "200": "#FFCBC0",
                            "300": "#FFA18D",
                            "400": "#FF765A",
                            "500": "#FF4C27",
                            "600": "#F32A00",
                            "700": "#C02100",
                            "800": "#8D1800",
                            "900": "#5A0F00"
                        },
                        "orange": {
                            "50": "#ffffff",
                            "100": "#fff9f4",
                            "200": "#fff3ea",
                            "300": "#ffede0",
                            "400": "#ffe7d5",
                            "500": "#ffdbc1",
                            "600": "#ffd5b6",
                            "700": "#ffcfac",
                            "800": "#ffc9a2",
                            "900": "#ffc398"
                        },
                        "lime": {
                            "50": "#FCFFF6",
                            "100": "#F6FFE9",
                            "200": "#E1FFB6",
                            "300": "#CDFF83",
                            "400": "#B8FF50",
                            "500": "#A3FF1D",
                            "600": "#8AE900",
                            "700": "#6CB600",
                            "800": "#4E8300",
                            "900": "#83FF8F"
                        },
                        "green": {
                            "50": "#FFFFFF",
                            "100": "#E7F9F6",
                            "200": "#D0F4ED",
                            "300": "#B9EEE5",
                            "400": "#A2E9DC",
                            "500": "#8BE4D4",
                            "600": "#73DECB",
                            "700": "#5CD9C2",
                            "800": "#30D3B6",
                            "900": "#2BBDA3"
                        },
                        "blue": {
                            "50": "#F9FCFF",
                            "100": "#EEF7FE",
                            "200": "#BEE0FB",
                            "300": "#8DC9F9",
                            "400": "#5DB3F6",
                            "500": "#2D9CF3",
                            "600": "#0D83E0",
                            "700": "#0A67B0",
                            "800": "#074B80",
                            "900": "#052F4F"
                        },
                        "indigo": {
                            "50": "#eeeafc",
                            "100": "#ded5f9",
                            "200": "#9784E6",
                            "300": "#7b58e7",
                            "400": "#6b43e4",
                            "500": "#5B2FE2",
                            "600": "#4c1ed9",
                            "700": "#441bc3",
                            "800": "#3d18ac",
                            "900": "#351596"
                        },
                        "pink": {
                            "50": "#FFFCFF",
                            "100": "#FFF0FE",
                            "200": "#FFBDFA",
                            "300": "#FF8AF7",
                            "400": "#FF57F3",
                            "500": "#FF24F0",
                            "600": "#F000E0",
                            "700": "#BD00B0",
                            "800": "#8A0081",
                            "900": "#570051"
                        }
                    },
                    "spacing": {
                        "0": "0px",
                        "1": "0.25rem",
                        "2": "0.5rem",
                        "3": "0.75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "11": "2.75rem",
                        "12": "3rem",
                        "14": "3.5rem",
                        "16": "4rem",
                        "18": "4.5rem",
                        "20": "5rem",
                        "24": "6rem",
                        "26": "6.5rem",
                        "28": "7rem",
                        "32": "8rem",
                        "36": "9rem",
                        "40": "10rem",
                        "44": "11rem",
                        "48": "12rem",
                        "52": "13rem",
                        "56": "14rem",
                        "60": "15rem",
                        "64": "16rem",
                        "72": "18rem",
                        "80": "20rem",
                        "96": "24rem",
                        "px": "1px",
                        "0.5": "0.125rem",
                        "1.5": "0.375rem",
                        "2.5": "0.625rem",
                        "3.5": "0.875rem"
                    },
                    "backgroundColor": theme => ({
            ...theme('colors'),
            body: '#fff',
        }),
                    "backgroundPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "backgroundSize": {
                        "auto": "auto",
                        "cover": "cover",
                        "contain": "contain"
                    },
                    "borderColor": theme => ({
            ...theme('colors'),
            DEFAULT: '#DFDFDF',
        }),
                    "borderRadius": {
                        "none": "0",
                        "sm": "0.125rem",
                        "DEFAULT": "0.25rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "3xl": "1.5rem",
                        "full": "9999px"
                    },
                    "borderWidth": {
                        "0": "0",
                        "2": "2px",
                        "3": "3px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "1px"
                    },
                    "boxShadow": {
                        "sm": "10px 24px 56px rgba(0, 0, 0, 0.04)",
                        "DEFAULT": "10px 24px 56px rgba(0, 0, 0, 0.08)",
                        "md": "18px 24px 104px rgba(0, 0, 0, 0.04)",
                        "lg": "18px 24px 104px rgba(0, 0, 0, 0.04)",
                        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                        "none": "none"
                    },
                    "container": [],
                    "cursor": {
                        "auto": "auto",
                        "DEFAULT": "default",
                        "pointer": "pointer",
                        "wait": "wait",
                        "text": "text",
                        "move": "move",
                        "not-allowed": "not-allowed"
                    },
                    "fill": {
                        "current": "currentColor"
                    },
                    "flex": {
                        "1": "1 1 0%",
                        "auto": "1 1 auto",
                        "initial": "0 1 auto",
                        "none": "none"
                    },
                    "flexGrow": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "flexShrink": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "fontFamily": {
                        "body": "\"Readex Pro\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "heading": "\"Prata\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "sans": "\"Readex Pro\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "serif": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
                        "mono": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
                    },
                    "fontSize": {
                        "xs": [
                            "0.75rem",
                            {
                                "lineHeight": "1rem"
                            }
                        ],
                        "sm": [
                            "0.875rem",
                            {
                                "lineHeight": "1.25rem"
                            }
                        ],
                        "base": [
                            "1rem",
                            {
                                "lineHeight": "1.5rem"
                            }
                        ],
                        "lg": [
                            "1.125rem",
                            {
                                "lineHeight": "1.75rem"
                            }
                        ],
                        "xl": [
                            "1.25rem",
                            {
                                "lineHeight": "1.75rem"
                            }
                        ],
                        "2xl": [
                            "1.5rem",
                            {
                                "lineHeight": "2rem"
                            }
                        ],
                        "3xl": [
                            "1.875rem",
                            {
                                "lineHeight": "2.25rem"
                            }
                        ],
                        "4xl": [
                            "2.5rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "5xl": [
                            "3.5rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "6xl": [
                            "4rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "7xl": [
                            "5rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "8xl": [
                            "6rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "9xl": [
                            "8.875rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ]
                    },
                    "fontWeight": {
                        "hairline": "100",
                        "thin": "200",
                        "light": "300",
                        "normal": "400",
                        "medium": "500",
                        "semibold": "600",
                        "bold": "700",
                        "extrabold": "800",
                        "black": "900"
                    },
                    "height": theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
                    "inset": (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            full: '100%',
            '-1\/2': '-50%',
            '-1\/3': '-33.333333%',
            '-2\/3': '-66.666667%',
            '-1\/4': '-25%',
            '-2\/4': '-50%',
            '-3\/4': '-75%',
            '-full': '-100%',
        }),
                    "letterSpacing": {
                        "tighter": "-0.02em",
                        "tight": "-1px",
                        "normal": "0em",
                        "wide": "0.03em",
                        "wider": "0.08em",
                        "widest": "0.1em"
                    },
                    "lineHeight": {
                        "3": ".75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "none": "1",
                        "tight": "1.25",
                        "snug": "1.375",
                        "normal": "1.5",
                        "relaxed": "1.625",
                        "loose": "2"
                    },
                    "listStyleType": {
                        "none": "none",
                        "disc": "disc",
                        "decimal": "decimal"
                    },
                    "margin": (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
                    "maxHeight": {
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "maxWidth": {
                        "none": "none",
                        "xs": "20rem",
                        "sm": "24rem",
                        "md": "28rem",
                        "lg": "32rem",
                        "xl": "36rem",
                        "2xl": "42rem",
                        "3xl": "48rem",
                        "4xl": "56rem",
                        "5xl": "64rem",
                        "6xl": "72rem",
                        "7xl": "80rem",
                        "full": "100%",
                        "min": "min-content",
                        "max": "max-content",
                        "prose": "65ch"
                    },
                    "minHeight": {
                        "0": "0",
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "minWidth": {
                        "0": "0",
                        "full": "100%"
                    },
                    "objectPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "opacity": {
                        "0": "0",
                        "5": "0.05",
                        "10": "0.1",
                        "20": "0.2",
                        "25": "0.25",
                        "30": "0.3",
                        "40": "0.4",
                        "50": "0.5",
                        "60": "0.6",
                        "70": "0.7",
                        "75": "0.75",
                        "80": "0.8",
                        "90": "0.9",
                        "95": "0.95",
                        "100": "1"
                    },
                    "order": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "first": "-9999",
                        "last": "9999",
                        "none": "0"
                    },
                    "padding": theme => theme('spacing'),
                    "placeholderColor": theme => theme('colors'),
                    "stroke": {
                        "current": "currentColor"
                    },
                    "textColor": theme => ({
            ...theme('colors'),
            body: '#232126',
        }),
                    "width": theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            '1\/5': '20%',
            '2\/5': '40%',
            '3\/5': '60%',
            '4\/5': '80%',
            '1\/6': '16.666667%',
            '2\/6': '33.333333%',
            '3\/6': '50%',
            '4\/6': '66.666667%',
            '5\/6': '83.333333%',
            '1\/12': '8.333333%',
            '2\/12': '16.666667%',
            '3\/12': '25%',
            '4\/12': '33.333333%',
            '5\/12': '41.666667%',
            '6\/12': '50%',
            '7\/12': '58.333333%',
            '8\/12': '66.666667%',
            '9\/12': '75%',
            '10\/12': '83.333333%',
            '11\/12': '91.666667%',
            full: '100%',
            screen: '100vw',
        }),
                    "zIndex": {
                        "0": "0",
                        "10": "10",
                        "20": "20",
                        "30": "30",
                        "40": "40",
                        "50": "50",
                        "auto": "auto"
                    }
                }
            }
        }
    ],
    "theme": {
        "extend": {
            "colors": {
                "black": "rgba(0, 0, 0, 0.88)",
                "gray": {
                    "50": "#778195",
                    "100": "#F8F8F8"
                },
                "pink": {
                    "50": "#C09BB0",
                    "100": "#D9A0BB",
                    "500": "#FF24F0"
                }
            }
        }
    },
    "content": [
        ".\/src\/pug\/*.pug",
        ".\/src\/html\/*.html",
        ".\/src\/pages\/*.js",
        ".\/src\/components\/*\/*.js"
    ]
};