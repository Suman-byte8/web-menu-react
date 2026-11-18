import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { ROUTES } from './data/site.js'
import HomePage from './pages/HomePage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import RootLayout from './shared/RootLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.restaurant, element: <RestaurantPage /> },
      // Bar and Rooms pages aren't built yet; send unknown paths home.
      { path: '*', element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
