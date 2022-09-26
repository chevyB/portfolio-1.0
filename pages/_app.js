import Head from 'next/head';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Chevy Banico Portfolio 1.0</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Chevy Banico Portfolio 1.0" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: 'Verdana, sans-serif',
            fontFamilyMonospace: 'Monaco, Courier, monospace',
            headings: { fontFamily: 'Greycliff CF, sans-serif' },
            focusRing: 'never',
            cursorType: 'pointer',
            headings: {
              fontFamily: 'Roboto, sans-serif',
            },
            loader: 'bars',
            defaultGradient: {
              from: 'orange',
              to: 'red',
              deg: 45,
            },
            dir: 'rtl',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider></>
  )
}

export default MyApp
