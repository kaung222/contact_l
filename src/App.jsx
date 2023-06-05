// import React from 'react'
import "./App.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './components/Layout/Rootlayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import CreateContact from './pages/CreateContact'
import Edit from "./pages/Edit"
import Profile from "./pages/Profile"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={  <Dashboard /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/create' element={ <CreateContact /> } />
      <Route path='/edit' element={ <Edit /> } />
      <Route path='/profile' element={ <Profile /> } />
    </Route>
  )
)

const App = () => {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App