/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "./ApiService";
import Axios from 'axios'

const Login = () => {
    const { loginApi } = ApiService()
    const [email, useEmail] = useState('');
    const [password, usePassword] = useState('');

    const navigate = useNavigate();


    // use refreshToken when press F5
    // useEffect(() => {
    //     sessionStorage.clear();
    // }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // thieu validate field
        // if (validate()) {
            let regobj = { email , password };
            loginApi(regobj, navigate)
    }

    return (
        <div>
            <div className="bg-slate-400 border p-8 relative">
                <h1 className="text-4xl text-center mb-6"> Sign Up</h1>
                <form onSubmit={handleSubmit} action="">
                    <div className="relative my-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input value={email} onChange={e => useEmail(e.target.value)} autoComplete="on" type="email" name="email" id="email" className="border text-gray-900 rounded-lg block w-full p-2.5" placeholder="example@gmail.com" required="" />
                    </div>
                    <div className="relative my-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input value={password} onChange={e => usePassword(e.target.value)} autoComplete="on" type="password" name="password" id="password" className="border text-gray-900 rounded-lg block w-full p-2.5" placeholder="••••••••" required="" />
                    </div>
                    <button className="w-1/2 mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white  hover:bg-blue-800 py-2" type='submit'>
                        Sign In
                    </button>
                </form>
                <div className="border-0 border-b-2 border-gray-300"></div>
                <div className="mt-1">
                    <span className="block">New User</span>
                    <button className="w-1/2 mb-4 text-[18px] rounded-full bg-blue-600 text-white  hover:bg-blue-800 py-2" type='submit'>
                        <Link className="text-blue-500" to='/signup'> Sign Up</Link>
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Login;