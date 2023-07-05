import { Link } from "react-router-dom"

export default function Button({name, to}) {
  return (
    <Link to={to} className="text-white border-none bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] w-40 p-2 flex justify-center items-center md:justify-start text-xl md:text-base lg:text-2xl rounded-lg" >{name}</Link>
  )
}
