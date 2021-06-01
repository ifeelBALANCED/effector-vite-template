import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {babel} from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        babel({
            include: ['./src/**'],
            extensions: ['.ts', '.tsx'],
            babelHelpers: 'bundled',
        }),
    ],
})
