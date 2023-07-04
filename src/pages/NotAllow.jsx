import Button from "../components/Button"
export default function NotAllow() {
  return (
    <div className="flex items-center h-screen">
      <div className="bg-[url('/src/assets/img/fondomobile.png')] bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center text-white w-full h-screen px-5 mx-auto md:mt-5 md:mb-10 md:h-64 md:w-3/4 lg:h-96 md:rounded-lg md:px-8 md:bg-[url('/src/assets/img/fondomain.png')]">
      <h1 className=" text-3xl">NotAllow</h1>
      <p className=" text-xl text-center">You do not have permission to access this page.</p>
      <Button name="Register" to={"/home"}/>
      </div>
    </div>
  )
}
