import { Box, Flex } from '@chakra-ui/core';
import React from 'react';
import { StatusLabel } from './statusLabel';

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
          <StatusLabel status={status} />
        </Flex>
        <Box color="gray.500">{url}</Box>
      </Box>
    </Box>
  );
};
