import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Layout from "./Layout"
import { Analytics, Dashboard, Error, Profile, Settings } from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
])

export default () => <RouterProvider router={router} />
