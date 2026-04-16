import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../components/Homepage/Stats";
import NotPageFound from "../Pages/NotPageFound/NotPageFound";

export  const router = createBrowserRouter([
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
