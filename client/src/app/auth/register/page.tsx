import RegisterForm from '@/components/modules/auth/register/RegisterForm';

const RegisterPage = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: "url('/assets/auth-bg.png')" }}
    >
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
