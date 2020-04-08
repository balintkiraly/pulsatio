import { Box, Flex } from '@chakra-ui/core';
import React from 'react';
import logoWithText from '../assets/logo-with-text.svg';
import { Container } from './container';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex
        bg="white"
        borderBottom="1px"
        borderBottomColor="gray.200"
        mb={2}
        py={2}
        justifyContent="center"
      >
        <Box>
          <img src={logoWithText} alt="logo" />
        </Box>
      </Flex>
      <Container>{children}</Container>
    </Box>
  );
};
