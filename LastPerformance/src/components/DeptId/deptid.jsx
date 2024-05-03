import React, { useState } from 'react';
import './deptid.css';
import axios from 'axios';
import password_icon from '../Assets/password.png';

const Deptid = () => {
    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/verify-id', { id });
            if (response.data.authorized) {
                window.location.href = '/RegistrationForm'; // Navigate to Registration
            } else {
                alert('You are not authorized to Use');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error checking ID');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Registration Form</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input
                            type="password"
                            placeholder='Your ID...'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                </div>
                <div className='submit-container'>
                    <button type="submit" className="reg-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Deptid;
