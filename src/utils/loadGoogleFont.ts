async function loadGoogleFont(
  font: string,
  text: string,
  weight: number
): Promise<ArrayBuffer> {
  // Use a reliable subset or full font if subsetting fails
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) throw new Error("Failed to download dynamic font");

  const res = await fetch(resource[1]);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  return res.arrayBuffer();
}

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "JetBrains Mono",
      font: "JetBrains+Mono",
      weight: 400,
      style: "normal",
    },
    {
      name: "Archivo Black",
      font: "Archivo+Black",
      weight: 400,
      style: "normal",
    },
    {
      name: "Noto Emoji",
      font: "Noto+Color+Emoji", // Changed to Color Emoji for better support
      weight: 400,
      style: "normal",
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      // Pass text only for optimization, but might cause missing glyphs if cache is cold
      // Trying to fetch full font instead by ignoring text param in loadGoogleFont
      const data = await loadGoogleFont(font, text, weight);
      return { name, data, weight, style };
    })
  );

  return fonts;
}

export default loadGoogleFonts;
