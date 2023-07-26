import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LS } from "../utils/localStorageUtils";

const UpdateMangaModal = ({ setModified, closeModal, manga }) => {
  const [selectedOption, setSelectedOption] = useState(manga.category_id.name);
  const [categories, setCategories] = useState([]);
  const [mangaTitle, setMangaTitle] = useState(manga.title);
  const [coverPhoto, setCoverPhoto] = useState(manga.cover_photo);
  const [mangaDescription, setMangaDescription] = useState(manga.description);
  const [error, setError] = useState([]);


  const token = LS.get("token");

  console.log("mangamodalss", manga);
  console.log('selectedOption', selectedOption)
  useEffect(() => {
    axios.get("http://localhost:8080/api/categories").then((res) => setCategories(res.data.categories));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let selectedCategory = categories.find(cat => cat.name === selectedOption);
    console.log('selectedCategory', selectedCategory)
    const data = {
      title: mangaTitle,
      cover_photo: coverPhoto,
      description: mangaDescription,
      category_id: selectedCategory._id
      ,
    };

    let configs = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(`http://localhost:8080/api/mangas/${manga._id}`, data, configs)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Manga Updated",
          showConfirmButton: false,
          timer: 1000,
        }).then(() =>{
          setReloadComponent(true);
          closeModal(false);
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error)
      });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[80vw] md:w-[30vw] max-h-[80vh] overflow-y-auto">
        <form onSubmit={handleFormSubmit} method="POST" className="w-full" placeholder="Select category">
          <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
            <div>
              <input
                placeholder="Insert title"
                id="mangaTitle"
                name="mangaTitle"
                type="text"
                value={mangaTitle}
                onChange={(event) => setMangaTitle(event.target.value)}
                className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              />
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("Title")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>
            <div>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="border placeholder-gray-400 pt-[12px] pr-4 pb-[11px] pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              >
                {categories &&
                  categories.map((option) => (
                    <option key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
              </select>
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("Category")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>
            <div>
              <input
                placeholder="Insert cover photo"
                id="coverPhoto"
                name="coverPhoto"
                type="text"
                value={coverPhoto}
                onChange={(event) => setCoverPhoto(event.target.value)}
                className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              />
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("URL")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>
            <div>
              <input
                placeholder="Insert description"
                id="mangaDescription"
                name="mangaDescription"
                type="text"
                value={mangaDescription}
                onChange={(event) => setMangaDescription(event.target.value)}
                className="border placeholder-gray-400 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"
              />
              {error &&
                error.map((errorMsg, index) => {
                  if (errorMsg.includes("Description")) {
                    return (
                      <span className="text-red-500 text-[13px] pl-2" key={index}>
                        {errorMsg}
                      </span>
                    );
                  }
                  return null;
                })}
            </div>

            <div className="border-none flex items-center justify-center text-white bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] p-4 text-xl lg:text-2xl rounded-[5rem] w-[70vw] md:w-[30vw]">
              <button type="submit" className="text-[#FAFCFC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">
                Send
              </button>
            </div>          
            <div className="flex items-center justify-center w-[100px] md:w-[30vw] p-4 text-xl lg:text-2xl rounded-[5rem] bg-red-600">
              <button type="submit" className=" text-[#FAFCFC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMangaModal;
