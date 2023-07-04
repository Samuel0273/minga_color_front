import { useState } from "react"

export default function NavBar() {
  const [display,setDisplay] = useState(false)
  return (
    <>
    <nav className="flex w-full justify-between items-center px-5 h-20 absolute">
    <img onClick={()=>setDisplay(!display)} className=" h-12 lg:h-14 flex text-[#F472B6] hover:bg-[#F472B6] hover:text-white rounded-lg" src='/src/assets/img/menu.png'>
    </img>
    <img className="h-12 lg:h-14" src="/src/assets/img/logo.png" alt="Logo" />
  </nav>
  {display ? (<div className="bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] absolute h-screen w-screen text-center p-3 md:w-2/5 md:left-0 md:rounded-lg">
  <div className="flex justify-between items-center m-2 mb-4">
    <img src="/src/assets/img/foto-usuario.png" alt="foto-usuario" />
    <div className="flex flex-col items-start">
  <p className="text-white text-base lg:text-xl">Samuel Garcia</p>
  <p className="text-white text-sm lg:text-lg">samuelgarciam03@gmail.com</p>
  </div>
  <img onClick={()=>setDisplay(!display)} src="/src/assets/img/icon-exit.png"></img>
  </div>
  <div className="flex flex-col justify-center items-center gap-2">
  <button  className="text-white text-xl hover:bg-white hover:text-[#F472B6] w-72 h-9 rounded-lg p-2 flex justify-center items-center lg:text-2xl">Home</button>
  <button className="text-white text-xl hover:bg-white hover:text-[#F472B6] w-72 h-9 rounded-lg p-2 flex justify-center items-center lg:text-2xl">Register</button>
  <button className="text-white text-xl hover:bg-white hover:text-[#F472B6] w-72 h-9 rounded-lg p-2 flex justify-center items-center lg:text-2xl">Sign In</button>
  </div>
</div>): null}
</>
  )
}
