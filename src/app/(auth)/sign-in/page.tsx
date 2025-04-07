"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signin } from "./actions";
import { SigninSchema, ISigninFormData } from "./definitions";
import useAppStore from "@/lib/useAppStore";

const SignInPage: React.FC = () => {
  const router = useRouter();


  const setUser = useAppStore(state => state.setUser);

  const {
    register,
    handleSubmit: handleSignin,
    formState: { errors, isSubmitting }
  } = useForm<ISigninFormData>({ resolver: zodResolver(SigninSchema) });


  const signinUser = async (data: ISigninFormData) => {
    try {
      const { user } = await signin(data);

      setUser(user);
    } catch (error) {
      console.error(error);
      return;
    }

    router.push('/home');
  }

  return (
    <>
      <div>
        <p className="font-semibold text-2xl">Welcome Back!</p>
        <p className="text-sm">Sign in to your account</p>
      </div>

      <div className="flex items-center mt-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <form
        onSubmit={handleSignin((data) => signinUser(data))}
        className="form-control w-full"
      >
        <div>
          <label className="label">
            <span className="label-text text-black font-medium">Email</span>
          </label>
          <input
            {...register('email')}
            type="email"
            className="input w-full border-gray-200 focus:border-maroon focus:outline-none"
          />
          {errors.email && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="my-1">
          <label className="label">
            <span className="label-text text-black font-medium">Password</span>
          </label>
          <input
            {...register('password')}
            type="password"
            className="input w-full border-gray-200 focus:border-maroon focus:outline-none"
          />
          {errors.password && (
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button className="btn button-filled w-full mt-6">
          {isSubmitting && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
          Sign In
        </button>
      </form>

      <p className="text-sm mt-8">  
        Don`&apos;`t have an account?{' '}
        <span className="button-colored p-0">
          <Link href={'/sign-up'}>Create one now!</Link>
        </span>
      </p>
    </>
  )
}

export default SignInPage;