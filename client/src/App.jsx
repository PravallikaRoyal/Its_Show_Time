import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import Favourite from "./pages/Favorite";
import SeatLayout from "./pages/SeatLayout";
import Movies from "./pages/Movies";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
const App = () =>{
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return(
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/movies/:id' element={<MovieDetails/>} />
      <Route path='/movies/:id/:date' element={<SeatLayout/>} />
      <Route path='/my-bookings' element={<MyBookings/>} />
      <Route path='/favorite' element={<Favourite/>} />
      
    </Routes>
    {!isAdminRoute && <Footer/>}

    </>
  )
}
export default App