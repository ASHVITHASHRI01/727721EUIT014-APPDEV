import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './feedbackApi';
import '../styles/feedback.css'

const FeedBack = () => {
    const [formdata, setFormdata] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''

    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addFeedback(formdata);
            navigate('/ehome')
        }
        catch (error) {
            console.log(error);
        }

        console.log(formdata);
    }

    return (
        <div className='feedback'>
            <div className="down">
                <div className="f-login-form">
                    <h2>FEEDBACK</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='feedinput'
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Name"
                            id="name"
                            onChange={handleChange}
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Subject"
                            id="subject"
                            onChange={handleChange}
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Message"
                            id="message"
                            onChange={handleChange}
                            required
                        />
                        <button className='feedbutton' type="submit" id='fb'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;