import {
  Stack,
  Container,
  Heading,
  VStack,
  Text,
  HStack,
  Box,
  Button,
  Image
} from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import "../styles/Home.css";
import img from '../assets/pngwing.com (1).png';

function Home() {
  return (
    <Container
      maxW={"full"}
      minH={"100vh"}
      p={4}
      sx={{
        color: "white",
        borderRadius: "0px",
        background: "#09191F",
        boxShadow: "inset 7px -7px 15px #040a0c, inset -7px 7px 15px #0e2832",
      }}
    >
      <Stack
        direction={["column", "column", "row"]} 
        justifyContent={"center"}
        alignItems={"center"}
        spacing={8}
        height="80vh"
      >
        <VStack
          justifyContent={"center"}
          alignItems={"flex-start"}
          spacing={4}
          textAlign={"left"}
          width={["full", "full", "50%"]} 
        >
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            textTransform={"uppercase"}
          >
            Web
          </Heading>
          <Heading
            fontSize={["4xl", "5xl", "6xl"]}
            textTransform={"uppercase"}
          >
            Design &
          </Heading>
          <Heading
            fontSize={["4xl", "6xl", "7xl"]}
            textTransform={"uppercase"}
          >
            Development
          </Heading>
          <Box textAlign={"left"} width={"full"}>
            <Text fontSize={["md", "lg", "xl"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              harum consectetur necessitatibus expedita asperiores quis, fuga
              saepe quae natus qui culpa accusamus nihil maxime dolorum. Facere
              id provident quia sint.
            </Text>
            <HStack zIndex={100} spacing={4} mt={8} p={5}>
              <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
                Email
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                Call us
              </Button>
            </HStack>
          </Box>
        </VStack>
        <Image
          src={img}
          zIndex={1}
          objectFit="cover"
          style={{width:'50%'}}
          height={["auto", "50vh"]}
        />
      </Stack>
    </Container>
  );
}

export default Home;
