// Listings.js
import React from 'react';

const Listings = ({ onViewHouseClick, onViewCarClick, onViewElectronicsClick, onViewProfessionalsClick }) => {
    const listings = [
        {
            id: 1,
            title: "3-Bedroom House in LA",
            price: "$500,000",
            location: "Los Angeles, CA",
            image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
            type: "house" // Added type for differentiation
        },
        {
            id: 2,
            title: "2020 Toyota Camry",
            price: "$20,000",
            location: "New York, NY",
            image: "https://www.shutterstock.com/image-photo/cars-sale-stock-row-car-600nw-636632101.jpg",
            type: "car" // Added type for differentiation
        },
        {
            id: 3,
            title: "Electronics",
            description: "Discover the latest gadgets and devices.",
            image: "https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=",
            type: "electronics" // Added type for differentiation
        },
        {
            id: 4,
            title: "Professionals",
            description: "Connect with skilled professionals near you.",
            image: "https://img.freepik.com/free-photo/rag-doll-blue-circles_1156-233.jpg?ga=GA1.1.1482432322.1722930152&semt=ais_hybrid",
            type: "professionals" // Added type for differentiation
        },
        // Add more listings as needed
    ];

    return (
        <div className="listings-page">
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#2A9DF4' }}>
                Available Listings
            </h1>
            <div className="listings-grid">
                {listings.map((listing) => (
                    <div key={listing.id} className="listing-card">
                        <img
                            src={listing.image}
                            alt={listing.title}
                            className="listing-image"
                        />
                        <h3 className="listing-title">{listing.title}</h3>
                        {listing.price && <p className="listing-price">{listing.price}</p>}
                        {listing.location && <p className="listing-location">{listing.location}</p>}
                        {listing.description && <p className="listing-description">{listing.description}</p>}
                        
                        {listing.type === "house" && (
                            <button className="view-details-button" onClick={onViewHouseClick}>
                                View House
                            </button>
                        )}
                        {listing.type === "car" && (
                            <button className="view-details-button" onClick={onViewCarClick}>
                                View Car
                            </button>
                        )}
                        {listing.type === "electronics" && (
                            <button className="view-details-button" onClick={onViewElectronicsClick}>
                                Browse Electronics
                            </button>
                        )}
                        {listing.type === "professionals" && (
                            <button className="view-details-button" onClick={onViewProfessionalsClick}>
                                Browse Professionals
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listings;