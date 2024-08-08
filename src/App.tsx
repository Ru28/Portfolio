import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    }
  ])

  return (
    <Fragment>
      <Header/>
      <RouterProvider router={appRouter} />
    </Fragment>
  )
}

export default App
