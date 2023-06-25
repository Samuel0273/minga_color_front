
import './index.css'

function App() {
 
  return (
    <div className=" flex flex-col min-h-screen w-full justify-between items-center bg-[#EBEBEB] m-auto md:px-8">
  <nav className="flex w-full justify-between items-center px-5 h-20 absolute top-0 z-10 ">
    <img className=" h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg" src='/src/assets/img/menu.png'  strokeWidth="1.5" stroke="currentColor">
    </img>
    <img className="h-14 p-1" src="/src/assets/img/logo.png" alt="Logo" />
  </nav>
  <main className=" flex flex-col md:pt-20 w-full min-h-screen items-center justify-between ">
    <div className="bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] items-center justify-evenly rounded-lg mt-5 hidden px-5 md:flex md:h-40 md:w-full ">
    <img className="bg-[#EBEBEB] w-6 rounded-lg p-1 rotate-180	" src="/src/assets/img/flecha.png" alt="flecha" />
      <img className="h-56 lg:h-64 self-end md:h-48" src="/src/assets/img/image2.png" alt="image 2" />
      <img className="object-cover w-40 h-56 mx-10 mb-12 self-end rounded-lg md:w-32 md:h-48" src="/src/assets/img/image3.png" alt="imagen 3" />
      <div className="text-l p-2 text-white sm:w-10/12 xl:w-6/12 xl:px-10">
        <h3 className="text-2xl lg:text-3xl">Shonen</h3>
        <p className="text-xs xl:text-sm lg:text-base">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
      </div>
      <img className="bg-[#EBEBEB] w-6 rounded-lg p-1" src="/src/assets/img/flecha.png" alt="" />
    </div>
    <div className="app-container bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center text-white w-full h-screen px-5 mx-auto md:mt-5 md:mb-10 md:h-44 lg:h-56 md:rounded-lg md:px-8 md:items-start md:flex-grow">
      <h2 className="font-bold text-5xl mb-1 text-center md:text-left xl:text-6xl md:text-lg lg:text-3xl">Live the emotion of the manga</h2>
      <p className="text-2xl mb-1 text-center lg:text-2xl">Find the perfect manga for you</p>
      <p className="text-2xl hidden font-bold mb-2 md:flex md:text-lg lg:text-3xl">#MingaForever</p>
      <a className="border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-40 p-2 flex justify-center md:justify-start text-xl rounded-lg" href="">Explore</a>
    </div>
  </main>
  <footer className="flex flex-col w-full justify-between items-center pb-5 bg-[#EBEBEB]">
    <img className="object-cover hidden md:flex w-full h-40 rounded-[0px_0px_50%_50%]" src="/src/assets/img/Rectangle 14.png" alt="Footer" />
    <div className="flex flex-col items-center px-5 w-full md:w-11/12 md:flex-row md:justify-between">
      <div className="flex justify-evenly items-center mt-2">
        <a className="mr-10 text-xl" href="">Home</a>
        <a className="text-xl" href="">Mangas</a>
      </div>
      <img className="my-4 w-20" src="/src/assets/img/logo.png" alt="Logo" />
      <div className="flex flex-col items-center mt-2">
        <div className="flex w-full justify-evenly">
          <img className="mr-2" src="/src/assets/img/facebook-black.png" alt="Facebook" />
          <img className="mr-2" src="/src/assets/img/twitter-black.png" alt="Twitter" />
          <img className="mr-2" src="/src/assets/img/vimeo-black.png" alt="Vimeo" />
          <img src="/src/assets/img/youtube-black.png" alt="Youtube" />
        </div>
        <button className="text-white mt-2	rounded-lg p-1 bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]">Donate</button>
      </div>
    </div>
  </footer>
</div>

  )
}

export default App
