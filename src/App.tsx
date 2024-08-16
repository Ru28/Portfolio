import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    <div className='bg-gray-950'>
      <Header/>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
