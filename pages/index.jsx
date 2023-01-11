import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import NewHero from "../components/NewHero";
import NewNavbar from "../components/NewNavbar";

export default function Home() {
  return (
    <>
      <NewHero />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}
