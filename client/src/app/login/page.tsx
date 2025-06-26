'use client'

import LoginForm from '@/components/modules/auth/login/LoginForm';
import { Suspense } from 'react';

const LoginPage = () => {
  return (
    <div className='h-screen w-screen bg-[#e5f0f0] flex justify-center items-center'>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
