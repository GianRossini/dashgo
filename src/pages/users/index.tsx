/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox
} from '@chakra-ui/react';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';

export default function UserList() {
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

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>

            <Link href="/">
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                New
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th w="8" px="6" color="gray.300">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>User</Th>
                <Th>Register date</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.300">user@email.com</Text>
                  </Box>
                </Td>
                <Td>4th of April, 2021</Td>
                <Td>
                  <Button as="a" size="xs" fontSize="xs" colorScheme="pink" leftIcon={<Icon as={RiPencilLine} />} variant="outline">
                    Edit
                  </Button>
                </Td>
              </Tr>
              
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.300">user@email.com</Text>
                  </Box>
                </Td>
                <Td>4th of April, 2021</Td>
                <Td>
                  <Button as="a" size="xs" fontSize="xs" colorScheme="pink" leftIcon={<Icon as={RiPencilLine} />} variant="outline">
                    Edit
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.300">user@email.com</Text>
                  </Box>
                </Td>
                <Td>4th of April, 2021</Td>
                <Td>
                  <Button as="a" size="xs" fontSize="xs" colorScheme="pink" leftIcon={<Icon as={RiPencilLine} />} variant="outline">
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}