import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  return (
    <>
      <div
        style={{
          "background-image": "url(https://wallpapercave.com/wp/wp9764093.jpg)",
        }}
        class="hero min-h-screen  "
      >
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left lg:px-8 px-0 text-white">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6  text-2xl font-semibold ">
              Online Learning Now In Your Fingertips
            </p>
            <p class="  text-xl  ">
              Quora is a online learning platform that offers various premium
              courses for your skill development
            </p>
          </div>
          <div class=" flex-shrink-0 w-full xl:max-w-lg max-w-md">
            <div class="p-4  bg-white  border border-gray-200 rounded-lg shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our Quora
                </h5>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
                >
                  Sign in{" "}
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <Link
                   to='/register'
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
              <div class="divider">OR</div>
              <button onClick={()=>signInWithGoogle()} class="btn w-full btn-outline mb-4">
                <span className="pr-4">
                  <FcGoogle size={30} />
                </span>
                <span> continue with google</span>
              </button>
              <button class="btn w-full btn-outline">
                <span className="pr-4">
                  <BsFacebook size={30} />
                </span>
                <span> continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
