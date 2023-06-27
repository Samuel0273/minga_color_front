export default function Carrousel() {
  return (
    <div className="bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] items-center justify-evenly rounded-lg mt-5 hidden px-5 md:flex md:h-40 md:w-full ">
    <img className="bg-[#EBEBEB] w-6 rounded-lg p-1" src="/src/assets/img/flecha-left.png" alt="flecha" />
      <img className="h-56 lg:h-64 self-end md:h-48" src="/src/assets/img/image2.png" alt="image 2" />
      <img className="object-cover w-40 h-56 mx-10 mb-12 self-end rounded-lg md:w-32 md:h-48" src="/src/assets/img/image3.png" alt="imagen 3" />
      <div className="text-l p-2 text-white sm:w-10/12 xl:w-6/12 xl:px-10">
        <h3 className="text-2xl lg:text-3xl">Shonen</h3>
        <p className="text-xs xl:text-sm lg:text-base">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
      </div>
      <img className="bg-[#EBEBEB] w-6 rounded-lg p-1" src="/src/assets/img/flecha.png" alt="" />
    </div>
  )
}
