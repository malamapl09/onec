import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  title: 'ONEC',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'PLACEHOLDER',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
