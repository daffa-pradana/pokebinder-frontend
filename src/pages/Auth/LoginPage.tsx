import { useState } from "react";
import { Link } from "react-router-dom";

import GoogleIcon from "@/assets/icons/google-icon.svg?react";
import pokeballImg from "@/assets/images/grey-pokeball-img.svg";
import pokebinderLogo from "@/assets/logo/pokebinder-logo.png";

interface SignInFormState {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState<SignInFormState>({ email: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name as keyof SignInFormState]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: implement authentication
  }

  return (
    <div className="flex min-h-screen">
      {/* Left panel — branding */}
      <div className="relative hidden overflow-hidden bg-gradient-to-b from-pokebinder-red to-pokebinder-red-dark lg:flex lg:w-[56%] lg:flex-col">
        {/* Branding text — top-left */}
        <div className="relative z-10 p-12">
          <p className="text-[40px] font-medium leading-[1.6] tracking-wide text-white">
            Welcome back,
          </p>
          <p className="text-[96px] font-bold leading-[1] tracking-wide text-white">
            Collector
          </p>
        </div>

        {/* Pokeball decoration — bottom-left */}
        <img
          src={pokeballImg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-36 -left-48 w-[788px] select-none opacity-20"
        />
      </div>

      {/* Right panel — sign in form */}
      <div className="flex flex-1 flex-col items-center justify-center bg-pokebinder-gray-light shadow-[-10px_0_40px_rgba(13,12,71,0.05)]">
        <div className="w-full max-w-[268px] px-6 lg:px-0">
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <img src={pokebinderLogo} alt="PokéBinder" className="h-14 object-contain" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="poketrainer@pokemon.jp"
              required
              className="h-[50px] w-full rounded-[10px] border border-pokebinder-gray-dark bg-pokebinder-gray-light px-4 text-[12px] tracking-[-0.25px] text-pokebinder-navy-dark placeholder:text-pokebinder-gray-dark focus:border-pokebinder-red focus:outline-none"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="h-[50px] w-full rounded-[10px] border border-pokebinder-gray-dark bg-pokebinder-gray-light px-4 text-[12px] tracking-[-0.25px] text-pokebinder-navy-dark placeholder:text-pokebinder-gray-dark focus:border-pokebinder-red focus:outline-none"
            />
            <button
              type="submit"
              className="mt-1 h-[50px] w-full cursor-pointer rounded-[10px] bg-pokebinder-red text-[14px] font-semibold tracking-[1px] text-pokebinder-gray-light transition-colors hover:bg-pokebinder-red-dark"
            >
              Sign In
            </button>
          </form>

          {/* OR divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-pokebinder-gray-dark" />
            <span className="text-[12px] font-medium tracking-[1px] text-pokebinder-gray-dark">
              OR
            </span>
            <div className="h-px flex-1 bg-pokebinder-gray-dark" />
          </div>

          {/* Google SSO */}
          <button
            type="button"
            className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] border border-pokebinder-gray-medium bg-pokebinder-gray-medium text-[14px] font-semibold tracking-[1px] transition-all hover:brightness-95"
          >
            <GoogleIcon aria-hidden className="size-4" />
            Continue with Google
          </button>

          {/* Sign up link */}
          <p className="mt-5 text-center text-[10px] tracking-[1px] text-pokebinder-gray-darker">
            Dont have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-pokebinder-red underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
