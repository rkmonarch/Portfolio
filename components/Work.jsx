import { Box, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import WorkCard from "./WorkCard";
import WORK from "../work.json";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

export default function Work() {
  return (
    <Container maxW="container.xl" minH="100vh" justifyContent="center">
      <MotionHeading
        fontSize={["6xl", "6xl", "9xl"]}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Work
      </MotionHeading>
      <Stack mt="24">
        {WORK.map((work) => {
          return (
            <WorkCard
              key={work.id}
              id={work.id}
              name={work.name}
              desc={work.desc}
              link={work.link}
            />
          );
        })}
      </Stack>
    </Container>
  );
}
