'use client'
import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const isRegister = variant === 'register';

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-12">
          <img src="/images/logo.png" alt="logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign In' :'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {isRegister && (
                <Input  
                    label="Username"
                    onChange={(e:any)=> setName(e.target.value)}
                    id="name"
                    value= {name}
                  />
              )}
                <Input  
                  label="Email"
                  onChange={(e:any)=> setEmail(e.target.value)}
                  id="email"
                  type="email"
                  value= {email}
                />
                <Input  
                  label="Password"
                  onChange={(e:any)=> setPassword(e.target.value)}
                  id="password"
                  type="password"
                  value= {password}
                />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {isRegister ? 'Sign Up' : 'Login'}
            </button>
            <p className="text-neutral-500 mt-12">
              { isRegister ? 'Already have an account?' : 'First time using Netflix?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer pl-1">
                { isRegister ? 'Login' : 'Create an account'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;