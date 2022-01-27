import { Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export function SidebarNav() {
  return(
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink nextLinkProps={{ href: '/dashboard' }} icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink nextLinkProps={{ href: '/users' }} icon={RiContactsLine}>Users</NavLink>
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink nextLinkProps={{ href: '/forms' }} icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink nextLinkProps={{ href: '/automation' }} icon={RiGitMergeLine}>Automation</NavLink>
      </NavSection>
    </Stack>
  );
}