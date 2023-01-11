import { Box, Portal, Stack, Link, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const List = ["Home", "About", "Skills", "Work", "Contact"];

const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
      }}
      rounded={"md"}
      href={"#"}
    >
      <Heading fontSize={["5xl", "6xl", "7xl"]}>{children}</Heading>
    </Link>
  );
};

export default function Menu({ isOpen, onClose }) {
  return (
    <MotionBox
      bg="gray.800"
      pos="fixed"
      w="full"
      h="full"
      display={isOpen ? "block" : "none"}
    >
      <Stack fontSize="5xl" alignItems="center" m="10">
        {List.map((link) => {
          return <NavLink key={link}>{link}</NavLink>;
        })}
      </Stack>
    </MotionBox>
  );
}
