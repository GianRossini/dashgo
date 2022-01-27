import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

export default function CreateUser() {
  return(
    <Box>
      <Header />

      <Flex
        w="100%"
        maxW={1480}
        mx="auto"
        my="6"
        px="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Create user</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input name="name" label="Name" />
              <Input name="email" type="email" label="Email" />
            </SimpleGrid>
            
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input name="password" type="password" label="Password" />
              <Input name="passwor_confirmation" type="password" label="Password confirmation" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}