import { useState } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Listings from './Listings.jsx';
import Aboutus from './AboutUs.jsx';
import Contact from './Contact.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import House from './House.jsx';
import Car from './Ca.jsx';
import Electronics from './Electronics.jsx';
import Professionals from './Professionals.jsx';
import SellYourItem from './SellourItem.jsx';

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showHouse, setShowHouse] = useState(false);
    const [showCar, setShowCar] = useState(false);
    const [showElectronics, setShowElectronics] = useState(false);
    const [showProfessionals, setShowProfessionals] = useState(false);
    const [showSellItem, setShowSellItem] = useState(false);

    const handleOpenSellItem = () => {
        setShowSellItem(true);
    };

    const handleCloseSellItem = () => {
        setShowSellItem(false);
    };

    return (
        <div className="App">
            <Navbar 
                onSignupClick={() => setShowSignup(prev => !prev)} 
                onLoginClick={() => setShowLogin(prev => !prev)} 
                onSellItemClick={handleOpenSellItem} 
            />
            {showSignup && <Signup onClose={() => setShowSignup(false)} />}
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
            {showHouse && <House onBackClick={() => setShowHouse(false)} />}
            {showCar && <Car onBackClick={() => setShowCar(false)} />}
            {showElectronics && <Electronics onBackClick={() => setShowElectronics(false)} />}
            {showProfessionals && <Professionals onBackClick={() => setShowProfessionals(false)} />}
            {showSellItem && <SellYourItem onClose={handleCloseSellItem} />}
            {!showSignup && !showLogin && !showHouse && !showCar && !showElectronics && !showProfessionals && !showSellItem && (
                <>
                    <Home />
                    <Listings 
                        onViewHouseClick={() => { setShowHouse(true); setShowCar(false); setShowElectronics(false); setShowProfessionals(false); }} 
                        onViewCarClick={() => { setShowCar(true); setShowHouse(false); setShowElectronics(false); setShowProfessionals(false); }}
                        onViewElectronicsClick={() => { setShowElectronics(true); setShowHouse(false); setShowCar(false); setShowProfessionals(false); }}
                        onViewProfessionalsClick={() => { setShowProfessionals(true); setShowElectronics(false); setShowHouse(false); setShowCar(false); }}
                    />
                    <Aboutus />
                    <Contact />
                </>
            )}
        </div>
    );
}

export default App;