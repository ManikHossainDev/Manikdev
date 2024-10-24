"use client";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Manik | Login",
//   description: "login manager for contact information",
// };
import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import zAnimate from "./_components/Animation.json";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // console.log(data);
    try {
      const res = await loginUser(data);
      if (res.success) {
        alert(res.message);
        localStorage.setItem("accessToken", res.accessToken);
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="py-5 md:mt-28 mx-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3">
        <div className="card flex justify-center shadow-xl bg-base-100 ">
          <Lottie
            className="h-[300px] md:h-[400px] w-full md:w-full"
            animationData={zAnimate}
            loop={true}
          />
        </div>

        <div className="card w-full  mx-auto shadow-xl bg-base-100">
          <h1 className="text-center text-3xl  pt-3">
            <span className="text-gray-400">Login  Here</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline">
                Login
              </button>
            </div>

            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link className="text-accent text-green-600" href="/register">
                Create an account
              </Link>
            </p>
          </form>

          <p className="text-center">Or Sign Up Using</p>
          <div className="flex justify-center mb-10 mt-2">
            <button
              className="btn btn-circle"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://manikdev.vercel.app/dashboard",
                })
              }
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="google logo"
              />
            </button>
            <button
              className="btn btn-circle mx-5"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://manikdev.vercel.app/dashboard",
                })
              }
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={30}
                height={30}
                alt="github logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
