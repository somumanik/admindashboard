import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Common/MainLayout'
import Home from './Pages/Home'
import ViewUser from './Pages/ViewUser'
import ContactEnquiry from './Pages/ContactEnquiry'
import NewsLetter from './Pages/NewsLetter'
import Error from './Pages/Error'





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>  
      <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/user' element={<ViewUser/>}/>
              <Route path='/contact-enquiry' element={<ContactEnquiry/>}/>
              <Route path='/news-enquiry' element={<NewsLetter/>}/>
              <Route path='/*' element={<Error/>}/>
          </Route>
      </Routes> 
   </BrowserRouter>

  </StrictMode>,
)
