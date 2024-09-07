import { Box, Card, LinearProgress, Skeleton, Stack, Typography } from "@mui/material"
import { useCharactersServiceGetCharacterCharactersNameGet } from "../api/artifacts/queries"
import { characters } from "../assets/characters/images"
import { Cooking, Fishing, GearCrafting, JewelryCrafting, Mining, WeaponsCrafting, Woodcutting } from "./Icons"

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
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                <Stack sx={{ ml: 2 }}>
                    <Box sx={{ display: "flex" }}>
                        <Mining />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.mining_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(character.data.mining_xp, 0, character.data.mining_max_xp)}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Woodcutting />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.woodcutting_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(character.data.woodcutting_xp, 0, character.data.woodcutting_max_xp)}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Fishing />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.fishing_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(character.data.fishing_xp, 0, character.data.fishing_max_xp)}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <WeaponsCrafting />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.weaponcrafting_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(
                                    character.data.weaponcrafting_xp,
                                    0,
                                    character.data.weaponcrafting_max_xp
                                )}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <GearCrafting />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.gearcrafting_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(character.data.gearcrafting_xp, 0, character.data.gearcrafting_max_xp)}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <JewelryCrafting />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.jewelrycrafting_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(
                                    character.data.jewelrycrafting_xp,
                                    0,
                                    character.data.jewelrycrafting_max_xp
                                )}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Cooking />
                        <Box sx={{ display: "flex", minWidth: 200, alignItems: "center", ml: 1 }}>
                            <Typography>{character.data.woodcutting_level}</Typography>
                            <LinearProgress
                                sx={{ ml: 1, display: "flex", flex: "1 1 auto" }}
                                variant="determinate"
                                value={normalise(character.data.cooking_xp, 0, character.data.cooking_max_xp)}
                            />
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Card>
    )
}
