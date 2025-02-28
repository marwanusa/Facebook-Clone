import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { Videos, Games, Market } from "../pages/inedx"; // تأكد أن الملف اسمه index.jsx أو index.js
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeLayout /> },
      { path: "videos", element: <Videos /> },
      { path: "games", element: <Games /> },
      { path: "marketplace", element: <Market /> },
    ],
  },
]);

const AppRouter = () => {
  const [allowed, setAllowed] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setAllowed(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!allowed) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Please use a device with a screen width of at least 990px
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

export default AppRouter;
