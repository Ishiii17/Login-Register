import React from 'react';

function Register() {
  return (
    <>
      <div className='flex flex-col m-20 items-center h-screen'>
        <h2 className='text-center font-bold text-7xl mt-18'>WELCOME TO METAMORPHOSIS GYM</h2>
        <div className='flex flex-col h-auto w-1/3 mt-20 rounded-md bg-zinc-800'>
          <div className='text-center mt-3 text-white font-semibold text-xl'>
            <h2 className='text-5xl italic font-bold mt-10 mb-10'>REGISTER</h2>

              <div>USERNAME</div>
              <input className='text-black w-10/12 rounded-md mb-10 p-1' type='text'></input>

              <div>EMAIL</div>
              <input className='text-black w-10/12 rounded-md mb-10 p-1' type='email'></input>

              <div>PASSWORD</div>
              <input className='text-black w-10/12 rounded-md mb-10 p-1' type='password'></input>

              <div>CONFIRM PASSWORD</div>
              <input className='text-black w-10/12 rounded-md p-1' type='password'></input>

              <div className='grid grid-rows-2 items-center justify-center mt-16 text-center text-sm'>
              <button className='bg-zinc-900 w-28 h-10 font-semibold rounded-sm transition-transform transform hover:scale-110 duration-300 hover:bg-neutral-700' type='button'>REGISTER</button>
              <div className='text-xs font-thin'>OR</div>
              <button className='bg-zinc-900 w-28 h-10 font-semibold rounded-sm mb-12 transition-transform transform hover:scale-110 duration-300 hover:bg-neutral-700' type='button'>LOGIN</button>
              </div> 
              </div>
        </div>
      </div>
    </>
  );
}

export default Register;
