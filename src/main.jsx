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
import Login from './Pages/Login'
import AddColor from './Pages/AddColor'
import ViewColor from './Pages/ViewColor'
import AddCountry from './Pages/AddCountry'
import ViewCountry from './Pages/ViewCountry'
import AddMaterial from './Pages/AddMaterial'
import ViewMaterial from './Pages/ViewMaterial'
import Addcategory from './Pages/Addcategory'
import ViewCategory from './Pages/ViewCategory'
import ViewSubCategory from './Pages/ViewSubCategory'
import AddSubCategory from './Pages/AddSubCategory'
import ViewProducts from './Pages/ViewProducts'
import Orders from './Pages/Orders'
import AddSlider from './Pages/AddSlider'
import ViewSlider from './Pages/ViewSlider'
import AddTestimonial from './Pages/AddTestimonial'
import ViewTestimonial from './Pages/ViewTestimonial'
import AddWhyChooseus from './Pages/AddWhyChooseus'
import ViewWhyChooseus from './Pages/ViewWhyChooseus'
import AddFaq from './Pages/AddFaq'
import ViewFaq from './Pages/ViewFaq'
import AddProduct from './Pages/AddProduct'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/viewuser' element={<ViewUser />} />
          <Route path='/contact-enquiry' element={<ContactEnquiry />} />
          <Route path='/newsletters' element={<NewsLetter />} />
          <Route path='/add-color' element={<AddColor />} />
          <Route path='/view-color' element={<ViewColor />} />
          <Route path='/add-material' element={<AddMaterial/>} />
          <Route path='/view-material' element={<ViewMaterial />} />
          <Route path='/add-category' element={<Addcategory />} />
          <Route path='/view-category' element={<ViewCategory />} />
          <Route path='/add-sub-categorys' element={<AddSubCategory />} />
          <Route path='/view-sub-category' element={<ViewSubCategory/>} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/view-product' element={<ViewProducts />} />
          <Route path='/add-why-choose-us' element={<AddWhyChooseus />} />
          <Route path='/view-why-choose-us' element={<ViewWhyChooseus />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/add-slider' element={<AddSlider/>} />
          <Route path='/view-slider' element={<ViewSlider />} />
          <Route path='/add-country' element={<AddCountry />} />
          <Route path='/view-country' element={<ViewCountry />} />
          <Route path='/add-testimonials' element={<AddTestimonial />} />
          <Route path='/view-testimonials' element={<ViewTestimonial />} />
          <Route path='/add-faq' element={<AddFaq/>} />
          <Route path='/view-faq' element={<ViewFaq/>} />
          <Route path='/conditions' element={<NewsLetter />} />
        
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
