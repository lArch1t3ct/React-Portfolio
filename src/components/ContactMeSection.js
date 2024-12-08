import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner // For the loading icon in Submit button
} from "@chakra-ui/react";

import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe", // The first option element
      comment: "",
    },
    onSubmit: (values) => submit(values),
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .required("Required"),
      email: Yup.string()
                .required("Required")
                .email("Invalid email address"),
      comment: Yup.string()
                  .required("Required")
                  .min(25, "Must be at least 25 characters")
    }),
  });


  useEffect(() => {
    if(response){
      onOpen(response.type, response.message);
      formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={
            (e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }
          }>
            <VStack spacing={4}> 
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}> {/* The first NOT operator is used to convert the string to Boolean and the second one to negate the first NOT Boolean value, thus returning the actual Boolean value. "hello" => !"hello" returns false (hello should be true) => !!"hello" returns true which is the proper Boolean value of the string. */}
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                {/* Some conditional rendering is performed*/}
                {
                  formik.touched.firstName && !!formik.errors.firstName
                  ? (<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>)
                  : null
                }
                
              </FormControl>

              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {
                  formik.touched.email && !!formik.errors.email
                  ? (<FormErrorMessage>{formik.errors.email}</FormErrorMessage>)
                  : null
                }
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {
                  formik.touched.comment && !!formik.errors.comment
                  ? (<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>)
                  : null
                }
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                { isLoading ? (<Spinner size="sm" />) : "Submit" }
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
