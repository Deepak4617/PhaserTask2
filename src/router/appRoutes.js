import { useRoutes } from 'react-router-dom';
import AdminPage from '../pages/adminPage';
import GuestPage from '../pages/guestPage';

const AppRoute = () => {
  let routes = useRoutes([
    { path: '/admin', element: <AdminPage /> },
    { path: '/', element: <GuestPage /> },
  ]);

  return routes;
};

export default AppRoute;
