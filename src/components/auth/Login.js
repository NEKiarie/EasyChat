import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../../lib/routes";

export default function Login() {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>
        <form onSubmit={() => {}}>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Email</FormLabel>
            <input type="email" placeholder="user@email.com" />
            <FormErrorMessage>This is an Error message</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Password</FormLabel>
            <input type="password" placeholder="password123" />
            <FormErrorMessage>This is an Error message</FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="blue"
            size="md"
            w="full"
            isLoading={true}
            loadingText="Logging In"
          >
            Log In
          </Button>
        </form>

        <Text fontSize="xlg" align="center" mt="6">
          Don't have an Account? {""}
          <Link
           as={RouterLink}
            to={REGISTER}
            color="blue.600"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "blue.100" }}
          >
            Register
          </Link> {""} Instead!
        </Text>
      </Box>
    </Center>
  );
}
