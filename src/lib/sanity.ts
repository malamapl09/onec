import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

const isValidProjectId = projectId && /^[a-z0-9-]+$/.test(projectId);

let sanityClient: SanityClient | null = null;

if (isValidProjectId) {
  sanityClient = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: true,
  });
}

export { sanityClient };

export function urlFor(source: SanityImageSource) {
  if (!sanityClient) return { width: () => ({ height: () => ({ url: () => "" }) }) } as any;
  const builder = imageUrlBuilder(sanityClient);
  return builder.image(source);
}

export async function fetchSanity<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}
