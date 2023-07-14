import React, { useState, useRef, useEffect } from 'react'; // Importar React y hooks
import { Link as Anchor, useNavigate } from 'react-router-dom'; // Importar componentes y hooks de React Router
import { api, apiUrl, endpoints } from '../utils/api'; // Importar funciones y constantes relacionadas con la API

export default function NavBar() { // Declarar el componente NavBar
  const [display, setDisplay] = useState(false); // Declarar una variable de estado "display" y su función "setDisplay" utilizando useState
  //
  const navigate = useNavigate(); // Obtener la función de navegación utilizando useNavigate
  const navbarRef = useRef(null); // Crear una referencia mutable utilizando useRef para el elemento del menú desplegable
  const menuRef = useRef(null); // Crear una referencia mutable utilizando useRef para el botón de menú

  const isLoggedIn = () => { // Declarar una función isLoggedIn
    const token = localStorage.getItem('token'); // Obtener el token de autenticación del almacenamiento local
    const user = localStorage.getItem('user'); // Obtener el usuario del almacenamiento local
    const photo = localStorage.getItem('photo'); // Obtener la foto del almacenamiento local
    return token && user; // Devolver true si el token y el usuario existen, de lo contrario, devolver false
  };

  const signout = async () => { // Declarar una función asincrónica signout
    const token = localStorage.getItem('token'); // Obtener el token de autenticación del almacenamiento local
    const headers = { headers: { Authorization: `Bearer ${token}` } }; // Crear un objeto de encabezados con el token de autenticación

    try {
      await api.post(apiUrl + endpoints.signout, null, headers); // Realizar una solicitud POST para cerrar sesión en la API utilizando el token de autenticación
      localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
      localStorage.removeItem('user'); // Eliminar el usuario del almacenamiento local
      setDisplay(false); // Cerrar el menú al hacer logout estableciendo "display" en false
      navigate('/'); // Navegar a la página de inicio
    } catch (error) {
      alert('¡Error al cerrar sesión!'); // Mostrar una alerta en caso de error al cerrar sesión
    }
  };

  const handleMouseLeave = (e) => { // Declarar la función handleMouseLeave con el evento de salida del mouse como argumento
    if (!navbarRef.current.contains(e.target) && !menuRef.current.contains(e.target)) { // Verificar si el evento de salida del mouse no está dentro del menú desplegable ni del botón de menú
      setDisplay(false); // Cerrar el menú estableciendo "display" en false
    }
  };

  useEffect(() => { // Utilizar useEffect para agregar y eliminar el evento de clic al documento
    document.addEventListener('click', handleMouseLeave); // Agregar el evento de clic al documento y llamar a handleMouseLeave
    return () => {
      document.removeEventListener('click', handleMouseLeave); // Eliminar el evento de clic al documento al desmontar el componente
    };
  }, []);

  return ( // Devolver el JSX del componente NavBar
    <>
      <nav className="flex w-full justify-between items-center px-5 h-20 absolute"> {/* Barra de navegación */}
        <img
          ref={menuRef} // Adjuntar la referencia al botón de menú
          onClick={() => setDisplay(!display)} // Manejar el clic en el botón de menú para mostrar/ocultar el menú desplegable
          className="h-12 lg:h-14 flex text-[#F472B6] hover:bg-[#F472B6] hover:text-white rounded-lg"
          src="/src/assets/img/menu.png"
        />
        <img className="sm:hidden h-12 lg:h-14" src="/src/assets/img/logo.png" /> {/* Logo */}
        <img className="md:hidden w-[35px] h-[35px] shrink-0" src="/src/assets/img/logo.png" /> {/* Logo para dispositivos móviles */}
      </nav>
      {display && ( // Mostrar el menú desplegable si "display" es true
        <div
          ref={navbarRef} // Adjuntar la referencia al menú desplegable
          className="drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] fixed top-0 left-0 shadow-2xl"
        >
          <div className="flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch"> {/* Contenido del menú desplegable */}
            <div className="flex w-full justify-end">
              <img
                src="/src/assets/img/icon-exit.png"
                onClick={() => setDisplay(!display)}
                className="sm:hidden flex justify-end ms-[20%] h-[24px]"
              /> {/* Botón de salida del menú para dispositivos móviles */}
              {isLoggedIn() && ( // Mostrar el botón de salida del menú solo si el usuario ha iniciado sesión
                <img
                  src="/src/assets/img/icon-exit.png"
                  onClick={() => setDisplay(!display)}
                  className="hidden sm:block ms-[20%] w-[24px] h-[24px] cursor-pointer"
                />
              )}
            </div>
            {isLoggedIn() ? ( // Mostrar contenido para usuarios autenticados
              <div className="flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]">
                <img
                  src={localStorage.getItem('photo')} // Mostrar la foto del usuario desde el almacenamiento local
                  className="w-[50px] mb-2 sm:m-0"
                />
                <div className="flex flex-col ms-3">
                  <p className="text-[16px] text-white">
                    {localStorage.getItem('user')} {/* Mostrar el nombre de usuario desde el almacenamiento local */}
                  </p>
                </div>
              </div>
            ) : ( // Mostrar contenido para usuarios no autenticados
              <>
                <Anchor
                  to={'/signin'}
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  Login
                </Anchor>
                <Anchor
                  to={'/'}
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  Home
                </Anchor>
                <Anchor
                  to={'/register'}
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  Register
                </Anchor>
              </>
            )}
            {isLoggedIn() && ( // Mostrar enlaces adicionales para usuarios autenticados
              <div className="lg:text-lg flex flex-col">
                <Anchor
                  to={'/'}
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  Home
                </Anchor>
                <Anchor
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  Comics
                </Anchor>
                <Anchor
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  My Comics
                </Anchor>
                <Anchor
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white"
                >
                  Favorites
                </Anchor>
                <button
                  onClick={signout} // Manejar el clic en el botón de logout para cerrar sesión
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white">Log Out</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
