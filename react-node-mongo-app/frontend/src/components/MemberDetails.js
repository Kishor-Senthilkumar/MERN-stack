import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMemberById } from '../services/api';
import '../styles/ViewMembers.css';

const MemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const data = await getMemberById(id);
                setMember(data);
            } catch (err) {
                setError('Error fetching member details');
            } finally {
                setLoading(false);
            }
        };

        fetchMember();
    }, [id]);

    if (loading) return <div className="loading-message">Loading member details...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="members-container">
            <h1 className="members-title">Member Details</h1>
            {member ? (
                <div className="member-details">
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img
                            src={member.profileImage || 'https://via.placeholder.com/150'}
                            alt={member.name}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '15px'
                            }}
                        />
                        <h2>{member.name}</h2>
                    </div>
                    <table className="members-table">
                        <tbody>
                            <tr>
                                <th>Role</th>
                                <td>{member.role}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{member.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="no-members">No member found</p>
            )}
        </div>
    );
};

export default MemberDetails;