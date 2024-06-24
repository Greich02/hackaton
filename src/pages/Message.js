import MessageAppBar from "../components/MessageAppBar";
import { Box, Stack, Typography } from '@mui/material'
import { blue } from "@mui/material/colors";
import MessageInput from "../components/MessageInput";

export default function Message(){
    return(
        <div>
            <MessageAppBar/>
                <Box container>
                <Stack sx={{ alignItems: 'flex-start' }}>
                    <Box sx={{
                        maxWidth: 300,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        backgroundColor: "grey.100",
                        ml: 1.5,
                        borderRadius: 1,
                        boxShadow: 1,
                        mb: 2,
                        position: "relative"  // Permet de positionner le Typography de l'heure correctement
                            }}>
                        <Box >  {/* Ajustement pour prendre en compte la largeur du Typography */}
                            <Typography sx={{ paddingY: 1, pl: 1 }} variant="body1">
                                Voici le premier message. Et si je l'allonge un peu
                            </Typography>
                        </Box>
                            <Typography variant="subtitle2" sx={{
                                fontSize: "0.75rem",
                                pr: 0.5,
                                alignSelf: 'flex-end'
                            }}>
                                16:02
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack sx={{ alignItems: 'flex-end' }}>
                        <Box sx={{ maxWidth: 300,
                            display: "flex",
                            alignItems: "flex-end",
                            bgcolor: blue[200],
                            mr: 1.5,
                            borderRadius: 1,
                            boxShadow: 1 }}>
                            <Box>
                                <Typography sx={{ paddingY: 1, pl: 1 }} variant="body1">
                                    Voici le premier message. Voyons comment il se comporte s'il est plus long
                                </Typography>
                            </Box>
                            <Typography variant="subtitle2" sx={{ display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                                fontSize: "0.75rem",
                                pr: 0.5 }}>
                                16:02
                            </Typography>
                        </Box>
                    </Stack>
                    <MessageInput/>
                </Box>
        </div>
    )
}