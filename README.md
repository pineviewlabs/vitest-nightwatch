# Test your Vue Components with Vitest and Nightwatch

## Step 0: Create a new project with Vite

Choose Vue and TypeScript when prompted below:

```bash
npm init vite@latest
``` 

## Step 1: Install and Configure Vitest

```bash
npm i -D vitest @vitest/ui @vitest/plugin-vue
```

Since `vitest` is based on `vite`, you can use the same configuration file. Edit the `vite.config.ts` file to add the following. You'll also need to add a reference to Vitest types using a [triple slash command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file.

```ts 
/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
})
```

Next, edit your `package.json` to add the `test` scripts:

```json
{
  "scripts": {
     "test": "vitest",
     "test:ui": "vitest --ui",
     "test:run": "vitest run"
  }
}
```

---