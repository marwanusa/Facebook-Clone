import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout/MainLayout"
import {Videos,Games,Market} from "../pages/inedx"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"

const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomeLayout />,
          },
          {
            path: "videos",
            element: <Videos />
          },
          {
            path: "games",
            element: <Games />
          },
          {
            path: "marketplace",
            element: <Market />
          },
        ]
      }
    ]
  )
  const AppRouter = () => {
    return (
      <RouterProvider router={router} />
    )
  }
  export default AppRouter