import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App