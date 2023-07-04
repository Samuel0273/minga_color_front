export default function ButtonForm({ onClick,value }) {
    return (
        <input onClick={onClick} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:bg-gradient-to-r hover:from-[#F472B6] hover:to-[#FF54AC]" type="button" value={value} />
    )
}
