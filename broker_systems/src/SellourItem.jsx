import React, { useState } from "react";

function SellYourItem({ onClose }) {
    const [formData, setFormData] = useState({
        description: '',
        contact: '',
        location: '',
        image: null,
        price: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to send the data
        const data = new FormData();
        data.append('description', formData.description);
        data.append('contact', formData.contact);
        data.append('location', formData.location);
        data.append('image', formData.image);
        data.append('price', formData.price);

        // Send the data to your server or API endpoint
        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Optionally reset the form or show a success message
                setFormData({
                    description: '',
                    contact: '',
                    location: '',
                    image: null,
                    price: ''
                });
                onClose(); // Close the form after successful submission
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button type="button" id='close-btn-sellouritem' className="close-button" onClick={onClose}>X</button>
            <h2 id="unique-sell-item-title">Sell Your Item</h2>
            <form id="unique-sell-item-form" onSubmit={handleSubmit}>
                <label htmlFor="unique-item-description">
                    Item Description:
                    <textarea
                        id="unique-item-description"
                        className="unique-sell-item-description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="unique-contact-info">
                    Contact Information:
                    <input
                        type="text"
                        id="unique-contact-info"
                        className="unique-sell-item-contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="unique-item-location">
                    Location:
                    <input
                        type="text"
                        id="unique-item-location"
                        className="unique-sell-item-location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="unique-item-image">
                    Upload Image:
                    <input
                        type="file"
                        id="unique-item-image"
                        className="unique-sell-item-image"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="unique-item-price">
                    Price:
                    <input
                        type="number"
                        id="unique-item-price"
                        className="unique-sell-item-price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="unique-sell-item-submit" onClick={() => alert('Form submitted successfully!')} >
                   <a href="Listing.jsx">Submit</a> 
                </button>
            </form>
        </div>
    );
}

export default SellYourItem;