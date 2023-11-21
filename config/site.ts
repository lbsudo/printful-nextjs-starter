export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Docs",
      href: "https://github.com/lbsudo/printful-nextjs-starter",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Docs",
      href: "https://github.com/lbsudo/printful-nextjs-starter",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/lbsudo",
    docs: "https://github.com/lbsudo/printful-nextjs-starter",
  },
};
