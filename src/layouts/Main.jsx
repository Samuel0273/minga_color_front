import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Main({ children }) {
 
    return (
      <div className=" flex flex-col min-h-screen w-full justify-between items-center bg-[#EBEBEB] m-auto md:px-8">
    <NavBar />
    {children}
    <Footer />
  </div>
  
    )
  }