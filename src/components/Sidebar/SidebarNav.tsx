import { Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export function SidebarNav() {
  return(
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
  );
}