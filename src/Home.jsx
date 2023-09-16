/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ApiService from './ApiService';

const Home = () => {
    const { refreshTokenApi, callApiTest } = ApiService()
    const navigate = useNavigate()
    const [email, useEmail] = useState('')
    const [password, usePassword] = useState('')

    const testApi = async () => {
        let clientToken = localStorage.getItem('token');
        const res = await refreshTokenApi(clientToken)
        // const res = await refreshTokenApi()
        console.log('res', res)
        // if (res?.success) {
        //     let result = await callApiTest(res?.data?.token)
        //     console.log('aaa', result)
        // } else {
        //     navigate('/login')
        // }
    }

    return(
        <div>
            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white  hover:bg-blue-800 p-2" onClick={testApi}>Test Api</button>
            {/* BEM ? */}
        </div>
    )
}

export default Home;