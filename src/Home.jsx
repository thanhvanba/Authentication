/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import ApiService from './ApiService';
import { useState } from "react";

const Home = () => {
    const { callApiTest, logoutApi } = ApiService()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const testApi = async () => {
        setLoading(true)
        let clientToken = sessionStorage.getItem('token');
        console.log('token', clientToken)
        const res = callApiTest(clientToken, navigate, setLoading)
        
        // const res = await refreshTokenApi() 
        // console.log('token', res?.data?.token)
        // // const res1 = await refreshTokenApi()

        // console.log('res', res)
        // // console.log('res1', res1)
        // if (res?.success) {
        //     let result = await callApiTest(res?.data?.token)
        //     console.log('aaa', result)
        // } else {
        //     let result = await callApiTest(res?.data?.token)
        //     console.log('out', result)
        //     navigate('/login')
        // }
    }
    const logOut = async () =>{
        setLoading(true)
        let clientToken = sessionStorage.getItem('token');
        logoutApi(clientToken, navigate, setLoading)
    }


    return (
        <div>
            <div className=" bg-slate-300 rounded-lg border p-8 relative">
                <h1 className="text-4xl text-center mb-6">Home</h1>
                    <div className="relative my-4">
                        <label className="block mb-2">Hello {sessionStorage.getItem('email')}</label>
                    </div>
                    <div>
                        <button disabled={loading} className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white  hover:bg-blue-800 p-2" onClick={testApi}>Test Api</button>
                        {/* BEM ? */}
                    </div>
                    <div name="testTB" id="testTB" className="m-4 text-center">ok</div>
                    <button disabled={loading} className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white  hover:bg-blue-800 p-2" onClick={logOut}>LOG OUT</button>
            </div>

        </div>
    )
}

export default Home;