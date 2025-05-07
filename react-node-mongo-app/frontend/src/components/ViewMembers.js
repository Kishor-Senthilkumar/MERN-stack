import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllMembers } from '../services/api';
import '../styles/ViewMembers.css';

const ViewMembers = () => {
    const [members, setMembers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const data = await getAllMembers();
            setMembers(data);
            setError('');
        } catch (error) {
            console.error('Error fetching members:', error);
            setError('Failed to fetch members. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading-message">Loading members...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="members-container">
            <h1 className="members-title">Team Members</h1>
            {members.length > 0 ? (
                <>
                    <div className="members-controls">
                        <Link to="/add-member" className="view-details-button">Add New Member</Link>
                    </div>
                    <div className="members-table-wrapper">
                        <table className="members-table">
                            <thead>
                                <tr>
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Reg. Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    <tr key={member._id}>
                                        <td>
                                            <img
                                                src={member.profileImage || 'https://via.placeholder.com/50'}
                                                alt={member.name}
                                                className="member-image"
                                            />
                                        </td>
                                        <td>{member.name}</td>
                                        <td>{member.role}</td>
                                        <td>{member.email}</td>
                                        <td>{member.registrationNumber}</td>
                                        <td>
                                            <Link 
                                                to={`/members/${member._id}`}
                                                className="view-details-button"
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="no-members">No team members found.</div>
            )}
        </div>
    );
};

export default ViewMembers;