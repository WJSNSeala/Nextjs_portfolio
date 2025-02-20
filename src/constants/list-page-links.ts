export type LinkData = {
  href: string;
  slug: string;
};

export const HTML_DOCS_LINKS: LinkData[] = [
  {
    href: "/dialog",
    slug: "Dialog",
  },
] as const;

export const REACT_DOCS_LINKS: LinkData[] = [
  {
    href: "/components",
    slug: "React Components",
  },
  {
    href: "/hooks",
    slug: "React Hooks",
  },
] as const;

export const REACT_DOCS_COMPONENTS_LINKS: LinkData[] = [
  {
    href: "/profiler",
    slug: "React Profiler",
  },
];

export const REACT_DOCS_HOOKS_LINKS: LinkData[] = [
  {
    href: "/use-action-state",
    slug: "useActionState hook",
  },
];
