import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "Mutuals — Trustless Multiparty Payment Distribution",
  siteName: "Mutuals — Trustless Multiparty Payment Distribution",
  description:
    "SplitFi distributes your payment streams based on predefined conditions — Trustless and Automated.",
  /** Without additional '/' on the end, e.g. https://decentum.co */
  url: "https://decentum.co",
  type: "website",
  robots: "follow, index",
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: "https://og.decentum.co/large-og.png",
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.robots} name="robots" />
      <meta content={meta.description} name="description" />
      <meta content={`${meta.url}${router.asPath}`} property="og:url" />
      <link href={`${meta.url}${router.asPath}`} rel="canonical" />
      {/* Open Graph */}
      <meta content={meta.type} property="og:type" />
      <meta content={meta.siteName} property="og:site_name" />
      <meta content={meta.description} property="og:description" />
      <meta content={meta.title} property="og:title" />
      <meta content={meta.image} name="image" property="og:image" />
      {/* Twitter */}
      <meta content="summary_large_image" name="twitter:card" />
      {/* // !STARTERCONF Remove or change to your handle */}
      {/* <meta name='twitter:site' content='@mutuals.eth' /> */}
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={meta.image} name="twitter:image" />
      {meta.date && (
        <>
          <meta content={meta.date} property="article:published_time" />
          <meta
            content={meta.date}
            name="publish_date"
            property="og:publish_date"
          />
          {/* // !STARTERCONF Remove or change to your name */}
          <meta content="SplitFi" name="author" property="article:author" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="/browserconfig.xml" name="msapplication-config" />
      <meta content="#ffffff" name="theme-color" />
    </Head>
  );
}

// ! then replace the whole /public folder and favicon.ico
const favicons: React.ComponentPropsWithoutRef<"link">[] = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#00e887",
  },
  { rel: "shortcut icon", href: "/favicon.ico" },
];
