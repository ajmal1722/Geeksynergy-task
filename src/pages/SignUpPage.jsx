import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        profession: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const requiredFields = ['name', 'email', 'phone', 'password', 'profession'];
    
        for (let field of requiredFields) {
            if (formData[field].trim() === '') {
                setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
                return;
            }
        }
    
        // Get existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
    
        // Add the new user to the array
        const updatedUsers = [...existingUsers, formData];
    
        // Store the updated users array in localStorage
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
    
        // If no errors, proceed with form submission logic
        console.log('User data:', formData);
    
        // Redirect to login page after successful sign-up
        navigate('/login');
    };    
    
    return (
        <div className='flex items-center justify-center pt-7'>
        <ToastContainer />
            <div className="border border-yellow-400 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Sign Up</h1>
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

                    {/* Email Field */}
                    <input 
                        name='email'
                        type="email" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your email...'
                        value={formData.email}
                        onChange={onChange}
                    />

                    {/* Phone Number Field */}
                    <input 
                        name='phone'
                        type="tel" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your phone number...'
                        value={formData.phone}
                        onChange={onChange}
                    />

                    {/* Password Field */}
                    <input 
                        name='password'
                        type="password" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Create a password...'
                        value={formData.password}
                        onChange={onChange}
                    />

                    {/* Profession Dropdown */}
                    <select 
                        name="profession" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-6'
                        value={formData.profession}
                        onChange={onChange}
                    >
                        <option value="">Select your profession...</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>

                    {/* Error display */}
                    {error && (
                        <p style={{marginTop: '-12px'}} className="text-red-600 my-3">
                            * {error}
                        </p>
                    )}

                    {/* Redirect to Login */}
                    <p className='text-sm mb-6'>
                        If you already have an account, click here to 
                        <Link to={'/login'} className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Login
                        </Link>
                    </p>

                    {/* Submit Button */}
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;