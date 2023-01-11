import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FiBook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <Box py="2" mt="28">
      <Container
        maxW="container.xl"
        as={Flex}
        gap="2"
        flexDir={["column", null, "row"]}
        justify={["center", null, "space-between"]}
        align={["center", null, "space-between"]}
      >
        <Text>Made With ❤️ By Rahul</Text>
        <HStack>
          <IconButton
            variant="ghost"
            icon={<FiGithub />}
            rounded="full"
            aria-label="Github"
            onClick={() =>
              window.open("https://github.com/rkmonarch", "_blank")
            }
          />
          <IconButton
            variant="ghost"
            icon={<FiLinkedin />}
            rounded="full"
            aria-label="Linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/rahul-kulkarni-398738218/", "_blank")
            }
          />

          <IconButton
            variant="ghost"
            icon={<FiTwitter />}
            rounded="full"
            aria-label="Twitter"
            onClick={() =>
              window.open("https://twitter.com/0xrahulk", "_blank")
            }
          />

          <IconButton
            variant="ghost"
            icon={<FiBook />}
            rounded="full"
            aria-label="Resume"
            onClick={() =>
              window.open("https://bafkreihhmr7iii7uw7f4vuhg3r6nv2p3b2w7uau4sqzwm5wepvakks4mry.ipfs.nftstorage.link/", "_blank")
            }
          />
        </HStack>
      </Container>
    </Box>
  );
}
