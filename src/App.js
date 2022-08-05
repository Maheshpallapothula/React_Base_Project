import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Coupons from './Coupons'
import LandingPage from './LandingPage'
import SignIn from './SignIn';
import RootLocations from './RootLocations';
import Support from './Support';
import NotFoundPage from './NotFoundPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/coupons' element={<Coupons/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/location' element={<RootLocations/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/notFound' element={<NotFoundPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App