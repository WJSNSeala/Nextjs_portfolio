export type LinkData = {
  href: string;
  slug: string;
};

export const REACT_DOCS_LINKS: LinkData[] = [
  {
    href: "/components",
    slug: "React Components",
  },
] as const;
