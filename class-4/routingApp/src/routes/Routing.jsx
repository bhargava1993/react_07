import {Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Listing from '../components/Listing';
import Login from '../components/Login';
import PageNotFound from '../components/PageNotFound';
import User from '../components/User';

export default function Routing() {
    return (
        <Routes>
            {/* defaut router */}
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/listing/:id" element={<Listing />} />

            <Route path="/login" element={<Login />} />

            <Route path="/user/:id" element={<User />} />

            {/* wildcard Route */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}