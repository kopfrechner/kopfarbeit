export const SITE = {
  website: "https://sodazitron.dev", // replace this with your deployed domain
  author: "Christoph Kopf",
  profile: "https://www.linkedin.com/in/christoph-kopf-9b7a74b2",
  desc: "Sodazitron: Ein digitales Logbuch zur Dokumentation von Gedanken, Entdeckungen und der Reise der Softwareentwicklung. Ein persönliches Protokoll von Lernerfahrungen, von Software Engineering bis zur Zukunft des KI-gesteuerten Engineerings.",
  title: "sodazitron.dev",
  titleSlug: "sodazitron",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  showBreadcrumbs: false, // show breadcrumbs
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
