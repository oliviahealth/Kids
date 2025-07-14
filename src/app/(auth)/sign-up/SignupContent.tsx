"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { createUser } from "./actions";
import { ISignupFormData, SignupSchema } from "./definitions";
import useAppStore from "@/lib/useAppStore";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const SignupContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setUser = useAppStore((state) => state.setUser);

  const [requestAccessTokenStatus, setRequestAccessTokenStatus] = useState<null | string>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit: handleSignup,
    formState: { errors, isSubmitting },
    getValues,
    setError,
    setValue,
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  // If a "token" query parameter exists, prefill the accessToken field
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setValue("accessToken", token);
    }
  }, [searchParams, setValue]);

  const signupUser = async (data: any) => {
    try {
      if (data.password !== data.confirmPassword) {
        throw new Error("Password and ConfirmPassword do not match");
      }
      const { user } = await createUser({ ...data, email: data.email.toLowerCase() });
      setUser(user);
    } catch (error) {
      console.error(error);
      return;
    }
    router.push("/home");
  };

  const requestAccessToken = async () => {
    const { name, email } = getValues();

    if (!name || name.trim() === "") {
      setError("name", { type: "custom", message: "Name is required" });
    }
    if (!email || email.trim() === "") {
      setError("email", { type: "custom", message: "Email is required" });
    }
    if (!name || name.trim() === "" || !email || email.trim() === "") {
      return;
    }

    const { data } = (await axios.post(`${SITE_URL}/requestauthtoken/api`, { name, email })).data;

    if (data === "success") {
      setRequestAccessTokenStatus("success");
    } else {
      setRequestAccessTokenStatus("failure");
    }
  };

  return (
    <>
      {requestAccessTokenStatus === "success" && (
        <div role="alert" className="alert alert-success my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Access Token Requested. You&apos;ll get an email soon if you&apos;re approved!
          </span>
        </div>
      )}

      {requestAccessTokenStatus === "failure" && (
        <div role="alert" className="alert alert-error my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Something went wrong, please try again later.</span>
        </div>
      )}

      <div className="my-4">
        <p className="font-semibold text-2xl">Get Started</p>
        <p className="text-sm">Create your account now</p>
      </div>

      <form onSubmit={handleSignup((data) => signupUser(data))} className="form-control w-full">
        <div className="my-1">
          <label className="label">
            <span className="label-text text-black font-medium">Name</span>
          </label>
          <div className="flex w-full items-center border border-gray-200 rounded-xl p-1">
            <input
              {...register('name')}
              type="text"
              className="input flex-1 border-0 focus:border-transparent focus:ring-0 focus:outline-none"
              placeholder="Your name"
            />
          </div>
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
          <div className="flex w-full items-center border border-gray-200 rounded-xl p-1">
            <input
              {...register('email')}
              type="email"
              className="input flex-1 border-0 focus:border-transparent focus:ring-0 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
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
          <div className="flex w-full items-center gap-2 border border-gray-200 rounded-xl p-1">
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              className="input flex-1 border-0 focus:border-transparent focus:ring-0 focus:outline-none"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-500 text-sm px-2"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
            </button>
          </div>

          {errors.password && (
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="my-1">
          <label className="label">
            <span className="label-text text-black font-medium">Confirm Password</span>
          </label>
          <div className="flex w-full items-center gap-2 border border-gray-200 rounded-xl p-1">
            <input
              {...register('confirmPassword')}
              type={showConfirmPassword ? 'text' : 'password'}
              className="input flex-1 border-0 focus:border-transparent focus:ring-0 focus:outline-none"
              placeholder="Confirm password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="text-gray-500 text-sm px-2"
              aria-label="Toggle password visibility"
            >
              {showConfirmPassword ? <RiEyeFill /> : <RiEyeOffFill />}
            </button>
          </div>

          {errors.confirmPassword && (
            <span className="label-text-alt text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="my-1">
          <label className="label">
            <span className="label-text text-black font-medium">Access Token</span>
          </label>
          <div className="flex w-full items-center border border-gray-200 rounded-xl p-1">
            <input
              {...register('accessToken')}
              type="text"
              className="input flex-1 border-0 focus:border-transparent focus:ring-0 focus:outline-none"
              placeholder="Access Token"
            />
          </div>
          {errors.accessToken && (
            <span className="label-text-alt text-red-500">
              {errors.accessToken.message}
            </span>
          )}
        </div>

        <button className="btn button-filled w-full mt-6">
          {isSubmitting && <span className="loading loading-spinner loading-sm"></span>}
          Sign Up
        </button>
      </form>

      <p className="text-sm mt-8">
        <span className="button-colored p-0">
          <button onClick={() => requestAccessToken()}>Request Access Token</button>
        </span>
      </p>

      <p className="text-sm mt-8">
        Have an account?{" "}
        <span className="button-colored p-0">
          <Link href={"/sign-in"}>Sign In</Link>
        </span>
      </p>
    </>
  );
};

export default SignupContent;