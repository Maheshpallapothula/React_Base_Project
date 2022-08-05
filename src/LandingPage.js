import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div>
            <Header/>
            </div>
            <header className="Landing-header">
                <br/>
                <h1>Welcome To The TicketsRegistration.Org</h1>
                <img src="https://www.swipez.in/images/product/online-event-registration.svg" className="Landing-logo" alt="logo1" />
                <p>Hey Welcome To Ticket Registrations. Happy to see you Here Buddy.</p>
                <Link to="/coupons" className='Landing-link'>Click Here To Show You'r Avail Coupons.</Link><br />
                <br/><br/><h2>This Time Celebrate Your Festival's With Your's Favourite And Loved One's</h2>
                <img src="https://www.swipez.in/images/product/event-registration/features/qr-code-based-event-entry.svg" className="Landing-logo1" alt="logo1" />
                <br/><br/><br/>
                <h3>Hey! Are You Connected With Us. Go And Check For Active Discount's Posted In our Social Media's.</h3>
                <p>Connect And Enjoy Upto 20% OFF.</p>
                <img src="https://www.swipez.in/images/product/event-registration/features/promote-events-online.svg" className="Landing-logo2" alt="logo2" />
                <img src="https://www.swipez.in/images/product/event-registration/features/international-payment-collections.svg" className='Landing-logo3' alt='logo3' />
                <h3>Travel With Us Internationally. Flight Tickets Upto 50% OFF.</h3>
            </header>
            <footer className='Landing-footer'>
                <h5>© 2022 @TicketsRegistration.Org </h5>
            </footer>
        </div>
    )
}

export default LandingPage