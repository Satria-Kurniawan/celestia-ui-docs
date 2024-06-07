import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import LandingPage from "../pages/LandingPage";
import DocsPage from "../pages/Docs/DocsPage";
import RootLayout from "../layouts/RootLayout";
import DocsLayout from "../layouts/DocsLayout";
import InstallationPage from "../pages/Docs/GettingStarted/InstallationPage";
import UpgradeGuidePage from "../pages/Docs/GettingStarted/UpgradeGuidePage";
import ExampleButtonPage from "../pages/Docs/ExampleComponents/ExampleButtonPage";
import ExampleCardPage from "../pages/Docs/ExampleComponents/ExampleCardPage";
import ExampleInputPage from "../pages/Docs/ExampleComponents/ExampleInputPage";
import ExampleNavbarPage from "../pages/Docs/ExampleComponents/ExampleNavbarPage";
import ExampleHamburgerMenuPage from "../pages/Docs/ExampleComponents/ExampleHamburgerMenuPage";
import ErrorPage from "../pages/ErrorPage";
import ExampleLoaderPage from "../pages/Docs/ExampleComponents/ExampleLoaderPage";
import ComponentsPage from "../pages/Docs/ComponentsPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DocsLayout />,
        children: [
          { path: "/docs", element: <DocsPage /> },
          {
            path: "/docs/getting-started/installation",
            element: <InstallationPage />,
          },
          {
            path: "/docs/getting-started/upgrade-guide",
            element: <UpgradeGuidePage />,
          },
          { path: "/docs/components", element: <ComponentsPage /> },
          { path: "/docs/components/button", element: <ExampleButtonPage /> },
          { path: "/docs/components/card", element: <ExampleCardPage /> },
          { path: "/docs/components/input", element: <ExampleInputPage /> },
          { path: "/docs/components/navbar", element: <ExampleNavbarPage /> },
          {
            path: "/docs/components/hamburger",
            element: <ExampleHamburgerMenuPage />,
          },
          { path: "/docs/components/loader", element: <ExampleLoaderPage /> },
        ],
      },
    ],
  },
]);

export default function RouterProvider() {
  return (
    <AnimatePresence>
      <React.Fragment key="toaster">
        <Toaster />
      </React.Fragment>
      <React.Fragment key="router">
        <ReactRouterProvider router={router} />
      </React.Fragment>
    </AnimatePresence>
  );
}
