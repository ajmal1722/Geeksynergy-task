import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [userData, setUserData] = useState([]);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        // Get user data from local storage
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];
        setUserData(storedData);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const requiredFields = ['name', 'password'];
    
        for (let field of requiredFields) {
            if (formData[field].trim() === '') {
                setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
                return;
            }
        }

        console.log('user Data:', userData);

        // Check if the name and password match any stored user
        const user = userData.find(
            (user) => user.name === formData.name && user.password === formData.password
        );

        if (user) {
            toast.success('Login successful!');
            console.log('Logged in:', formData);
            // Add your login success logic here
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='flex items-center justify-center pt-12'>
            <ToastContainer />
            <div className="border border-yellow-400 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Login</h1>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <input 
                        name='name'
                        type="text" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your name...'
                        value={formData.name}
                        onChange={onChange}
                    />

                    {/* Password Field */}
                    <input 
                        name='password'
                        type="password" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Enter your password...'
                        value={formData.password}
                        onChange={onChange}
                    />

                    {/* Error display */}
                    {error && (
                        <p style={{marginTop: '-12px'}} className="text-red-600 my-3">
                            * {error}
                        </p>
                    )}

                    {/* Redirect to SignUp */}
                    <p className='text-sm mb-6'>
                        Don't have an account? 
                        <Link to={'/signup'} className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Sign Up
                        </Link>
                    </p>

                    {/* Submit Button */}
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;