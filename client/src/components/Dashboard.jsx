import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full text-center border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard!</h1>
                <p className="text-gray-600 mb-6">You have successfully logged in with Airtable.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                    <a
                        href="/form-builder"
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                    >
                        Create a New Form
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;