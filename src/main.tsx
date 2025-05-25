import '@mantine/core/styles.css'; //import Mantine V7 styles needed by MRT
import '@mantine/dates/styles.css'; //if using mantine date picker features
import '@mantine/notifications/styles.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { CookiesProvider } from 'react-cookie';
import { DatesProvider } from '@mantine/dates';
import { AppDateProvider } from './constants';
import App from './App';

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <DatesProvider settings={AppDateProvider}>
            <Notifications />
            <App />
          </DatesProvider>
        </MantineProvider>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
);
