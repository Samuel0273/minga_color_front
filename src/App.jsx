import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Index from './pages'
import './index.css'

function App() {
 
  return (
    <div className=" flex flex-col min-h-screen w-full justify-between items-center bg-[#EBEBEB] m-auto md:px-8">
    <NavBar />
    <Index/>
    <Footer />
  </div>
  )
}

export default App
