import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await axios.get(`/api/members/${id}`);
                setMember(response.data);
            } catch (err) {
                setError('Error fetching member details');
            } finally {
                setLoading(false);
            }
        };

        fetchMember();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Member Details</h1>
            {member ? (
                <div>
                    <h2>{member.name}</h2>
                    <p>Role: {member.role}</p>
                    <p>Email: {member.email}</p>
                    {member.profileImage && <img src={member.profileImage} alt={member.name} />}
                </div>
            ) : (
                <p>No member found</p>
            )}
        </div>
    );
};

export default MemberDetails;