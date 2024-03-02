"use client";
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useSession , signIn} from 'next-auth/react';

const LoginPage = () => {
    const router = useRouter();
    const session = useSession();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        phoneNumber: "",
        password: ""
    });
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    useEffect(() => {   
        if(session?.status === "authenticated") {
            router.replace("/dashboard")
          }
        } , [session, router])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
            
    const res = await signIn("credentials" , {
        redirect : false,
        phoneNumber: formData.phoneNumber, 
        password: formData.password
      })
  



            
            if (res.ok) {
                router.push('/dashboard'); 
            } else {
                setLoading(false);
                alert('Failed to login. Please check your credentials.');
            }
           
    };

    return (
        <div className='w-full h-[600px] bg-gray-100 flex flex-col items-center justify-center '>
            <form onSubmit={handleSubmit} className="md:w-[45%] lg:w-[35%] w-[90%]  h-[90%] flex flex-col gap-7 py-10 px-10 bg-white rounded-md shadow-sm">
                <h1 className='text-center font-bold text-3xl text-gray-900'>Login</h1>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder='phoneNumber'
                    className='bg-gray-50 text-slate-800 px-4 py-4 rounded-md'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name="password"
                    className='bg-gray-50 text-slate-700 px-4 py-4 rounded-md'
                    onChange={handleChange}
                />
                <button className='bg-slate-700 text-white rounded-md py-3 px-10' type='submit'>{loading ? "Loading ..." : "Login"}</button>
            </form>
        </div>
    );
};

export default LoginPage;