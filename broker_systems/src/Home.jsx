import React, { useState } from "react";
import SellYourItem from "./SellourItem.jsx"; // Make sure to import the SellYourItem component

function Home() {
    const [showSellItem, setShowSellItem] = useState(false);

    const handleSellButtonClick = () => {
        setShowSellItem(true); // Show the SellYourItem component
    };

    return (
        <>
            <header id="home" className="main-banner">
                <div className="banner-content">
                    <h1>Find Your Perfect Listing</h1>
                    <input type="text" placeholder="Search for listings..." className="search-bar" />
                    <div className="banner-buttons">
                        <button className="browse-button">Browse Listings</button>
                        <button className="sell-button" onClick={handleSellButtonClick}>
                            Sell Your Item
                        </button>
                    </div>
                </div>
            </header>
            {/* Conditionally render the SellYourItem component */}
            {showSellItem && <SellYourItem onCancel={() => setShowSellItem(false)} />}
            {/* Other sections of the homepage */}
        </>
    );
}

export default Home;