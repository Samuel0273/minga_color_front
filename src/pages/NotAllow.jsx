import NavBar from "../components/NavBar"

export default function NotAllow() {
  return (
    <div>
      <NavBar/>
      <div className="h-screen flex flex-col items-center justify-center">
      <h1 className=" text-2xl">NotAllow</h1>
      <p className=" text-xl">You do not have permission to access this page.</p>
      </div>
    </div>
  )
}
