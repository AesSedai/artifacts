import { Box } from "@mui/material"
import { CharacterBar } from "./components/CharacterBar"

export const App = (): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CharacterBar />
        </Box>
    )
}
