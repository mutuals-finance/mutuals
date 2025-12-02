import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "Reimagine Programmable Money.",
  images: [
    {
      url: "/images/og-default.png",
    },
  ],
  siteName: "Mutuals",
  title: "Mutuals",
};

export const createOpenGraph = (
  og?: Metadata["openGraph"],
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
