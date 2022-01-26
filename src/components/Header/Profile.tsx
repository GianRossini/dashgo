import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean | undefined;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>User Name</Text>
          <Text color="gray.300" fontSize="small">
            user@email.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="User Name" />
    </Flex>
  );
}