import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, type PluginOption, loadEnv } from "vite"
import "dotenv/config"
import { cleanEnv, str } from "envalid"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = cleanEnv(loadEnv(mode, process.cwd(), ""), {
        TOKEN: str()
    })

    return {
        plugins: [react(), visualizer() as PluginOption],
        server: {
            port: 3000,
            host: "localhost"
        },
        define: {
            APP_VERSION: JSON.stringify(process.env.npm_package_version),
            API_TOKEN: JSON.stringify(env.TOKEN)
        },
        base: "/artifacts/"
    }
})
