import React from "react";

function Aboutus() {
    return (
        <div className="about-us">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Welcome to BrokerBride, your trusted digital broker management system.</p>
            </header>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    To revolutionize the way people buy and sell goods and services by providing a safe, efficient, and user-friendly online platform that connects buyers and sellers seamlessly.
                </p>
            </section>

            <section className="company-overview">
                <h2>Company Overview</h2>
                <p>
                    BrokerBride is a leading online platform that connects buyers and sellers across various categories, including cars, houses, electronics, and professional services. We strive to create a trustworthy and convenient marketplace where users can easily find what they're looking for and complete transactions with confidence.
                </p>
            </section>

            <section className="key-features">
                <h2>Key Features and Benefits</h2>
                <div className="features">
                    <h3>For Sellers:</h3>
                    <ul>
                        <li>Create and manage listings with ease.</li>
                        <li>Reach a wider audience with targeted advertising options.</li>
                        <li>Secure payment processing and buyer protection.</li>
                    </ul>
                </div>
                <div className="features">
                    <h3>For Buyers:</h3>
                    <ul>
                        <li>Browse a vast selection of listings with advanced search filters.</li>
                        <li>Communicate securely with sellers.</li>
                        <li>Enjoy a safe and hassle-free buying experience.</li>
                    </ul>
                </div>
            </section>

            <section className="team-culture">
                <h2>Our Team and Culture</h2>
                <p>
                    Our dedicated team of professionals is committed to providing exceptional service and support. We value integrity, innovation, and customer satisfaction, ensuring that our platform remains user-friendly and efficient.
                </p>
            </section>

            
            <footer className="about-footer">
                <p>Join us in revolutionizing the way buyers and sellers connect in the digital marketplace.</p>
            </footer>
        </div>
    );
}

export default Aboutus;