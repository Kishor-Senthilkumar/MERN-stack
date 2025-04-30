import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {
    const [member, setMember] = useState({
        name: '',
        role: '',
        email: '',
        profileImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember({
            ...member,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/members', member);
            alert('Member added successfully!');
            setMember({
                name: 'KISHOR',
                role: 'STUDENT',
                email: 'KS(KISHOR)@GMAIL.COM',
                profileImage: ''
            });
        } catch (error) {
            console.error('Error adding member:', error);
            alert('Failed to add member. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Member</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={member.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Role:</label>
                    <input type="text" name="role" value={member.role} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={member.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Profile Image URL:</label>
                    <input type="text" name="profileImage" value={member.profileImage} onChange={handleChange} />
                </div>
                <button type="submit">Add Member</button>
            </form>
        </div>
    );
};

export default AddMember;