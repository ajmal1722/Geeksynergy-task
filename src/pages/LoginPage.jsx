import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [data, setData] = useState('');
    

    return (
        <div className='flex items-center justify-center pt-12 '>
            {/* <div className="border border-yellow-400 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name='email'
                        id='email'
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-2'
                        placeholder='Your email...'
                    />
                    <p className="text-red-600 mb-2">
                        { error }
                    </p>
                    <input 
                        name='password'
                        id='password'
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-2'
                        placeholder='Your password...'
                    />
                    <p className='text-sm mb-6'>
                        If you are new here, click here to 
                        <Link to={'/signup'} type='button' className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Sign Up
                        </Link >
                    </p>
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Sign In
                    </button>
                </form>
            </div> */}
            
        </div>
    )
}

export default LoginPage
