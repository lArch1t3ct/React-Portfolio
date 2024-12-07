import { Heading, HStack, Image, Text, Link, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return(
    // I didn't used the VStack component because by default it place everything in the center
    // Instead, I used the Stack component and applied the proper CSS rules on the target
    // components to match the style provided.
    <Stack bg="white"
           rounded="lg" 
           color="black"
    >
      <Image src={imageSrc} rounded="lg" />
      <Heading size="sm" paddingLeft={3}>{title}</Heading>
      <Text fontSize="sm" paddingLeft={3} paddingRight={3} color="gray">{description}</Text>
      <Link href="#">
        <HStack marginLeft={3} marginBottom={3}>
          <Text fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Link>
    </Stack>
  );
};

export default Card;
