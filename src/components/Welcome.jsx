import Button from "./Button"

export default function Welcome() {
  return (
    <div className="app-container bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center text-white w-full h-screen px-5 mx-auto md:mt-5 md:mb-10 md:h-44 lg:h-56 md:rounded-lg md:px-8 md:items-start md:flex-grow">
    <h2 className="font-bold text-5xl mb-1 text-center md:text-left xl:text-6xl md:text-lg lg:text-3xl">Live the emotion of the manga</h2>
    <p className="text-2xl mb-1 text-center lg:text-2xl">Find the perfect manga for you</p>
    <p className="text-2xl hidden font-bold mb-2 md:flex md:text-lg lg:text-3xl">#MingaForever</p>
    <Button/>
  </div>
  )
}
