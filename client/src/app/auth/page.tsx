import React from 'react';

const AuthPage = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: "url('/assets/auth-bg.png')" }}
    >
      <div className='bg-white bg-opacity-80 p-10 rounded-xl shadow-md'>
        <h1 className='text-2xl font-semibold'>AuthPage</h1>
      </div>
    </div>
  );
};

export default AuthPage;
