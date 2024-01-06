import React from "react";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      textColor="black"
      rounded="3xl"
      padding="4"
      boxShadow="md"
    >
      <VStack spacing="4">
        <Image src={imageSrc} alt={title} rounded="lg" maxH="200px" />
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Box
          as="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          color="blue.500"
        >
          <Text fontWeight="bold">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
