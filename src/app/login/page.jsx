"use client";
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    
    const router = useRouter();


    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
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
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            router.push('/dashboard')
            if (res.ok) {
                router.push('/dashboard')
            } else {
                setLoading(false);
                alert('Failed to login');
            }
        } catch (error) {
            console.error('falied to login', error);
            setLoading(false);
            alert('falied to login ');
        }
    };
    return (
        <div className='w-full h-[600px]  flex flex-col items-center justify-center text-white '>
            <form onSubmit={handleSubmit} className="md:w-[45%] lg:w-[35%] w-[90%]  h-[90%] flex flex-col gap-7 py-10 px-10  rounded-md shadow-sm">
                <h1 className='text-center font-bold text-3xl '>Login</h1>
                <input
                    type="email"
                    name="email"
                    placeholder='email'
                    className='bg-gray-50 text-slate-700  px-4 py-4 rounded-md'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name="password"
                    className='bg-gray-50 text-slate-700  px-4 py-4 rounded-md'
                    onChange={handleChange}
                    
                />
                <button className='bg-slate-700 text-white rounded-md py-3 px-10' type='submit'>{loading ? "Loading ..." : "Login"}</button>
            </form>
        </div>
    );
};

export default LoginPage;