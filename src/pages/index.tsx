import { CSSReset, SimpleGrid, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { Card } from '../components/card';
import { Layout } from '../components/layout';

type SiteType = {
  title: string;
  url: string;
  status: 'ok' | 'warning' | 'error';
};
const data: SiteType[] = [
  {
    title: 'Google',
    url: 'https://google.com',
    status: 'ok',
  },
  {
    title: 'Bing',
    url: 'https://bing.com',
    status: 'warning',
  },
  {
    title: 'GitHub',
    url: 'https://github.com',
    status: 'ok',
  },
  {
    title: 'GitLab',
    url: 'https://gitlab.com',
    status: 'error',
  },
];

export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {data.map((site: SiteType, index: number) => (
            <Card key={index} {...site} />
          ))}
        </SimpleGrid>
      </Layout>
    </ThemeProvider>
  );
};
