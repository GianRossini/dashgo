import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>User Name</Text>
        <Text color="gray.300" fontSize="small">
          user@email.com
        </Text>
      </Box>

      <Avatar size="md" name="User Name" />
    </Flex>
  );
}