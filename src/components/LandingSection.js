import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* In the screen there is a gap between groups of elements:
          1. The Avatar and the little heading below it
          2. The bio text

        Thus, in order to achieve the proper spacing, two additional
        VStack elements were used.
          - The first wraps the Avatar and small Heading components
          - The latter wraps the bio text, the two Heading components.
        
        Finally, the "spacing" prop was used on the parent VStack component
        with the aim of adding the props spacing, 8px.
    */}
    <VStack spacing={8}>
      
      <VStack>
        <Avatar size="2xl" name="Pete" src="https://i.pravatar.cc/150?img=7"/>
        <Heading size="sm">{greeting}</Heading>
      </VStack>

      <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
