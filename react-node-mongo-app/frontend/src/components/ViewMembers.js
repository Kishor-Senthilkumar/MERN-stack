import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembers = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('/api/members');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div>
            <h1>Team Members</h1>
            <ul>
                {members.map(member => (
                    <li key={member._id}>
                        <img src={member.profileImage} alt={member.name} width="50" />
                        <h2>{member.name}</h2>
                        <p>Role: {member.role}</p>
                        <Link to={`/members/${member._id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewMembers;