import {
  Box,
  IconButton,
  Container,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import Menu from "./Menu";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      w="full"
      zIndex="10"
      // backdropFilter={"blur(5px)"}
      bg={isOpen ? "gray.800" : "gray.800"}
    >
      <Container
        as={Flex}
        maxW="container.2xl"
        justify="space-between"
        px="10"
        py="2"
      >
        <Heading>Rahul</Heading>
        <IconButton
          aria-label="Menu"
          variant="ghost"
          size="lg"
          isRound={true}  
          _focus={{ border: "none" }}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          onClick={isOpen ? onClose : onOpen}
          icon={
            isOpen ? (
              <RiCloseFill fontSize={"30px"} />
            ) : (
              <RiMenu4Fill fontSize={"30px"} />
            )
          }
        />
      </Container>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
