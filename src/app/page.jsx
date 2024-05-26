"use client"
import React ,  { useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Page;
