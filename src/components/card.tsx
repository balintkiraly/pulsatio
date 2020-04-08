import { Box, Flex } from '@chakra-ui/core';
import React from 'react';

export interface CardProps {
  title: string;
  url: string;
  status: 'ok' | 'warning' | 'error';
}

export const Card = ({ title, url, status }: CardProps) => {
  return (
    <Box maxW="md" borderWidth="1px" rounded="lg" overflow="hidden" bg="white" boxShadow="md">
      <Box p={6}>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box fontSize="xl" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
            {title}
          </Box>
          {status === 'ok' && <Box bg="green.500" rounded="lg" w="2" h="2" />}
          {status === 'warning' && <Box bg="orange.500" rounded="lg" w="2" h="2" />}
          {status === 'error' && <Box bg="red.500" rounded="lg" w="2" h="2" />}
        </Flex>
        <Box color="gray.500">{url}</Box>
      </Box>
    </Box>
  );
};
