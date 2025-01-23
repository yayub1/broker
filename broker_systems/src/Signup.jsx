import React, { useState } from "react";

function Signup({ onClose }) { // Accept onClose as a prop
    const [formData, setFormData] = useState({
        nameWithFather: '',
        surname: '',
        age: '',
        citizen: '',
        phoneNumber: '',
        email: '',
        validIdentityCard: '',
        password: '',
        houseNumber: '',
        bookNumber: '',
        accountType: '',
        selectedBank: '' // New field for selected bank
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
        const generatedId = Math.floor(Math.random() * 1000000); // Generate a random ID
        console.log("Form submitted:", { ...formData, userId: generatedId });
        alert(`You have successfully registered. Your User ID is: ${generatedId}`);
        // Here you can add logic to send data to an API
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <button type="button" id='close-btn' className="close-button" onClick={onClose}>X</button> {/* Close button */}
            <h2>Signup</h2>
            <input
                type="text"
                name="nameWithFather"
                placeholder="Name with Father"
                value={formData.nameWithFather}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="citizen"
                placeholder="Citizen"
                value={formData.citizen}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
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
                type="text"
                name="validIdentityCard"
                placeholder="Valid Identity Card"
                value={formData.validIdentityCard}
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
            <input
                type="text"
                name="houseNumber"
                placeholder="House Number"
                value={formData.houseNumber}
                onChange={handleChange}
                required
            />
            
            {/* Bank Selection Dropdown */}
            <label htmlFor="selectedBank">Select Bank:</label>
            <select
                name="selectedBank"
                value={formData.selectedBank}
                onChange={handleChange}
                required
                id="bankoption"
            >
                <option value="">-- Select Bank --</option>
                <option value="buna">Buna Bank</option>
                <option value="cbe">Commercial Bank of Ethiopia (CBE)</option>
                <option value="dashen">Dashen Bank</option>
                <option value="awash">Awash International Bank</option>
                <option value="bankofabyssinia">Bank of Abyssinia</option>
                <option value="hibret">Hibret Bank</option>
                <option value="lion">Lion International Bank</option>
                <option value="zemen">Zemen Bank</option>
                <option value="abysinia">Abysinia Bank</option>
                <option value=" Oromia">Oromia International Bank</option>
                <option value="other">Other</option>
            </select>

            <input
                type="number"
                name="bookNumber"
                placeholder="Book Number"
                value={formData.bookNumber}
                onChange={handleChange}
                required
                id="booknumber"
            />
            
            <button type="submit"> <a href="LIsting.jsx">Signup</a></button>
        </form>
    );
}

export default Signup;