import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import NotPageFound from "../Pages/NotPageFound/NotPageFound";
import Stats from "../Pages/Dashboard/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <NotPageFound />,
  },
]);
