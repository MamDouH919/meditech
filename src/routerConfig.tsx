import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layouts/Layout';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
        ]
      },
      { path: '*', element: <div>not found</div> },
    ],
  },

]);

export default router;