import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModel from './CreateUserModel';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW={"900px"}>
            <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
                <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
                    {/*Left Flex*/}
                    <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base: "none", sm: "flex"}}>
                        <img src='/react.png' alt='react-logo' width={50} height={50} />
                        <Text fontSize={"40px"}>+</Text>
                        <img src='/python.png' alt='python-logo' width={50} height={40} />
                        <Text fontSize={"40px"}>=</Text>
                        <img src='/explode.png' alt='explode-head' width={45} height={45} />
                    </Flex>
                    {/*Right Flex*/}
                    <Flex gap={3} align={"center"}>
                        <Text fontSize={"lg"} fontWeight={500} display={{base: "none", md: "block"}}>
                            BFFShip 🔥
                        </Text>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                        </Button>
                        <CreateUserModel />
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )
}

export default Navbar