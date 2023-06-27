export default function NavBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 h-20 absolute top-0 z-10 ">
    <img className=" h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg" src='/src/assets/img/menu.png'  strokeWidth="1.5" stroke="currentColor">
    </img>
    <img className="h-14 p-1" src="/src/assets/img/logo.png" alt="Logo" />
  </nav>
  )
}
