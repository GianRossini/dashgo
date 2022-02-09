import { useRouter } from 'next/router';
import Link from 'next/link';

import { SubmitHandler, useForm } from 'react-hook-form';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useMutation } from 'react-query';

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

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  password_confirmation: yup.string().oneOf([yup.ref('password')]),
});

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    });

    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values);

    router.push('/users');
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

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser({ name: '', email: '', password: '', password_confirmation: '' }))}
        >
          <Heading size="lg" fontWeight="normal">Create user</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input
                label="Name"
                error={errors.name}
                {...register('name')}
              />
              
              <Input
                type="email"
                label="Email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input
                type="password"
                label="Password"
                error={errors.password}
                {...register('password')}
              />

              <Input
                type="password"
                label="Password confirmation"
                error={errors.password_confirmation}
                {...register('passwor_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancel</Button >
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}