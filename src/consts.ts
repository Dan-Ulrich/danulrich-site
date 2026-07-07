import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Dan Ulrich",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Dan Ulrich — senior technical program manager and business analyst. Salt Lake City, UT | Remote – U.S.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on program delivery, operations, and AI-enabled work.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected projects and case studies.",
};

export const SOCIALS: Socials = [];
