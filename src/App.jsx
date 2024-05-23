import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import SignIn from "./pages/sign-in";
import HotelListing from "./pages/HotelListing";
import { Test } from "./pages/test";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Layout />}>
          {/* <Route path="/Home" element={<Home />}> */}
            {/* <Route path="/UserManagement" element={ <PrivateRoute component={UserManagement} />} /> */}
            <Route path="/" element={ <Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/hotel-listing" element={<HotelListing />} />
            <Route path="/test" element={ <Test/> } />
            <Route path="/activities" element={ <Test/> } />
            {/* <Route path="/UserManagement/AddUser" element={  <PrivateRoute component={AddUser}/> } />
            <Route path="/UserManagement/EditUser/:id" element={  <PrivateRoute component={AddUser}/> } />
            <Route path="/UserManagement/UserDelete/:id" element={  <PrivateRoute component={UserDelete}/> } />
            <Route path="/UserManagement/UserDetail/:id" element={ <UserDetail/> } /> */}
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
