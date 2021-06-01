import {defineConfig} from 'vite'
import {babel} from '@rollup/plugin-babel'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), {
        ...babel(),
        enforce: 'pre'
    }]
})
