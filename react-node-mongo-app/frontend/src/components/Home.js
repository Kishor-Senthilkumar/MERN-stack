import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Team Management App</h1>
            <h2>Team Name: Awesome Team</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/add-member">Add Member</Link>
                    </li>
                    <li>
                        <Link to="/view-members">View Members</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;