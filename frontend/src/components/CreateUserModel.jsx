import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Flex, FormControl, FormLabel, Input, Textarea, RadioGroup, Radio, ModalFooter } from "@chakra-ui/react"
import {BiAddToQueue} from 'react-icons/bi'

const CreateUserModel = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>
                <BiAddToQueue size={20} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>My New Friend</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={6}>
                        <Flex alignItems={"center"} gap={4}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input placeholder="Name" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Input placeholder="Software Engineer" />
                            </FormControl>
                        </Flex>
                        <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea resize={"none"} overflowY={"hidden"} placeholder={"He is a Software Engineer working at Google as Full Time."} />
                        </FormControl>
                        <RadioGroup mt={4}>
                            <Flex gap={5}>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Flex>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>Add</Button>
                        <Button onClick={onClose}>CANCEL</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateUserModel