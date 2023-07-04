import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
 
    return (
      <div className=" flex flex-col min-h-screen w-full justify-between items-center bg-[#EBEBEB] m-auto md:px-8">
    <NavBar />
    <Outlet/>
    <Footer />
  </div>
  
    )
  }