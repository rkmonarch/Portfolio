import { Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Html,
  Css,
  Js,
  Reactjs,
  Nextjs,
  Nodejs,
  Mongodb,
  Firebase,
  Flutter,
} from "./svg";


const Skill = [
  { name: "Flutter", icon: <Flutter boxSize={["10", "12", "16"]} /> },
  { name: "Html", icon: <Html boxSize={["10", "12", "16"]} /> },
  { name: "Css", icon: <Css boxSize={["10", "12", "16"]} /> },
  { name: "Js", icon: <Js boxSize={["10", "12", "16"]} /> },
  { name: "ReactJs", icon: <Reactjs boxSize={["10", "12", "16"]} /> },
  { name: "NextJS", icon: <Nextjs boxSize={["10", "12", "16"]} /> },
  { name: "NodeJs", icon: <Nodejs boxSize={["10", "12", "16"]} /> },
  { name: "MongoDB", icon: <Mongodb boxSize={["10", "12", "16"]} /> },
  { name: "Firebase", icon: <Firebase boxSize={["10", "12", "16"]} /> },
];

const MotionHeading = motion(Heading);

export default function Skills() {
  return (
    <Container
      as={Flex}
      flexDir={"column"}
      justifyContent="center"
      maxW="container.xl"
      mb={64}
    >
      <MotionHeading
        fontSize={["6xl", "6xl", "9xl"]}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Skills
      </MotionHeading>
      <Flex flexDir="row" gap="8" flexWrap="wrap" mt="24">
        {Skill.map((skill) => {
          return skill.icon;
        })}
      </Flex>
    </Container>
  );
}
