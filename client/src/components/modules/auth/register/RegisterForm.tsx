/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { registrationSchema } from '@/schemas';
import { registerDefaultValues } from '@/constants';
import { useUser } from '@/context/UserContext';
import { registerUser } from '@/services/auth';
import { toast } from 'sonner';
import Logo from '@/components/shared/Logo';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: registerDefaultValues,
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch('password');
  const passwordConfirm = form.watch('passwordConfirm');
  const acceptTerms = form.watch('acceptTerms');

  const router = useRouter();
  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push('/auth/login');
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8'
      style={{ backgroundImage: "url('/assets/auth-bg.png')" }}
    >
      <div className='w-full max-w-2xl bg-white/90 p-6 md:p-10 rounded-xl shadow-md'>
        <div className='flex justify-start mb-6'>
          <Logo />
        </div>

        <div className='text-left mb-6'>
          <p className='text-color mt-1 text-lg'>
            Sign Up To Continue To MediGo.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your full name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your password'
                        className='pr-10'
                        {...field}
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute inset-y-0 right-0 flex items-center pr-3'
                      >
                        {showPassword ? (
                          <EyeOff className='h-4 w-4 text-gray-500' />
                        ) : (
                          <Eye className='h-4 w-4 text-color' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='passwordConfirm'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Confirm your password'
                        className='pr-10'
                        {...field}
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute inset-y-0 right-0 flex items-center pr-3'
                      >
                        {showPassword ? (
                          <EyeOff className='h-4 w-4 text-gray-500' />
                        ) : (
                          <Eye className='h-4 w-4 text-color' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  {passwordConfirm && password !== passwordConfirm ? (
                    <FormMessage>Passwords do not match</FormMessage>
                  ) : (
                    <FormMessage />
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='acceptTerms'
              render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0 mt-2'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel className='font-normal'>
                      I agree to the{' '}
                      <Link
                        href='/terms'
                        className='text-teal-600 hover:underline'
                      >
                        Terms and Conditions
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              disabled={password !== passwordConfirm || !acceptTerms}
              type='submit'
              className='w-full bg-primary hover:bg-secondary text-white'
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </Button>
          </form>
        </Form>

        <div className='text-left mt-6'>
          <p className='text-sm text-color'>
            Already have an account?{' '}
            <Link
              href='/auth/login'
              className='text-primary hover:underline font-medium'
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
