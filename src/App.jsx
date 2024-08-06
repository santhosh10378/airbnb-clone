import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ListingDetail from "./pages/ListingDetail";
import Wishlist from "./pages/Wishlist";
import Trips from "./pages/Trips";
import Messages from "./pages/Messages";
import UserProfile from "./pages/UserProfile";
import MyListings from "./pages/MyListings";
import ProtectedRoute from "./pages/ProtectedRoute";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listings/:id",
        element: <ListingDetail />,
      },
      {
        path: "/account/wishlists",
        element: <ProtectedRoute element={<Wishlist />} />,
      },
      {
        path: "/account/trips",
        element: <ProtectedRoute element={<Trips />} />,
      },
      {
        path: "/account/messages",
        element: <ProtectedRoute element={<Messages />} />,
      },
      {
        path: "/account/profile",
        element: <ProtectedRoute element={<UserProfile />} />,
      },
      {
        path: "/account/listings",
        element: <ProtectedRoute element={<MyListings />} />,
      },
    ],
  },
  { path: "/test", element: <TestPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
