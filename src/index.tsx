import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import {
    // unstable_createMuiStrictModeTheme as createMuiTheme,
    createTheme,
    ThemeProvider
} from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./index.css"
import axios from "axios"
import { OpenAPI as OpenAPIConfig } from "./api/artifacts/requests/core/OpenAPI"

OpenAPIConfig.BASE = "https://api.artifactsmmo.com"
OpenAPIConfig.HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.API_TOKEN}`
}

export const muiCache = createCache({
    key: "mui",
    prepend: true
})

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: (failureCount, error): boolean => {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status != null && error.response.status >= 400 && error.response.status < 500) {
                        // don't retry on 4xx errors
                        return false
                    }
                } else {
                    return failureCount < 3
                    // Just a stock error
                }
                return failureCount < 3
            }
        }
    }
})

createRoot(document.getElementById("root") as HTMLElement).render(
    <CacheProvider value={muiCache}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <App />
                {import.meta.env.DEV ? <ReactQueryDevtools /> : null}
            </QueryClientProvider>
        </ThemeProvider>
    </CacheProvider>
)
