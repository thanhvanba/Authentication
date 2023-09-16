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
            }).then((resp) => {
                    if (resp.success) {
                        alert(resp?.message);
                        sessionStorage.removeItem('token');
                        sessionStorage.setItem('token', resp?.data?.token);
                        localStorage.setItem('token', resp?.data?.token)
                        navigate('/home') 
                    } else {
                        throw new Error(resp?.message)
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

    const refreshTokenApi = async (params) => {
        let bearerToken = `Bearer ${params}`
        return await fetch("https://auth-server-fmp.vercel.app/auth/refresh-token", {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                "Authorization": bearerToken,
            },
        })
        .then(res => res.json())
        .catch((err) => { 
            alert('Failed :' + err?.message);
        });
    }

    const callApiTest = async (params) => {
        let bearerToken = `Bearer ${params}`
        return await fetch("https://auth-server-fmp.vercel.app/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearerToken,
            },
        })
        .then(res => res.json())
        .catch((err) => { 
            alert('Failed :' + err?.message);
        });
    }

    return {
        loginApi,
        registerApi, 
        refreshTokenApi,
        callApiTest
    }
}

export default ApiService