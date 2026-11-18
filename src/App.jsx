import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { ROUTES } from './data/site.js'
import BarPage from './pages/BarPage.jsx'
import HomePage from './pages/HomePage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import RootLayout from './shared/RootLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.restaurant, element: <RestaurantPage /> },
      { path: ROUTES.bar, element: <BarPage /> },
      // The Rooms page isn't built yet; send unknown paths home.
      { path: '*', element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
