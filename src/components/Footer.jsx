export default function Footer() {
  return (
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
        <button className="text-white mt-2	rounded-lg p-1 bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]">Donate🤍</button>
      </div>
    </div>
  </footer>
  )
}
