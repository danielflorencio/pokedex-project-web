import { Box, Divider, Text } from "@chakra-ui/react";

export default function Characteristics(){
    return(
        <Box>
            <Text>About</Text>
            <Box>
                <Box>
                    Weight
                </Box>
                <Divider/>
                <Box>
                    Height
                </Box>
                <Divider/>
                <Box>
                    Moves
                </Box>
            </Box>
        </Box>
    )
}