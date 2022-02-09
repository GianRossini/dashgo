/* eslint-disable @next/next/link-passhref */
import { useState } from 'react';

import NextLink from 'next/link';

import { getUsers, useUsers } from '../../services/hooks/useUsers';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';

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
  Checkbox,
  useBreakpointValue,
  Spinner,
  Link
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

export default function UserList({ users }) {
  const [ page, setPage ] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users,
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  }

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
            <Heading size="lg" fontWeight="normal">
              Users

              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                New
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Failed to load user data</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th w="8" px={["4", "4", "6"]} color="gray.300">
                      <Checkbox colorScheme="pink"/>
                    </Th>
                    <Th>User</Th>
                    {isWideVersion && <Th>Register date</Th>}
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink"/>
                      </Td>
                      <Td>
                        <Box>
                          <NextLink href={`/users/${user.id}`} passHref>
                            <Link color="purple.500" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                          </NextLink>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <>
                          <Td>{user.createdAt}</Td>
                          <Td>
                            <Button as="a" size="xs" fontSize="xs" colorScheme="pink" leftIcon={<Icon as={RiPencilLine} />} variant="outline">
                              Edit
                            </Button>
                          </Td>
                        </>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1);

  return {
    props: {
      users,
    }
  }
}