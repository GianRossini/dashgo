import Link, { LinkProps as NextLinkProps } from 'next/link';

import { Link as ChakraLink, LinkProps as ChakraLinkProps, Icon, Text } from '@chakra-ui/react';

import { IconType } from 'react-icons';

interface NavLinkProps {
  icon: IconType,
  children: React.ReactNode,
  nextLinkProps: NextLinkProps,
  chakraLinkProps?: ChakraLinkProps,
}

export function NavLink({ icon, children, nextLinkProps, chakraLinkProps }: NavLinkProps) {
  return(
    <Link {...nextLinkProps}>
      <a>
        <ChakraLink display="flex" align="center" {...chakraLinkProps}>
          <Icon as={icon} fontSize="20" />
          <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
      </a>
    </Link>
  );
}