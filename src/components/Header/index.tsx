import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';

import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      align="center"
      mx="auto"
      mt="4"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}