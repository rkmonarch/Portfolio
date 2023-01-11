import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const MotionStack = motion(Stack)

export default function WorkCard({ name, desc, link, id }) {
  return (
    <MotionStack minH="200" gap="2" borderBottom="2px" borderColor="gray.700" py="5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Flex
        gap="4"
        flexDir={["column", "row", "row"]}
        alignItems={["start", "center", null]}
      >
        <Heading fontSize={["5xl", "6xl", null]} as="span">
          0{id}
        </Heading>
        <Link href={link} target="_blank">
          <HStack>
            <Heading fontSize={["2xl", "3xl", null]}>{name}</Heading>
            <BsArrowUpRight fontSize="24px" />
          </HStack>
        </Link>
      </Flex>
      <Text color="gray.300" fontSize={["md", null, "lg"]}>
        {desc}
      </Text>
    </MotionStack>
  );
}
