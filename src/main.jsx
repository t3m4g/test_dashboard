import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Operation from './pages/Operation.jsx'
import Transfert from './pages/Transfert.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import OperationTest from './pages/OperationTest.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <PageNotFound />
  },
  {
    path: '/operation',
    element: <Operation />,
    errorElement: <PageNotFound />
  },
  {
    path: '/transfert',
    element: <Transfert />,
    errorElement: <PageNotFound />
  },
  {
    path: '/operation/test',
    element: <OperationTest />
  },
  // {
  //   path: '/operation',
  //   element: <Operation />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
