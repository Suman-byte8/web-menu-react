import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { ROUTES } from './data/site.js'
import BarPage from './pages/BarPage.jsx'
import DishPage from './pages/DishPage.jsx'
import HomePage from './pages/HomePage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import RoomsPage from './pages/RoomsPage.jsx'
import DockLayout from './shared/DockLayout.jsx'
import RootLayout from './shared/RootLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        // Pages with the bottom navigation dock
        element: <DockLayout />,
        children: [
          { path: ROUTES.home, element: <HomePage /> },
          { path: ROUTES.restaurant, element: <RestaurantPage /> },
          { path: ROUTES.bar, element: <BarPage /> },
          { path: ROUTES.rooms, element: <RoomsPage /> },
        ],
      },
      // Dish detail has its own minimal header and no dock
      { path: ROUTES.dish, element: <DishPage /> },
      // Unknown paths go back to the home page.
      { path: '*', element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
