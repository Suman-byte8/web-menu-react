import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { ROUTES } from './data/site.js'
import { transitionLoader } from './lib/transition.js'
import DockLayout from './shared/DockLayout.jsx'
import RootLayout from './shared/RootLayout.jsx'

/**
 * Every page is its own chunk, downloaded the first time it is visited
 * (the logo screen covers the short wait). transitionLoader lets the logo
 * screen cover the page swap.
 */
const page = (path, load) => ({
  path,
  loader: transitionLoader,
  lazy: async () => ({ Component: (await load()).default }),
})

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
          page(ROUTES.home, () => import('./pages/HomePage.jsx')),
          page(ROUTES.restaurant, () => import('./pages/RestaurantPage.jsx')),
          page(ROUTES.bar, () => import('./pages/BarPage.jsx')),
          page(ROUTES.rooms, () => import('./pages/RoomsPage.jsx')),
        ],
      },
      // Dish detail has its own header and no dock
      page(ROUTES.dish, () => import('./pages/DishPage.jsx')),
      // Unknown paths go back to the home page.
      { path: '*', element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
