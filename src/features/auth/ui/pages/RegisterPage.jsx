import React, { useState } from "react";
import { UserRound, Mail, LockKeyhole, ArrowRight, LogIn } from "lucide-react";
import useAuth from "../../hooks/useAuthHook";
import { NavLink } from "react-router";


const RegisterPage = () => {
  let { register, handleSubmit, regForm, errors } = useAuth();

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#141414] p-8 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black">
            <UserRound size={27} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Join us by creating your new account.
          </p>
        </div>

        {/* Registration Form */}
        <form onClick={handleSubmit(regForm)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 focus-within:border-lime-300">
              <UserRound size={18} className="text-gray-500" />

              <input
                {...register("fName", { required: "name is required" })}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
              {errors.fName && <p className="text-red-500" > {errors.fName.message} </p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email address
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 focus-within:border-lime-300">
              <Mail size={18} className="text-gray-500" />

              <input
                {...register("email", { required: "email is required" })}
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
              {errors.email && <p className="text-red-500" > {errors.email.message} </p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 focus-within:border-lime-300">
              <LockKeyhole size={18} className="text-gray-500" />

              <input
                {...register("password", { required: "password is required" })}
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>
          </div>
            {errors.password && <p className="text-red-500" > {errors.password.message} </p>}

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-300 py-3.5 font-semibold text-black transition hover:bg-lime-200">
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-7 text-center">
          <p className="text-sm text-gray-400">Already have an account?</p>

          <NavLink
            to={"/"}
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-lime-300 hover:text-lime-300"
          >
            <LogIn size={16} />
            Sign In
          </NavLink>
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          Simple, secure, and ready to get started
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
