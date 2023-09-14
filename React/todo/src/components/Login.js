import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const hostName = "http://localhost:4000"
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${hostName}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the authtoken and redirect
            localStorage.setItem('token',json.authtoken)
            localStorage.setItem("username",json.name)
            navigate("/");
            props.showAlert("Logged In successfully","Success")
        }
        else{
            props.showAlert("Invalid Credintials","Error")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <main className="flex mt-10">
                <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
                    <div className="relative">
                        <h1 className="text-center  text-3xl font-medium tracking-tight text-gray-900">Login</h1>
                        <p className="mt-3 text-center text-lg text-gray-600">
                            Don't have an account?{'  '}
                            <Link to="/register" className="text-gray-700 font-medium hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className=" mt-5 flex-auto bg-white shadow-2xl sshadow-gray-900/10 sm:mx-0 sm:flex-none px-20 py-10 rounded-[2.5rem]">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-xl font-normal text-black">Email</label>
                                    <input id="email" type="email" name="email" className="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none text-sm" autoComplete="email"
                                        placeholder="Enter Your Email" required value={credentials.email} onChange={onChange}/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="mb-2 block text-xl font-normal text-black">Password</label>
                                    <input id="password" type="password" name="password" className="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none text-sm" autoComplete="Password"
                                        placeholder="Enter Your Password" required value={credentials.password} onChange={onChange}/>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-5">
                                <Link href="/login"
                                    className="font-semibold text-gray-700 hover:underline">Forgot
                                    password?</Link>
                            </div>

                            <button type="submit"
                                className="mt-10 w-full text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-lg tracking-wide px-5 py-2.5 text-center">Login</button>
                        </form>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Login