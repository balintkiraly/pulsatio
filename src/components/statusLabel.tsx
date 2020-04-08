import { Box } from '@chakra-ui/core';
import React from 'react';
import './pulse.css';

export interface StatusLabelProps {
  status: 'ok' | 'warning' | 'error';
}

export const StatusLabel = ({ status }: StatusLabelProps) => {
  const color = status === 'ok' ? 'green' : status === 'warning' ? 'yellow' : 'red';
  return <Box className="pulse" bg={`${color}.500`} rounded="lg" w="2" h="2" />;
};
