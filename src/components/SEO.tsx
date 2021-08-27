import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

export default function SEO({ title, description, image }: SEOProps) {
  const pageTitle = `${title}`;
  const pageImage = image ? `${process.env.DOMAIN}/${image}` : null;
  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}
    </Head>
  );
}
