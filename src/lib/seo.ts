export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  publishedAt?: string;
  canonicalUrl?: string;
}

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface SEOMeta {
  title: string;
  meta: MetaTag[];
}

export function generateMeta(props: SEOProps): SEOMeta {
  const title = `${props.title} | ONEC`;

  const meta: MetaTag[] = [
    { name: "description", content: props.description },
    { property: "og:title", content: title },
    { property: "og:description", content: props.description },
    { property: "og:locale", content: "es_DO" },
    { property: "og:site_name", content: "ONEC" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: props.description },
  ];

  if (props.image) {
    meta.push({ property: "og:image", content: props.image });
  }

  if (props.article) {
    meta.push({ property: "og:type", content: "article" });
    if (props.publishedAt) {
      meta.push({
        property: "article:published_time",
        content: props.publishedAt,
      });
    }
  }

  return { title, meta };
}
