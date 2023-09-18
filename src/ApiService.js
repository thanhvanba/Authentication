const ApiService = () => {
    const loginApi = async (params, navigate) => {
        await fetch("https://auth-server-fmp.vercel.app/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        }).then((res) => {
            return res.json();
        }).then((res) => {

            if (res.success) {
                alert(res?.message);
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('email');
                sessionStorage.setItem('email', res?.data?.email)
                sessionStorage.setItem('token', res?.data?.token);
                navigate('/home')
            } else {
                throw new Error(res?.message)
            }
        }).catch((err) => {
            alert('Login Failed due to :' + err.message);
        });
    }

    const registerApi = async (params, navigate) => {
        await fetch("https://auth-server-fmp.vercel.app/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
            .then(res => res.json())
            .then((res) => {
                console.log('res', res)
                alert(res?.message)
                navigate('/login');
            }).catch((err) => {
                alert('Failed :' + err?.message);
            });
    }

    const logoutApi = async (params, navigate) => {
        let bearerToken = `Bearer ${params}`
        await fetch("https://auth-server-fmp.vercel.app/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearerToken,
            }
        })
            .then(res => res.json())
            .then((res) => {
                if (res?.success) {
                    alert(res?.message)
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('email')
                    navigate('/login')
                }
            })
    }
    const refreshTokenApi = async (params, navigate) => {
        let bearerToken = `Bearer ${params}`
        console.log('clientToken', params)
        return await fetch("https://auth-server-fmp.vercel.app/auth/refresh-token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "refreshToken=H8Awc73EBnafI8QvzRqE_",
                "Authorization": bearerToken,
            },
        })
            .then(res => res.json())
            .then((res) => {
                if (res.success) {
                    console.log(res?.data?.token)
                    sessionStorage.setItem('token', res?.data?.token);
                }
                else {
                    console.log(res?.data?.token)
                    alert('Failed :' + err?.message);
                    navigate('/login')
                }
            })
    }

    const callApiTest = async (params, navigate) => {
        let bearerToken = `Bearer ${params}`
        await fetch("https://auth-server-fmp.vercel.app/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearerToken,
            }
        })
            .then(res => res.json())
            .then((res) => {
                if (res?.success)
                    alert(res?.message)
                else {
                    refreshTokenApi(params, navigate)
                }
            });
    }

    return {
        loginApi,
        registerApi,
        refreshTokenApi,
        callApiTest,
        logoutApi
    }
}

export default ApiService