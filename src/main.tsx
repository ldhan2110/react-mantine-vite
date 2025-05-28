import '@mantine/core/styles.css'; //import Mantine V7 styles needed by MRT
import '@mantine/dates/styles.css'; //if using mantine date picker features
import '@mantine/notifications/styles.css';
import './global.styles.css'; //import custom styles
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { CookiesProvider } from 'react-cookie';
import { DatesProvider } from '@mantine/dates';
import { AppDateProvider } from './constants';
import { routes } from './routes';
import { DemoPage } from './pages/DemoPage';
import { NotFoundPage } from './pages/error/NotFoundPage/NotFoundPage';

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <DatesProvider settings={AppDateProvider}>
            <Routes>
              {routes.map((route, index) => {
                if (route.links && route.links.length > 0) {
                  return route.links.map((subRoute, subIndex) => (
                    <Route
                      key={`${index}-${subIndex}`}
                      path={subRoute.link || '/error/404'}
                      element={subRoute.page || <DemoPage />}
                    />
                  ));
                }
                return <Route key={index} path={route.link || '/error/404'} element={route.page || <DemoPage />} />;
              })}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Notifications />
          </DatesProvider>
        </MantineProvider>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
);
