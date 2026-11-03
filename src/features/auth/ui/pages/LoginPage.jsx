import React from "react";
import { Mail, LockKeyhole, ArrowRight, UserPlus } from "lucide-react";
import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuthHook";

const LoginPage = () => {
  let { register, handleSubmit, loginForm, errors } = useAuth();

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#141414] p-8 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black">
            <LockKeyhole size={27} />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Enter your details to sign in to your account.
          </p>
        </div>

        {/* Login Form */}
        <p className="text-white"> username:- emilys and password: - emilyspass </p> <br />
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 focus-within:border-lime-300">
              <Mail size={18} className="text-gray-500" />

              <input
                {...register("username", { required: "username is required" })}
                type="text"
                placeholder="you@example.com"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
            {errors.username && (
              <p className="text-red-500"> {errors.useremail.message} </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 focus-within:border-lime-300">
              <LockKeyhole size={18} className="text-gray-500" />

              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
            {errors.password && (
              <p className="text-red-500"> {errors.password.message} </p>
            )}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-300 py-3.5 font-semibold text-black transition hover:bg-lime-200">
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Sign Up */}
        <div className="mt-7 text-center">
          <p className="text-sm text-gray-400">
            Haven't created an account yet?
          </p>

          <NavLink
            to={"/reg"}
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-lime-300 hover:text-lime-300"
          >
            <UserPlus size={16} />
            Sign Up
          </NavLink>
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          Secure access to your account
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
