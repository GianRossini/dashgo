import { Box, Stack } from '@chakra-ui/react';

import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

import { RiInputMethodLine, RiGitMergeLine, RiDashboardLine, RiContactsLine } from 'react-icons/ri';

export function Sidebar() {
  return(
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GENERAL">
          <NavLink nextLinkProps={{ href: '/' }} icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink nextLinkProps={{ href: '/' }} icon={RiContactsLine}>Users</NavLink>
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink nextLinkProps={{ href: '/' }} icon={RiInputMethodLine}>Forms</NavLink>
          <NavLink nextLinkProps={{ href: '/' }} icon={RiGitMergeLine}>Automation</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}