"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { createUser } from "./actions";
import { ISignupFormData, SignupSchema } from "./definitions";
import useAppStore from "@/lib/useAppStore";

const SignupPage: React.FC = () => {
  const router = useRouter()

  const setUser = useAppStore((state) => state.setUser);

  const {
    register,
    handleSubmit: handleSignup,
    formState: { errors, isSubmitting },
    getValues,
    setError
  } = useForm<ISignupFormData>({ resolver: zodResolver(SignupSchema) });

  const signupUser = async (data: ISignupFormData) => {
    try {
      if (data.password !== data.confirmPassword) {
        throw new Error('Password and ConfirmPassword do not match');
      }

      const { user } = await createUser(data);

      setUser(user);
    } catch (error) {
      console.error(error);
      return;
    }

    router.push('/home');
  }

  const requestAccessToken = async() => {    
    const { name, email } = getValues();

    if(!name || name == '') {
      setError("name", { type: "custom", message: "Name is required" })
    }
    if(!email || email == '') {
      setError("email", { type: "custom", message: "Email is required" })
    }

    if(!email || email == '' || !name || name == '') {
      return;
    }

    await axios.post("http://localhost:3000/requestauthtoken/api", { name, email });
  }

  return (
    <>
      <div>
        <p className="font-semibold text-2xl">Get Started</p>
        <p className="text-sm">Create your account now</p>
      </div>

      <form
        onSubmit={handleSignup((data) => signupUser(data))}
        className="form-control w-full"
      >
        <div>
          <label className="label">
            <span className="label-text text-black font-medium">Name</span>
          </label>
          <input
            {...register('name')}
            type="text"
            className="input w-full border-gray-200 focus:border-maroon focus:outline-none"
          />
          {errors.name && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="my-1">
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

        <div className="my-1">
          <label className="label">
            <span className="label-text text-black font-medium">
              Confirm Password
            </span>
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            className="input w-full border-gray-200 focus:border-maroon focus:outline-none"
          />
          {errors.confirmPassword && (
            <span className="label-text-alt text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="my-1">
          <label className="label">
            <span className="label-text text-black font-medium">
              Access Token
            </span>
          </label>
          <input
            {...register('accessToken')}
            type="password"
            className="input w-full border-gray-200 focus:border-maroon focus:outline-none"
          />
          {errors.accessToken && (
            <span className="label-text-alt text-red-500">
              {errors.accessToken.message}
            </span>
          )}
        </div>

        <button className="btn button-filled w-full mt-6">
          {isSubmitting && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
          Sign Up
        </button>
      </form>

      <p className="text-sm mt-8">
        <span className="button-colored p-0">
          <button onClick={() => requestAccessToken()}>Request Access Token</button>
        </span>
      </p>

      <p className="text-sm mt-8">
        Have an account?{' '}
        <span className="button-colored p-0">
          <Link href={'/sign-in'}>Sign In</Link>
        </span>
      </p>
    </>
  )
}

export default SignupPage;