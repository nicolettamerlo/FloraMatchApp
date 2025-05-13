// src/pages/Page404.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Page404 = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="main min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-[var(--color-background)] text-[var(--color-muted)] font-body text-center">
            <Header />
            <div className="bg-primary-transparent-3 p-4 rounded">
                <h1 className="text-6xl sm:text-7xl font-display tracking-wide text-[var(--color-accent)] drop-shadow-md">
                    404
                </h1>
                <p className="text-lg sm:text-xl mt-3">
                    The page you're looking for doesn't exist.
                </p>
                <button
                    onClick={handleBackHome}
                    className="btn-large mt-4"
                >
                    Go back to homepage
                </button>

            </div>
        </div>
    );
};

export default Page404;
