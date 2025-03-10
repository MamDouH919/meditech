import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layouts/Layout';
import Home from './Pages/Home';
import ProductsView from './Pages/ProductsView';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/products/:type', element: <ProductsView /> },
        ]
      },
      { path: '*', element: <div>not found</div> },
    ],
  },

]);

export default router;