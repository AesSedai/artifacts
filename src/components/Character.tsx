import { Box, Card, LinearProgress, Skeleton, Stack, Typography } from "@mui/material"
import { useCharactersServiceGetCharacterCharactersNameGet } from "../api/artifacts/queries"
import { characters } from "../assets/characters/images"

interface CharacterProps {
    name: string
}

const normalise = (value: number, min: number, max: number) => ((value - min) * 100) / (max - min)

export const Character = (props: CharacterProps): JSX.Element => {
    const {
        status,
        isFetching,
        data: character
    } = useCharactersServiceGetCharacterCharactersNameGet({ name: props.name })

    if (status === "pending") {
        return (
            <Card sx={{ px: 2, py: 2, minWidth: 150, minHeight: 300 }}>
                <Stack>
                    <Skeleton variant="rectangular" width={115} height={138} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Stack>
            </Card>
        )
    }

    if (status === "error") {
        return <Typography>Error fetching character: {props.name} </Typography>
    }

    if (isFetching) {
        return (
            <Card sx={{ px: 2, py: 2, minWidth: 150, minHeight: 300 }}>
                <Stack>
                    <Skeleton variant="rectangular" width={115} height={138} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Stack>
            </Card>
        )
    }

    return (
        <Card sx={{ px: 2, py: 2 }}>
            <Stack spacing={1}>
                <img src={characters[character.data.skin]} />
                <Typography>
                    {character.data.name} (lv. {character.data.level})
                </Typography>
                <Typography>HP: {character.data.hp}</Typography>
                <LinearProgress
                    sx={{ mt: 1 }}
                    variant="determinate"
                    value={normalise(character.data.xp, 0, character.data.max_xp)}
                />
                <Typography>
                    XP: {character.data.xp} / {character.data.max_xp}
                </Typography>
            </Stack>
        </Card>
    )
}
