import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert';


export default function Register() {
  const inputemail = useRef('');
  const inputpassword = useRef('');
  const inputphoto = useRef('');

  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleEmailChange = (e) => {
    inputemail.current = e.target.value;
    setEmail(e.target.value);
  };

  const handlePhotoChange = (e) => {
    inputphoto.current = e.target.value;
    setPhoto(e.target.value);
  };

  const handlePasswordChange = (e) => {
    inputpassword.current = e.target.value;
    setPassword(e.target.value);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleRegisterClick = async () => {
    try {
      const data = {
        email: inputemail.current,
        photo: inputphoto.current,
        password: inputpassword.current,
      };

      localStorage.setItem('email', inputemail.current);
      localStorage.setItem('password', inputpassword.current);
      localStorage.setItem('photo', inputphoto.current);

      const response = await axios.post('http://localhost:8080/api/auth/register', data);

      setEmail('');
      setPhoto('');
      setPassword('');
      setTermsAccepted(false);
      Swal({
        title: 'Successful registration',
        text: 'Registration completed successfully!',
        icon: 'success',
        button: 'OK',
      })
      console.log('Successful registration:', response.data);
    } catch (error) {
      console.error('Sign up failed:', error);
      Swal({
        title: 'Failed registration',
        text: 'Registration failed. Please try again.',
        icon: 'error',
        button: 'OK',
      });
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedPhoto = localStorage.getItem('photo');

    if (storedEmail) {
      setEmail(storedEmail);
      inputemail.current = storedEmail;
    }

    if (storedPassword) {
      setPassword(storedPassword);
      inputpassword.current = storedPassword;
    }
    if (storedPhoto) {
      setPhoto(storedPhoto);
      inputphoto.current = storedPhoto;
    }
  }, []);

  return (
    <div className="flex justify-between items-center h-screen sm:justify-center">
      <div className="flex flex-col justify-start items-center md:items-center md:justify-center w-48 md:w-2/4 lg:p-20">
        <h1 className="font-medium text-lg lg:text-3xl m-2">Welcome!</h1>
        <p className="text-start md:text-center m-1 text-xs lg:text-base">Discover manga and comics, track your progress,have fun, read manga.</p>
        <form className="flex flex-col items-start m-2 sm:m-0">
          <label className="font-medium ml-2 text-purple-400" htmlFor="email">Email</label>
          <input className="border-2 w-full p-0 md:p-1 lg:p-3 border-purple-400 rounded-lg m-1" type="email" id="email" name="email" value={email} placeholder='@' onChange={handleEmailChange} required />

          <label className="font-medium ml-2 text-purple-400" htmlFor="photo">Photo</label>
          <input className="border-2 w-full p-0 md:p-1 lg:p-3 border-purple-400 rounded-lg m-1" type="text" id="photo" name="photo" value={photo} placeholder='📷' onChange={handlePhotoChange} />

          <label className="font-medium ml-2 text-purple-400" htmlFor="password">Password</label>
          <input className="border-2 w-full p-0 md:p-1 lg:p-3 border-purple-400 rounded-lg m-1" type="password" id="password" name="password" placeholder='🔒' value={password} onChange={handlePasswordChange} required />

          <div className="flex m-1">
            <input type="checkbox" id="terms" name="terms" checked={termsAccepted} onChange={handleTermsChange} />
            <label className="m-1" htmlFor="terms">Send notification to my email</label>
          </div>

          <Link to={"/home"} onClick={handleRegisterClick} className="flex items-center justify-center w-[260px] md:w-full h-[60px] my-[12px] text-xl sm:h-[30px] text-white text-center rounded-lg bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] hover:bg-gradient-to-r hover:from-[#F472B6] hover:to-[#FF54AC]" type="button">Registrar</Link>
        </form>
        <p className='text-xs md:text-base'>Already have an account? <span className="cursor-pointer text-lg text-purple-500 font-medium sm:font-normal">Log in</span></p>
        <p className='text-xs md:text-base'>Go back to <Link to={"/home"} className="cursor-pointer text-lg text-purple-500 font-medium sm:font-normal">Home page</Link></p>
      </div>
      <img className="hidden md:flex w-2/4" src="/src/assets/img/register.png" alt="register" />
    </div>
  );
}
