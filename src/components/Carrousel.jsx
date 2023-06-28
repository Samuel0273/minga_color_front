import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "./Arrow";

export default function Carrousel() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then(res => setCategories(res.data.response))
      .catch(err => console.log(err));
  }, []);
  let [counter,setCounter] = useState(0)
    let next = ()=> (counter!==categories.length-1) ? setCounter(counter+1) : setCounter(0)
    let prev = ()=> (counter!==0) ? setCounter(counter-1) : setCounter(categories.length-1)
  const icon_left = "/src/assets/img/flecha-left.png";
  const icon_right = "/src/assets/img/flecha.png";

  return (
    <div className="bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] items-center justify-evenly rounded-lg mt-5 hidden px-5 md:flex md:h-40 md:w-full ">
      <button className="button" onClick={prev}>
      <Arrow icon={icon_left} alt="Previous" />
      </button>
      <img className="h-56 lg:h-64 self-end md:h-48" src={categories[counter]?.character_photo} alt="image 2" />
      <img className="object-cover w-40 h-56 mx-10 mb-12 self-end rounded-lg md:w-32 md:h-48" src={categories[counter]?.cover_photo} alt="imagen 3" />
      <div className="text-l p-2 text-white sm:w-10/12 xl:w-6/12 xl:px-10">
        <h3 className="text-2xl lg:text-3xl">{categories[counter]?.name}</h3>
        <p className="text-xs xl:text-sm lg:text-base">{categories[counter]?.description}</p>
      </div>
      <button className="button" onClick={next}>
      <Arrow icon={icon_right} alt="Next" />
      </button>
    </div>
  );
}
