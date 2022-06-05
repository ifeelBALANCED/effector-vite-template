import { fileURLToPath } from "url";

import { defineConfig } from 'vite';
import reactJsx from 'vite-react-jsx';

import legacy from "@vitejs/plugin-legacy";
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    legacy(),
    reactRefresh(),
    reactJsx(),
  ],
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
