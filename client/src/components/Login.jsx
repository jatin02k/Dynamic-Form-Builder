import React from "react";
const handleSubmit = () => {
    window.location.href = 'http://localhost:5000/api/auth/airtable';
}
const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full text-center border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to form Builder</h1>
                <p className="text-gray-600 mb-8">Connect your Airtable account to create and manage custom forms.</p>
                <button 
                onClick = {handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                    Login with Airtable
                </button>
            </div>
        </div>
    )
}
export default Login;