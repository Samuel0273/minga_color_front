import { useState, useRef, useEffect } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import { api, apiUrl, endpoints } from '../utils/api';

export default function NavBar() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const photo = localStorage.getItem('photo');
    return token && user && photo;
  };

  const signout = async () => {
    const token = localStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      await api.post(apiUrl + endpoints.signout, null, headers);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setDisplay(false); // Cerrar el menú al hacer logout
      navigate('/');
    } catch (error) {
      alert('¡Error al cerrar sesión!');
    }
  };

  const handleMouseLeave = (e) => {
    if (!navbarRef.current?.contains(e.target) && !menuRef.current.contains(e.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleMouseLeave);
    return () => {
      document.removeEventListener('click', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav className="flex w-full justify-between items-center px-5 h-20 absolute">
        <img
          ref={menuRef}
          onClick={() => setDisplay(!display)}
          className="h-12 lg:h-14 flex text-[#F472B6] hover:bg-[#F472B6] hover:text-white rounded-lg"
          src="/src/assets/img/menu.png"
        />
        <img className="h-12 lg:h-14" src="/src/assets/img/logo.png" />
        <img className="md:hidden w-[35px] h-[35px] shrink-0" src="/src/assets/img/logo.png" />
      </nav>
      {display && (
        <div
          ref={navbarRef}
          className="drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] fixed top-0 left-0 shadow-2xl"
        >
          <div className="flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch">
            <div className="flex w-full justify-end">
              <img
                src="/src/assets/img/icon-exit.png"
                onClick={() => setDisplay(!display)}
                className="sm:hidden flex justify-end ms-[20%] h-[24px]"
              />
              {isLoggedIn() && (
                <img
                  src="/src/assets/img/icon-exit.png"
                  onClick={() => setDisplay(!display)}
                  className="hidden sm:block ms-[20%] w-[24px] h-[24px] cursor-pointer"
                />
              )}
            </div>
            {isLoggedIn() ? (
              <div className="flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]">
                <img
                  src={localStorage.getItem('photo')}
                  className="w-[50px] mb-2 sm:m-0"
                />
                <div className="flex flex-col ms-3">
                  <p className="text-[16px] text-white">
                    {localStorage.getItem('user')}
                  </p>
                </div>
              </div>
            ) : (
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
            {isLoggedIn() && (
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
                  onClick={signout}
                  className="p-3 hover:bg-white hover:text-[#F472B6] rounded-md w-[300px] text-white">Log Out</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
