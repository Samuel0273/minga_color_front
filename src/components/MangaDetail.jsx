import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link as Anchor} from "react-router-dom";
import { api } from "../utils/api";
import { setManga, setChapters, setPagination } from "../redux/actions/manga.js";
import { LS } from "../utils/localStorageUtils.js"

const MangaDetail = () => {
  const token = LS.get2('token');
  console.log('token >>>', token)
  const { id } = useParams();
  const dispatch = useDispatch();
  const { manga, chapters, pagination} = useSelector((state) => state.manga);

  console.log('manga start:', manga)
  console.log('chapters start:', chapters)
  console.log('pagination start:', pagination)

  const fetchManga = async () => {
    if (manga._id !== id) {
      try {
        const { data } = await api.get(`/mangas/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        dispatch(setManga(data.manga));
      } catch (error) {
        console.log(error);
      }
    }
  }

  const fetchChapters = async (page) => {
    try {
      const { data } = await api.get(`/chapters?page=${page}&manga_id=${id}`);
      dispatch(setChapters(data.chapters));
      setTotalPages(data.totalPages)
      console.log('my data >>>', data)
      
    } catch (error) {
      console.log('<<<', error);
    }
  }; 

  useEffect(() => {
    fetchManga();
    fetchChapters(pagination.currentPage);
  }, [pagination]);


  const handlePrevPage = async () => {
    if(pagination.currentPage > 2){
      dispatch(setPagination({currentPage: pagination.currentPage -1, prev: true, next: true}))
    }
    else if(pagination.currentPage <= 2){
      dispatch(setPagination({currentPage: pagination.currentPage -1, prev: false, next: true}))
    } 
  }
  console.log(pagination.currentPage)
  console.log(pagination.prev)
  console.log(pagination.next)
  
  const handleNextPage = async () => {
    console.log(pagination)
      dispatch(setPagination({currentPage: pagination.currentPage +1, prev: true, next: true}))
  }

  const [activeTab, setActiveTab] = useState("mangas")
  const [totalPages, setTotalPages] = useState(0)

  const switchToMangaTab = () => {
    setActiveTab("mangas");
  };

  const switchToChaptersTab = () => {
    setActiveTab("chapters");
  };

  const company_name = (manga.author_id?.name + (manga.author_id?.last_name == undefined ? "" : " " + manga.author_id?.last_name))
  const bgColor = manga.category_id?.color
  const hvColor = manga.category_id?.hover

  const nose = useSelector((state) => state.manga)

  console.log('bg>>>', bgColor)
  console.log('hv>>>', hvColor)
  console.log('manga:', manga)
  return (
    <div className='min-h-[screen] flex flex-col items-center w-full'>
        <div className='mt-[25%] sm:mt-[120px] flex flex-col items-center w-full'>
            <img src={manga.cover_photo} alt="manga cover" className='rounded-[5px] w-[90%] aspect-square sm:w-[440px] object-cover object-top' />
            { activeTab === "mangas" && (
                <div className='flex flex-col items-center w-[full] sm:w-[80%]'>
                  <p className='m-4 text-[#222] text-2xl font-semibold'>{manga.title}</p>
            
                    <div className='flex w-full justify-around items-center'>
                        <p className={`shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] rounded-[10rem] p-3 text-md font-semibold`} 
                        style={{backgroundColor: hvColor, color: bgColor}}>{manga.category_id?.name}</p>
                        <p className='flex h-2.5 flex-col justify-center shrink-0 text-[color:var(--grey,#9D9D9D)] text-xl leading-[95.187%]'>{company_name}</p>
                    </div>

                    <div className='flex justify-around items-center content-center m-4'>
                        <button className='shrink-0 bg-white rounded-full m-2 shadow-lg h-[72px] aspect-square'><p className='text-[42px] flex justify-center items-center'>👍</p></button>
                        <button className='shrink-0 bg-white rounded-full m-2 shadow-lg h-[72px] aspect-square'><p className='text-[42px] flex justify-center items-center'>👎️</p></button>
                        <button className='shrink-0 bg-white rounded-full m-2 shadow-lg h-[72px] aspect-square'><p className='text-[42px] flex justify-center items-center'>😮</p></button>
                        <button className='shrink-0 bg-white rounded-full m-2 shadow-lg h-[72px] aspect-square'><p className='text-[42px] flex justify-center items-center'>😍</p></button>
                    </div>

                    <div className='w-[90%] h-[80px] bg-white rounded-md shadow-lg flex flex-row justify-around items-center'>
                      <div className='flex flex-col'>
                          <p className='text-[#424242)] text-center text-xl font-normal'>4.5/5</p>
                          <p className='text-[#9D9D9D)] text-center text-xs font-normal'>Rating</p>
                      </div>
                      <p className='text-[#9D9D9D)] text-center text-2xl font-extralight'>|</p>
                      <div className='flex flex-col'>
                          <p className='text-[#424242)] text-center text-xl font-normal'>265</p>
                          <p className='text-[#9D9D9D)] text-center text-xs font-normal'>Chapters</p>
                      </div>
                      <p className='text-[#9D9D9D)] text-center text-2xl font-extralight'>|</p>
                      <div className='flex flex-col'>
                          <p className='text-[#424242)] text-center text-xl font-normal'>Eng</p>
                          <p className='text-[#9D9D9D)] text-center text-xs font-normal'>Language</p>
                      </div>
                    </div>
                    <div className='w-[90%] shrink-0 flex items-center m-4 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] rounded-[20px]'>
                        <Anchor onClick={switchToMangaTab} className='w-[50%] h-[34.311px] shrink-0 text-xl text-center text-white rounded-[5rem] bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:bg-gradient-to-r hover:from-[#F472B6] hover:to-[#FF54AC]'>Manga</Anchor>
                        <Anchor onClick={switchToChaptersTab} className='flex w-[50%] h-[34px] flex-col justify-center items-center shrink-0 text-[#9D9D9D)] text-center text-md font-normal'>Chapters</Anchor>
                    </div>
            
                    <div className='w-[90%] shrink-0 m-8'>
                        <p className='text-[#424242)] text- font-normal leading-5'>{manga.description}</p>
                    </div>
                </div>
              )
            }
            { activeTab === "chapters" && (
                <div className='sm:w-[60%] flex flex-col items-center w-[90%] mb-12'>
                  <p className="m-4 text-[color:var(--black,#222)] text-2xl leading-[95.187%]">Chapters</p>
                  <div className='w-[90%] flex items-center m-1 rounded-[5rem] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)]'>
                      <Anchor onClick={switchToMangaTab} className='flex w-[50%] h-[34px] flex-col justify-center items-center shrink-0 text-[#9D9D9D)] text-center text-md font-normal'>Manga</Anchor>
                      <Anchor onClick={switchToChaptersTab} className='w-[50%] h-[34.311px] shrink-0 text-xl text-center text-white rounded-[5rem] bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:bg-gradient-to-r hover:from-[#F472B6] hover:to-[#FF54AC]'>Chapters</Anchor>
                  </div>
                  {chapters.map((chapter) => (
                    <div key={chapter._id} className="flex w-[90%] justify-between m-3 gap-2">
                      <img src={chapter.cover_photo} className="w-[30%] h-[100px] object-cover" />
                      <div className="w-[40%] flex flex-col p-3 justify-between">
                        <p className="text-black text-left font-medium">{chapter.title}</p>
                        <div className="flex gap-4">
                          <img src="https://i.ibb.co/44mBCGk/icon-comment.png" alt="icon-comment" border="0" className="w-[37px] h-[29px]"/>
                          <p className="font-semibold">{(chapter.pages).length}</p>
                        </div>
                      </div>
                      <div className="w-[25%] text-2xl flex justify-center items-center">
                        <Anchor to={`/chapter/${chapter._id}/1?manga_id=${chapter.manga_id}`} className="text-[#FAFCFC] p-3 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] text-center text-md font-bold rounded-[5rem] bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:from-[#F472B6] hover:to-[#FF54AC]">Read</Anchor>
                      </div>
                      
                    </div>
                  ))}
                  <div className="flex flex-wrap justify-center mt-4">
                    <button onClick={handlePrevPage} disabled={pagination.currentPage == 1} className={`px-4 py-2 mr-2 rounded-md shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] ${pagination.currentPage == 1 ? 'bg-slate-50' : 'bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:from-[#F472B6] hover:to-[#FF54AC]' }`}> Prev </button>
                    <button onClick={handleNextPage} disabled={pagination.currentPage == totalPages} className={`px-4 py-2 mr-2 rounded-md shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] ${pagination.currentPage == totalPages ? 'bg-slate-50' : 'bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:from-[#F472B6] hover:to-[#FF54AC]' }`}> Next </button>
                  </div>
                </div>
              )
            }
        </div>
    </div>
  );
};
//
export default MangaDetail;