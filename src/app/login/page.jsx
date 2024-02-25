"use client";
import { useState , useEffect } from 'react';
import {signIn , useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Login = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const session = useSession();
  
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [session, router]);
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    });
  
    if (res?.error) {
      setError("Invalid phone number or password");
    } else if (res?.url) {
      router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  return (
    <div className='w-full h-[600px] bg-gray-100 flex flex-col items-center justify-center '>
        <form onSubmit={handleSubmit}  className="w-[45%] h-[90%] flex flex-col gap-7 py-10 px-10 bg-white rounded-md shadow-sm">
            <h1 className='text-center font-bold text-3xl text-gray-900'>Login</h1>
            <input
            type='text'
            placeholder='Phone Number'
            name= "phoneNumber"
            className='bg-gray-50 text-slate-700 px-4 py-4 rounded-md'
            onChange={handleChange}
            />
            <input
            type='password'
            placeholder='password'
            name= "password"
            className='bg-gray-50 text-slate-700 px-4 py-4 rounded-md'
            onChange={handleChange}
            />
            <button className='bg-teal-700 text-white rounded-md py-3 px-10 ' type='submit'>{loading ? "Loading ..." : "Login"}</button>
            <button onClick={() => {signIn("github")}}>sign in with github</button>
          <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
        </form>
    </div>
  )
}

export default Login

