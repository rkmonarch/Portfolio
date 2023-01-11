import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const getletter = (word) => {
  return word.split("").map((letter, index) => (
    <MotionBox
      key={index}
      color={"white"}
      display={"inline-block"}
      variants={item}
    >
      {letter}
    </MotionBox>
  ));
};

function Hero() {
  return (
    <MotionFlex
      minH={"100vh"}
      flexDir={"column"}
      justifyContent={["center", "center", "space-evenly"]}
      alignItems={["center"]}
      maxW="container.2xl"
    >
      <MotionHeading
        fontSize={["5xl", "7xl", "8xl", "9xl"]}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {getletter("Hello")}
      </MotionHeading>
      <MotionHeading
        fontSize={["5xl", "7xl", "8xl", "9xl"]}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {getletter("I")} {getletter("am")} {getletter("Rahul")}
      </MotionHeading>
      <MotionHeading
        fontSize={["5xl", "7xl", "8xl", "9xl"]}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {getletter("Developer")}
      </MotionHeading>
    </MotionFlex>
  );
}

export default Hero;
