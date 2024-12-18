import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import Error from './Components/Error.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import ListedHeart from './Components/ListedHeart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",
        element: <Home />, 
      },
      { path: "/dashboard",
        element: <ListedHeart />,
        loader: () => fetch('/AllProducts.json')
      },
      { path: "/statistics",
        element: <Statistics />,
      },
      { path: "/details/:product_id/",
        element: <ProductDetails />,
        loader: () => fetch('/AllProducts.json')
      },
    ],
  },
  { path: "*",
    element: <Error />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
