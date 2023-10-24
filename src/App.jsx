import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './features/menu/Menu';
//import { Busqueda } from "./features/menu/Busqueda";
import Cart from './features/cart/Cart';
import { AppLayout } from './ui/AppLayout';
import Home from './ui/Home';
import { CreateOrder, action as acciones } from './features/order/CreateOrder';
import { Order } from './features/order/Order';
import { loader as menuLoader } from './features/menu/Menu';
import NotFound from './ui/Error';
import { orderLoader } from './features/loaders/orderLoader';
import { ErrorPrueba } from './ui/ErrorPrueba';

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,

    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <NotFound />,
      },

      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        // errorElement: <NotFound />,
        action: acciones,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <NotFound />,
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={route}></RouterProvider>;
};
