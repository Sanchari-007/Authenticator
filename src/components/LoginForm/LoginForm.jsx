import React, { useState } from 'react';
import Totoro from '../LoginForm/Totoro.jpg';

const LoginForm = () => {

return (
    <section className="bg-gradient-to-r bg-orange-200 p-100 min-h-screen flex items-center justify-center">
    <div className="bg-stone-400 p-4 flex rounded-2xl shadow-lg max-w-screen-3xl">
      <div className='sm:w-1/2 px-16'>
      <h2 className='font-bold text-2xl text-gray-50'>Log In</h2>
      <p className='text-xs mt-4 text-zinc-100'>Already a Member? Log In!</p>
      <form action="" className='flex flex-col gap-4'>
        <input className="p-2 mt-8 rounded-xl border" type="email" placeholder="Email"/>
        <div className='relative'>
            <input className="p-2 rounded-xl border w-full" type="password" placeholder='password'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-eye-fill absolute top-1/3 right-3 translate-y-0" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
            </svg>
        </div>
        <button class='bg-neutral-600 text-gray-300 rounded-xl border py-2'>Log In</button>
      </form>

      <div className='mt-10 grid grid-cols-3 items-center text-indigo-100'>
        <hr className='border-neutral-200'/>
        <p className='text-center text-neutral-200 text-xs'>OR</p>
        <hr className='border-neutral-200'/>
      </div>

      <button className='bg-white py-2 mt-5 w-full text-xs rounded-xl border text-neutral-500 flex justify-center items-center'>
      <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-google" viewBox="0 0 20 16">
      <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
      </svg>
      Log In with Google</button>

      <p className='mt-5 text-xs py-6 text-gray-200'>Forgot your password</p>
      <hr/><br></br>
      <div className='text-xs mt -3 flex justify-between items-center'>
        <p className="text-zinc-300">Don't have account?</p>
        <button className='py-2 px-5 bg-white rounded-xl border text-zinc-500'>Register</button>
      </div>
      </div>

      <div className='sm:block hiddenw'>
        <img class="rounded-2xl" src={Totoro} alt='Image'/>
      </div>
    </div>
    </section>
    );
};

export default LoginForm;