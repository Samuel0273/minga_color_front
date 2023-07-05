import React, { useRef } from 'react'
import { api, apiUrl, endpoints } from '../utils/api'
import { Link as Anchor , useNavigate } from 'react-router-dom'

export default function FormularioSignin() {
    let navigate = useNavigate()
    let inputEmail = useRef("")
    let inputPassword = useRef("")

  const signin = async (event) => {
    event.preventDefault()
    let data = {
      email: inputEmail.current.value,
      password: inputPassword.current.value
    }

    try {
      let response = await api.post(apiUrl + endpoints.signin, data)
      console.log(response)
      if (response.data.success) {
        alert('User signed in!')
        localStorage.setItem('token', response.data.response.token)
        localStorage.setItem('user', JSON.stringify(response.data.response.user))
        localStorage.setItem('photo', response.data.response.photo)
        navigate('/')
      } else {
        alert('Authentication failed!')
      }
    } catch (error) {
      alert('Error occurred!')
    }
  }
  return (
    <div className='flex flex-wrap flex-col justify-center items-center w-[100%] lg:w-[50%]'>
      <img className='hidden lg:flex' src="/logoDos.png" alt="" />
      <div className='flex flex-col justify-center items-center '>
        <h2 className='text-center text-[30px] flex-wrap font-bold'>Welcome <span className='text-pink-600'>back!</span></h2>
      <p className='text-center text-[15px] flex-wrap font-bold'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
      <form onSubmit={signin} className="w-full">
        <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
          <div>
            <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-pink-500">Email</p>
            <input ref={inputEmail} placeholder="DragonballZ@Krowl.com" id="email" name="email" type="email" required className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0" />
          </div>
          <div>
            <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-pink-500">Password</p>
            <input ref={inputPassword} placeholder="Password" id="password" name="password" type="password" required className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0" />
          </div>
          <button type="submit" className="flex w-[70vw] md:w-[30vw] h-12 flex-col items-center justify-center shrink-0 bg-pink-400 rounded-[10px]">
            <a className="text-[#FAFCFC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">Sign In</a>
          </button>
          <button className="w-[70vw] md:w-[30vw] h-12 shrink-0 border rounded-[10px] border-solid border-[#1F1F1F] flex justify-center items-center">
            <img src="/src/assets/img/google.png" className="w-6 h-6 shrink-0" />
            <p className="ms-2 text-[#1F1F1F] text-center text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">Sign in with Google</p>
          </button>
          <p className="text-[#1F1F1F] text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">You don't have an account yet? <span className="text-pink-500">Sign up</span></p>
          <p className="text-[#1F1F1F] text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">Go back to <Anchor to={"/"} className="text-pink-500">home page</Anchor></p>
        </div>
      </form>
      </div>

    </div>
  )
}
