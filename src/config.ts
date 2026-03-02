// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jerick Gamba";
export const SITE_DESCRIPTION = "My portfolio";

export interface NavLink {
  title: string;
  id?: string;
  url?: string;
  redirect?: string;
  tooltip?: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    title: "Home",
    id: "home",
    url: "/",
    tooltip: "Home",        
  },
  {
    title: "Blog",
    id: "blog",
    url: "/blog",     
    tooltip: "Posts and stuff",
  },
  {
    title: "Happy",
    id: "happy",
    url: "/happy",     
    tooltip: "Will make you smile :)",
  },
];

export type SocialPlatform = "twitter" | "github" | "instagram" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/jerick-gamba-5139053b3/",
    label: "LinkedIn",
  },
  {
    platform: "github",
    url: "https://github.com/Xiredge",
    label: "GitHub",
  },
];
