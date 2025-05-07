import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Team Management App</h1>
            <h2 className="home-subtitle">Manage Your Team Members Efficiently</h2>
            <nav className="nav-menu">
                <Link to="/add-member" className="nav-link">Add Member</Link>
                <Link to="/view-members" className="nav-link">View Members</Link>
            </nav>
        </div>
    );
};

export default Home;