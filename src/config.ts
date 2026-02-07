export const SITE = {
  website: "https://soda-zitrone.dev", // replace this with your deployed domain
  author: "Christoph Kopf",
  profile: "https://www.linkedin.com/in/christoph-kopf-9b7a74b2",
  desc: "Soda Zitrone: A digital logbook for documenting thoughts, discoveries, and the journey of building software. A personal log of learning experiences, from Software Engineering to the future of AI-driven engineering.",
  title: "soda-zitrone.dev",
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
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Vienna", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
