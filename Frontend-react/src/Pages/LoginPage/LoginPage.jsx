import {React, useState} from 'react'
import { useForm } from "react-hook-form";


function LoginPage() {
   const [currentState, setCurrentState] = useState("Login");
  const {register, handleSubmit, formState:{errors}, reset} = useForm()

 
  function onSubmit(formData) {
    console.log(formData);
    reset()
    
  }
  return (
    <div className="min-h-screen bg-gary-50 dark:bg-color-browwn py-24 sm:mt-10 px-4 sm-px-4 md-6 lg-8">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-lg bg-white shadow-md p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {currentState}
          </h2>
        </div>
        <div className="flex flex-col gap-9">
          {currentState === "Login" ? null : (
            <input
              type="name"
              name="name"
              placeholder="Your name"
              {...register("name", {
                required : true
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
            />
            
          )}
           {
          errors.name && errors.name.type === 'required' ? <p className="text-orange-600">Name is required</p> : null
        }
          <input
            type="email"
            name="email"
            placeholder="Your email"
            {...register("email", {
                required : true
              })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
          />
           {
          errors.email && errors.email.type === 'required' ? <p className="text-orange-600">Email is required</p> : null
        }
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
                required : true,
                minLength: 8,
              })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
          />
          {
          errors.password && errors.password.type === 'required' ? <p className="text-orange-600">Password is required</p> : null
        }
        
        {
          errors.password && errors.password.type === 'minLength' ? <p className="text-orange-600">Password should be at least 8 characters</p> : null
        }
        <button
          type="submit"
          className="w-full bg-orange-600 dark:bg-color-brown text-white py-2 rounded-md hover:opacity-90 transition duration-200 font-medium"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        </div>
        
        <div className="flex items-start gap-2 mt-2">
          <input type="checkbox" required className="mt-1" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        {currentState === "Login" ? (
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Create a new account?
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="text-orange-600 dark:text-color-brown cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <span
              onClick={() => setCurrentState("Login")}
              className="text-orange-600 dark:text-color-brown cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage