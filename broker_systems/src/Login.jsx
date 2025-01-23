import React, { useState } from "react";

function Login({ onClose }) { // Accept onClose as a prop
    const [formData, setFormData] = useState({
        userId: '', // Field for user ID input
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted:", formData);
        alert(`You have successfully logged in. Your User ID is: ${formData.userId}`);
        // Here you can add logic to send data to an API for authentication
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <button type="button" id='close-btn' className="close-button" onClick={onClose}>X</button> {/* Close button */}
            <h2>Login</h2>
            <input
                type="text"
                name="userId"
                placeholder="User  ID"
                value={formData.userId}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit"><a href="Listing.jsx">Login</a></button>
        </form>
    );
}

export default Login;