import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/public/Landing';
import Pricing from './pages/public/Pricing';
import About from './pages/public/About';
import Blog from './pages/public/Blog';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Projects from './pages/dashboard/Projects';
import CreateProject from './pages/dashboard/CreateProject';
import PaywallConfig from './pages/dashboard/PaywallConfig';
import AccessRules from './pages/dashboard/AccessRules';
import Transactions from './pages/dashboard/Transactions';
import Payouts from './pages/dashboard/Payouts';
import Billing from './pages/dashboard/Billing';
import Analytics from './pages/dashboard/Analytics';
import RequestLogs from './pages/dashboard/RequestLogs';
import Integration from './pages/dashboard/Integration';
import Webhooks from './pages/dashboard/Webhooks';
import ApiKeys from './pages/dashboard/ApiKeys';
import Settings from './pages/dashboard/Settings';
import Team from './pages/dashboard/Team';
import Support from './pages/dashboard/Support';
import SystemStatus from './pages/dashboard/SystemStatus';
import PaywallScreen from './pages/paywall/PaywallScreen';
import PaymentSuccess from './pages/paywall/PaymentSuccess';
import SessionExpired from './pages/paywall/SessionExpired';

export const router = createBrowserRouter([
  // Public Routes
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  
  // Auth Routes
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },

  // Dashboard Routes
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Overview />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'projects/new',
        element: <CreateProject />,
      },
      {
        path: 'projects/:id/paywall',
        element: <PaywallConfig />,
      },
      {
        path: 'projects/:id/access',
        element: <AccessRules />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'payouts',
        element: <Payouts />,
      },
      {
        path: 'billing',
        element: <Billing />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'logs',
        element: <RequestLogs />,
      },
      {
        path: 'integration',
        element: <Integration />,
      },
      {
        path: 'webhooks',
        element: <Webhooks />,
      },
      {
        path: 'api-keys',
        element: <ApiKeys />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'support',
        element: <Support />,
      },
      {
        path: 'system-status',
        element: <SystemStatus />,
      },
    ],
  },

  // Paywall Routes
  {
    path: '/pay/:projectId',
    element: <PaywallScreen />,
  },
  {
    path: '/pay/:projectId/success',
    element: <PaymentSuccess />,
  },
  {
    path: '/pay/:projectId/expired',
    element: <SessionExpired />,
  },
]);