import { Button, Center, Text, useColorMode } from "@chakra-ui/react";

import {MoonIcon, SunIcon} from "@chakra-ui/icons"

const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Center>
        <Button 
        onClick={() => toggleColorMode()}
        position="relative"
        top=" 1px"
        variant='solid'
        marginTop="10px"
        alignContent="center"
        mx="20" mb="5" fontSize="2xl"
        >
           <Text colorScheme="whatsapp"  size="xs">
                {colorMode === "dark" ? "Light" : "Dark"} mode
            </Text>  
        </Button>
        </Center>
    );
};

export default ToggleColorMode;