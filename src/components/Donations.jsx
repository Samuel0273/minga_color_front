import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
const DonationForm=() => {
    const [amount, setAmount] = useState(1000);
    //const [totalAmount, setTotalAmount] = useState(5000);

    const handleButtonClick= (amount)=> {
        setAmount(amount);
        //setTotalAmount(amount);
    } 
    console.log((amount))
    //estado y funcion actualizadora, preferenceId (alamacena el ID generado por MP,dsps de crear la preferencia de pago)
    const [preferenceId, setPreferenceId] = useState(null);
    //inicializar mp con el token
    const mp_token = "TEST-761630551560495-072602-60ac0bb3cc0866aa2190e6d78011fd9b-1433882626"
    initMercadoPago(mp_token);
    console.log('FRONT TOKEN', mp_token)
    //mercado pago functions
    const createPreference = async () => {
        try {//. Solicitud para crear una preferencia de pago en MP.
          const response = await axios.post("http://localhost:8080/api/payment/create-order", {
            title: "Gracias por su donación",
            price: amount,
          }); 
          const { id } = response.data; //. { id } forma abrev de asignar el valor de response.data.id 
          return id;
        } catch (error) {
          console.log(error);
        }
      };
      //handleBuy solic al serv para crear una pref de pago, obtiene el ID generado por MP actualiza estado del componente con ese ID.
      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
          setPreferenceId(id);
        }
      };
    
    return (
        <div className='flex  justify-center gap-10 flex-col ' >
          
              <div className="flex flex-col gap-5 items-center justify-center">
      <h1 className="flex gap-3 mt-5 justify-center text-black text-4xl xl:text-6xl w-[100%] ">
      Contribuye con una donación 
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
<path d="M21.5 8.75C21.5 6.26472 19.4013 4.25 16.8125 4.25C14.8769 4.25 13.2153 5.37628 12.5 6.98342C11.7847 5.37628 10.1231 4.25 8.1875 4.25C5.59867 4.25 3.5 6.26472 3.5 8.75C3.5 15.9706 12.5 20.75 12.5 20.75C12.5 20.75 21.5 15.9706 21.5 8.75Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
            <div className='flex gap-5 justify-center'>
            <button
  type="button" onClick={()=>handleButtonClick(1000)}
  className="donate-button border-solid border-2 border-blue-600 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none"
>
  $1000
</button>

<button
  type="button" onClick={()=>handleButtonClick(5000)}
  className="donate-button border-solid border-2 border-blue-600 px-4 py-2 rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none"
>
  $5000
</button>

<button
  type="button" onClick={()=>handleButtonClick(10000)}
  className="donate-button border-solid border-2 border-blue-600 px-4 py-2 rounded-md text-white  bg-blue-700 hover:bg-indigo-700 focus:outline-none"
>
  $10000
</button>
            </div>
       
<p className='donate-amount'> Contribuye con ${amount}, muchas gracias</p>
      <div>
        <button className='donate-link border-solid border-2 border-indigo-600 px-4 py-2 bg-blue-700 rounded-md text-white' onClick={handleBuy}> Donate</button>
        {preferenceId && <Wallet initialization={{preferenceId}} />}
      </div>
        <div className="text-[black] flex justify-center gap-10 w[100%] bg-gray rounded-[5px] mb-[1rem] ">
        <Link to={`/`}>home
        </Link>
      </div>
        </div>
       
      )
}

export default DonationForm