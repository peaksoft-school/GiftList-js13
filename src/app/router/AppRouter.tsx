import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BaseLayout from "../../pages/components/Baselayout";
import Courses from "../../pages/components/Courses";
import Material from "../../pages/components/Material";
import Anouncements from "../../pages/components/Anouncements";
import Students, { All, MyGroup } from "../../pages/components/Students";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { index: true, element: <Navigate to={"courses/material"} /> },
        {
          path: "courses",
          element: <Courses />,
          children: [
            { index: true, element: <Navigate to={"material"} /> },

            {
              path: "material",
              element: <Material />,
            },
            {
              path: "students",
              element: <Students />,
              children: [
                { index: true, element: <Navigate to="all" /> },
                { path: "all", element: <All /> },
                { path: "myGroup", element: <MyGroup /> },
              ],
            },
          ],
        },
        {
          path: "anouncements",
          element: <Anouncements />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
