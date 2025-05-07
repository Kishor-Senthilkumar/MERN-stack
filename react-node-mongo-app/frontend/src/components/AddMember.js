import React, { useState } from 'react';
import { createMember } from '../services/api';
import '../styles/AddMember.css';

const AddMember = () => {
    const [member, setMember] = useState({
        name: '',
        role: '',
        email: '',
        registrationNumber: '',
        profileImage: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateRegistrationNumber = (value) => {
        return /^[A-Za-z0-9]+$/.test(value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember({
            ...member,
            [name]: value
        });
        // Clear error when user starts typing
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!validateRegistrationNumber(member.registrationNumber)) {
                setError('Registration number must contain only letters and numbers');
                return;
            }
            
            await createMember(member);
            setSuccess('Member added successfully!');
            setMember({
                name: '',
                role: '',
                email: '',
                registrationNumber: '',
                profileImage: ''
            });
            setError('');
        } catch (error) {
            console.error('Error adding member:', error);
            setError(error.response?.data?.message || 'Failed to add member. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="add-member-container">
            <h2 className="add-member-title">Add New Member</h2>
            <form className="add-member-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={member.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <input 
                        type="text" 
                        name="role" 
                        value={member.role} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={member.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Registration Number:</label>
                    <input 
                        type="text" 
                        name="registrationNumber" 
                        value={member.registrationNumber} 
                        onChange={handleChange}
                        placeholder="Enter alphanumeric value" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Profile Image URL:</label>
                    <input 
                        type="text" 
                        name="profileImage" 
                        value={member.profileImage} 
                        onChange={handleChange} 
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <button type="submit" className="submit-button">Add Member</button>
            </form>
        </div>
    );
};

export default AddMember;