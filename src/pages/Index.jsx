import Welcome from "../components/Welcome"
import Carrousel from "../components/Carrousel"
export default function Index() {
  return (
    <main className=" flex flex-col md:pt-20 w-full min-h-screen items-center justify-between ">
    <Carrousel/>
   <Welcome/>
  </main>
  )
}
