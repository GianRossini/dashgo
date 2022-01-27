import Link, { LinkProps as NextLinkProps } from 'next/link';

import { Link as ChakraLink, LinkProps as ChakraLinkProps, Icon, Text } from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

import { IconType } from 'react-icons';

interface NavLinkProps {
  icon: IconType;
  children: React.ReactNode;
  href: string;
  chakraLinkProps?: ChakraLinkProps;
}

export function NavLink({ icon, children, href, chakraLinkProps }: NavLinkProps) {
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...chakraLinkProps}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}