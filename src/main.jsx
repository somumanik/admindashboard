import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Common/MainLayout'
import Home from './Pages/Home'
import ViewUser from './Pages/ViewUser'





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>  
      <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/user' element={<ViewUser/>}/>
          </Route>
      </Routes> 
   </BrowserRouter>

  </StrictMode>,
)
