import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/*
      
      1. So we have to wrap our routes in a BrowserRouter component.
      2. Then we have to wrap our routes in a Routes component.
      3. Then we have to wrap each route in a Route component.
      4. Then we have to add a path prop to each Route component. 
      5. Then we have to add an element prop to each Route component. Element signifies what component to render when the path is matched.

    */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
