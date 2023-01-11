import { Stack, Heading, Flex, Box, Image, Text  } from "@chakra-ui/react";

function NewHero() {
  return (

    <Flex alignItems="center">
      <Box>
        <Image src="https://bafkreic5j7i5tdz3wbtdtu3kib7iph2jptan2ffent4fxtjbnsw6b3h7ky.ipfs.nftstorage.link/" 
        alt="Portfolio Item" w="500px" h="500px" mr={10} padding={"20"} borderRadius={"full"} objectFit="cover" />
      </Box>
      <Box>
        <Heading fontSize={"xx-large"}>
          HELLO, I AM RAHUL 👋
        </Heading>
        <Heading fontSize={["3rem", "4rem", "6rem"]}>WEB3 & FLUTTER</Heading>
        <Heading fontSize={["3rem", "4rem", "6rem"]}>DEVELOPER</Heading>
      </Box>
    </Flex>
  );
}

export default NewHero;