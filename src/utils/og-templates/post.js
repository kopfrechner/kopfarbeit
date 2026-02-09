import satori from "satori";
// import { html } from "satori-html";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";
import { LEMON_HALF_SRC } from "./assets";

export default async post => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fffdf5", // --background
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                background: "#ffffff", // --card-bg
                border: "4px solid #000000", // --ink
                boxShadow: "12px 12px 0 #000000", // --shadow-neo
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "60px",
                position: "relative",
              },
              children: [
                // Top accent bar (Lemon Zest)
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "16px",
                      background: "#daff00", // --zest
                      borderBottom: "4px solid #000000",
                    },
                  },
                },
                // Title
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "40px", // clearance for top bar
                    },
                    children: [
                      {
                        type: "h1",
                        props: {
                          style: {
                            fontFamily: "Archivo Black",
                            fontSize: "84px",
                            lineHeight: "0.9",
                            textTransform: "uppercase",
                            color: "#000000",
                            margin: "0",
                            wordBreak: "break-word",
                          },
                          children: post.data.title,
                        },
                      },
                      // Date / Tags could go here
                    ],
                  },
                },
                // Footer (Author + Site)
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      fontFamily: "JetBrains Mono",
                      fontSize: "32px",
                      borderTop: "4px solid #000000",
                      paddingTop: "24px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          },
                          children: [
                            {
                              type: "span",
                              props: {
                                children: "by " + post.data.author,
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          },
                          children: [
                            {
                              type: "img",
                              props: {
                                src: LEMON_HALF_SRC,
                                width: 48,
                                height: 48,
                                style: {
                                  display: "flex",
                                },
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  background: "#daff00", // --zest
                                  border: "3px solid #000",
                                  padding: "4px 16px",
                                  fontWeight: "bold",
                                  boxShadow: "4px 4px 0 #000",
                                },
                                children: SITE.title,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title
      ),
    }
  );
};
