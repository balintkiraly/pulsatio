import { Box, Flex } from '@chakra-ui/core';
import React from 'react';
import './pulse.css';

export interface CardProps {
  title: string;
  url: string;
  status: 'ok' | 'warning' | 'error';
}

export const Card = ({ title, url, status }: CardProps) => {
  return (
    <Box maxW="md" borderWidth="1px" rounded="md" overflow="hidden" bg="white" boxShadow="xs">
      <Box p={6}>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box fontSize="xl" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
            {title}
          </Box>
          {status === 'ok' && <Box className="pulse" bg="green.500" rounded="lg" w="2" h="2" />}
          {status === 'warning' && (
            <Box className="pulse" bg="yellow.500" rounded="lg" w="2" h="2" />
          )}
          {status === 'error' && <Box className="pulse" bg="red.500" rounded="lg" w="2" h="2" />}
        </Flex>
        <Box color="gray.500">{url}</Box>
      </Box>
    </Box>
  );
};
