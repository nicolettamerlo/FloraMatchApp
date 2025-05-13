import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FloraMatchProvider } from './context/FloraMatchContext';

const App = () => {
    return (
        <FloraMatchProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <ToastContainer position="top-center" autoClose={5000} />
             </Router>
        </FloraMatchProvider>
    );
};

export default App;
