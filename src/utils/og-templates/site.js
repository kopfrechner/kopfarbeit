import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
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
                // Top accent bar
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
                // Center Content
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      marginTop: "20px",
                    },
                    children: [
                      {
                        type: "h1",
                        props: {
                          style: {
                            fontFamily: "Archivo Black",
                            fontSize: "96px",
                            lineHeight: "1",
                            textTransform: "uppercase",
                            color: "#000000",
                            margin: "0 0 20px 0",
                            textAlign: "center",
                          },
                          children: SITE.title,
                        },
                      },
                      {
                        type: "p",
                        props: {
                          style: {
                            fontFamily: "JetBrains Mono",
                            fontSize: "32px",
                            color: "#000000",
                            textAlign: "center",
                            maxWidth: "800px",
                            background: "#daff00", // --zest highlight
                            padding: "4px 12px",
                          },
                          children: SITE.desc,
                        },
                      },
                    ],
                  },
                },
                // Footer
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      fontFamily: "JetBrains Mono",
                      fontSize: "24px",
                      borderTop: "4px solid #000000",
                      paddingTop: "24px",
                    },
                    children: {
                      type: "span",
                      props: {
                        style: {
                          fontWeight: "bold",
                        },
                        children: new URL(SITE.website).hostname,
                      },
                    },
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
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + SITE.website),
    }
  );
};
