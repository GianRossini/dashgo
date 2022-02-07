import { useQuery } from '@chakra-ui/react';

import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<User[]>('users');

  const users = data?.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  });

  return users;
}

export function useUsers() {
  return useQuery('users', getUsers);
}