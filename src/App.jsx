import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { ROUTES } from './data/site.js'
import { transitionLoader } from './lib/transition.js'
import BarPage from './pages/BarPage.jsx'
import DishPage from './pages/DishPage.jsx'
import HomePage from './pages/HomePage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import RoomsPage from './pages/RoomsPage.jsx'
import DockLayout from './shared/DockLayout.jsx'
import RootLayout from './shared/RootLayout.jsx'

// Every page gets transitionLoader so the logo screen can cover the page swap.
const page = (path, element) => ({ path, element, loader: transitionLoader })

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    // Shown for a moment before the first page is ready (same dark as the logo screen).
    hydrateFallbackElement: <div className="fixed inset-0 bg-night" />,
    children: [
      {
        // Pages with the bottom navigation dock
        element: <DockLayout />,
        children: [
          page(ROUTES.home, <HomePage />),
          page(ROUTES.restaurant, <RestaurantPage />),
          page(ROUTES.bar, <BarPage />),
          page(ROUTES.rooms, <RoomsPage />),
        ],
      },
      // Dish detail has its own minimal header and no dock
      page(ROUTES.dish, <DishPage />),
      // Unknown paths go back to the home page.
      { path: '*', element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
