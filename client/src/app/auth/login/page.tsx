'use client'

import LoginForm from '@/components/modules/auth/login/LoginForm';
import { Suspense } from 'react';

const LoginPage = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8'
      style={{ backgroundImage: "url('/assets/auth-bg.png')" }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
