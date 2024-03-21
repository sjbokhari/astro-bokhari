import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "ボカリ",
  DESCRIPTION: "A minimal blog theme written in astro. sphere migration",
  AUTHOR: "Shehryar Jehanzeb Bokhari",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "shehryar@bokhari.de",
    HREF: "mailto:shehryar@bokhari.de",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "sjbokhari",
    HREF: "https://github.com/sjbokhari",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Shehryar Bokhari",
    HREF: "https://www.linkedin.com/in/shehryar-jehanzeb-bokhari-296506191/",
  },
  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
];
