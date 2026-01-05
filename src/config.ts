export const SITE = {
  website: "https://kopfarbeit.dev", // replace this with your deployed domain
  author: "Christoph Kopf",
  profile: "https://www.linkedin.com/in/christoph-kopf-9b7a74b2",
  desc: "KopfarbeIT: Ein Deep Dive in das .NET-Ökosystem und modernes Software-Engineering. Begleite Christoph Kopf beim Erkunden neuer Technologien, teile wertvolle Coding-Insights und erlebe die Reise eines leidenschaftlichen Engineers.",
  title: "KopfarbeIT",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "de", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Vienna", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
