import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
// components
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      { path: 'terms', element: <ComingSoonPage /> },
      { path: 'privacy-policy', element: <ComingSoonPage /> },
    ],
  },
];
