import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPageCounter, setNextChapterId, setDataChapter } from "../redux/actions/chapters";
import ArrowPage from "../components/ArrowPage";
import Swal from 'sweetalert';

export default function Page() {
  // Estado local
  const [chapter, setChapter] = useState([]); // Almacena los datos del capítulo
  const { id, page} = useParams(); // Obtiene el parámetro "id" de la URL
  const navigate = useNavigate(); // Hook para la navegación en React Router

  // Store
  const dispatch = useDispatch(); // Hook para interactuar con el store de Redux
  const pageCounter = useSelector((state) => state.chapters.pageCounter); // Obtiene el contador de página del estado global almacenado en Redux
  const nextChapterId = useSelector((state) => state.chapters.nextChapterId); // Obtiene el ID del siguiente capítulo del estado global almacenado en Redux
  const number = useSelector((state) => state.chapters.number); // Obtiene el número del capítulo del estado global almacenado en Redux
  const title = useSelector((state) => state.chapters.title); // Obtiene el título del capítulo del estado global almacenado en Redux

  // Función para obtener los datos del capítulo desde la API
  function getChapter() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8080/api/chapters/${id}`)
      .then((res) => {
        setChapter(res.data.chapter); // Almacena los datos del capítulo obtenidos de la API en el estado local
        dispatch(setPageCounter(Number(page))); // Actualiza el contador de página en el estado global usando la acción setPageCounter de Redux
        dispatch(setNextChapterId(res.data.chapter.next)); // Actualiza el ID del siguiente capítulo en el estado global usando la acción setNextChapterId de Redux
        dispatch(setDataChapter(res.data.chapter.order, res.data.chapter.title)); // Actualiza el número y el título del capítulo en el estado global usando la acción setDataChapter de Redux
      })
      .catch((err) => console.log(err));
  }

  // Obtener los datos del capítulo de la API al cargar el componente
  useEffect(() => {
    getChapter();
  }, []);

  // Función para navegar a la página de detalle
  const navigateToDetailPage = () => {
    navigate(`/manga/${id}`);
  };

  // Función para navegar al siguiente capítulo
  const navigateToNextChapter = () => {
    if (nextChapterId) {
      navigate(`/chapter/${nextChapterId}/1`);
    } else {
      Swal({
        title: 'Final chapter',
        text: 'You have finished reading this manga!',
        icon: 'success',
        button: "OK"
      });
    }
  };

  // Función principal para manejar los clicks en la navegación
  const handleClick = (side) => {
    if (pageCounter === 1 && side === "left") {
      navigateToDetailPage(); // Si el contador de página es 0 y se hace clic en el lado izquierdo, navega a la página de detalle

    } else if (pageCounter === chapter.pages.length - 1 && side === "right") {
      navigateToNextChapter(); // Si el contador de página es el último de las páginas del capítulo y se hace clic en el lado derecho, navega al siguiente capítulo
      
    } else if (pageCounter > 1 && side === "left") {
      dispatch(setPageCounter(pageCounter - 1)); // Decrementa el contador de página en el estado global usando la acción setPageCounter de Redux
      navigate(`/chapter/${id}/${pageCounter - 1}`); // Navega a la URL correspondiente a la página clickeada

    } else if (side === "right") {
      dispatch(setPageCounter(pageCounter + 1)); // Incrementa el contador de página en el estado global usando la acción setPageCounter de Redux
      navigate(`/chapter/${id}/${pageCounter + 1}`); // Navega a la URL correspondiente a la página clickeada
    }
  };

  const icon_left = "/src/assets/img/flecha-left.png";
  const icon_right = "/src/assets/img/flecha.png";
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full gap-2">
      <div className="flex gap-1">
        <p className="font-semibold lg:text-xl">Cap n° {number}</p>
        <p className="font-semibold lg:text-xl">- {title}</p>
      </div>

      <div
        className="h-3/5 md:h-4/5 w-1/2 absolute left-0 cursor-pointer"
        onClick={() => handleClick("left")}
      />

      <button
        className="button absolute left-2"
        onClick={() => handleClick("left")}
      >
        <ArrowPage icon={icon_left} alt="Previous" />
      </button>

      <img
        className="h-3/5 w-screen md:h-3/4 md:w-4/5 lg:h-2/3"
        src={chapter.pages && chapter.pages[pageCounter - 1]}
        alt="image page"
      />

      <button
        className="button absolute right-2"
        onClick={() => handleClick("right")}
      >
        <ArrowPage icon={icon_right} alt="Next" />
      </button>

      <div
        className="h-3/5 md:h-4/5 w-1/2 absolute right-0 cursor-pointer"
        onClick={() => handleClick("right")}
      />

      <p className="text-center font-semibold lg:text-xl w-6 rounded-xl">
        {pageCounter}
      </p>
    </div>
  );
}
