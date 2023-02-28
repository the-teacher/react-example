
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  // documents: "src/**/*.gql.ts",
  generates: {
    "./src/graphql.schema.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
