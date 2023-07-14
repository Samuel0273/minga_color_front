import React, { useState, useEffect, useRef } from "react";
import {api, apiUrl, endpoints} from "../utils/api.js"
import swal from "sweetalert"

export default function MangaForm() {
  const [selectedOption, setSelected] = useState("Select category");
  const [mangaTitle, setTitle] = useState("");
  const [mangaImage, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [mangaDescription, setMangaDescription] = useState("");

  let manga_title = useRef("")
  let manga_image = useRef("")
  let manga_category = useRef("")
  let manga_descr = useRef("")

  async function handleFormSubmit(event) {
    event.preventDefault();
  
    let data = {
      title: manga_title.current.value,
      description: manga_descr.current.value,
      cover_photo: manga_image.current.value,
      category_id: manga_category.current.value,
      
    }
  
    let token = localStorage.getItem('token')
    let configs = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    try {
      await api.post(apiUrl + endpoints.create_mangas, data, configs);
      swal.fire({
        icon: 'success',
        title: 'Manga uploaded successfully!',
      });
    } catch (error) {
      const er = error.response.data.message;
      console.log(error);
      swal.fire({
        icon: 'error',
        title: er,
      });
    }
  };

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    api
      .get(apiUrl + endpoints.read_categories)
      .then((res) => setCategories(res.data.response));
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-[5rem]">
        <p className="text-[#1F1F1F] text-center text-[32px] not-italic font-semibold leading-[normal] tracking-[1.6px]">
          New Manga
        </p>

        <form
          onSubmit={handleFormSubmit}
          method="POST"
          className="w-full"
          placeholder="Select category"
          
        >
          <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col justify-center items-center">
            
              <input
                ref={manga_title}
                placeholder="Insert title"
                id="mangaTitle"
                name="mangaTitle"
                type="text"
                required
                value={mangaTitle}
                onChange={(event) => setTitle(event.target.value)}
                className="placeholder-[#9D9D9D] bg-[#EBEBEB] pl-3 pt-3 border-b border-solid border-b-[#333] w-[70vw] md:w-[30vw] h-10"
              />

<input
              ref={manga_image}
              placeholder="Image URL"
              id="mangaImage"
              name="mangaImage"
              type="text"
              required
              value={mangaImage}
              onChange={(event) => setImage(event.target.value)}
              className="placeholder-[#9D9D9D] bg-[#EBEBEB] pl-3 pt-5 border-b border-solid border-b-[#333] w-[70vw] md:w-[30vw] h-12"
            />

              <select
                ref={manga_category}
                value={selectedOption}
                onChange={handleOptionChange}
                className="placeholder-[#9D9D9D] bg-[#EBEBEB] pl-3 pt-3 border-b border-solid border-b-[#333] w-[70vw] md:w-[30vw] h-10"
              >
                {categories.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))}
              </select>

              <input
                ref={manga_descr}
                placeholder="Insert description"
                id="mangaDescription"
                name="mangaDescription"
                type="text"
                required
                value={mangaDescription}
                onChange={(event) => setMangaDescription(event.target.value)}
                className="placeholder-[#9D9D9D] bg-[#EBEBEB] pl-3 pt-3 border-b border-solid border-b-[#333] w-[70vw] md:w-[30vw] h-10"
              />

          </div>
          <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
            <button
              type="submit"
              className="border-none flex items-center justify-center text-white bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] p-4 text-xl lg:text-2xl rounded-[5rem] w-[70vw] md:w-[30vw]"
            >
              Send
            </button>
            </div>
        </form>
      </div>
    </>
  );
}
