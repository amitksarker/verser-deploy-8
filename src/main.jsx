import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Listedbooks from './component/Listedbooks/Listedbooks.jsx';
import Pagetoread from './component/Pagetoread/Pagetoread.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import BookDetails from './component/BookDetails/BookDetails.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/listedbook',
        element:<Listedbooks></Listedbooks>,
        loader: () =>  fetch('../public/books.json')
      },
      {
        path:'/pagetoread',
        element:<Pagetoread></Pagetoread>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('../public/books.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
