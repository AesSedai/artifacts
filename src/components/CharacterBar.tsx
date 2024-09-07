import { Box } from "@mui/material"
import { Character } from "./Character"

const characterNames = ["AesSedai"]

export const CharacterBar = (): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            {characterNames.map((character) => (
                <Character name={character} key={character}></Character>
            ))}
        </Box>
    )
}
