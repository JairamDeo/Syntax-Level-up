import React, { useState } from 'react';
import axios from 'axios';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mob: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();

        // Append data to the formDataToSend object
        formDataToSend.append("access_key", "ad317595-d07b-4b97-9b2f-a3502c2c36a5");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("mob", formData.mob);
        formDataToSend.append("query", formData.query);

        /*validation of email and phone */
        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!formData.mob.match(/^[0-9]{10}$/)) {
            alert("Please enter a valid phone number!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/enquiryForm", formData);

            // Send data to web3forms
            const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            if (response.status === 200 && web3FormsResponse.status === 200) {
                alert("Form submitted successfully!");
                setFormData({
                    name: '',
                    email: '',
                    mob: '',
                    query: ''
                });
            } else {
                console.error("Form submission failed:", response.data.error);
                alert("An error occurred while submitting the form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form. Please try again later.");
        }
    };

    return (
        <div className=" lg:w-[450px] h-[440px]  lg:h-[460px] sm:w-[450px] sm:h-[480px] bg-white p-5 rounded-lg border border-[#0473EA33] shadow-md" data-aos="fade-left" data-aos-duration="2000">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold mt-2">Name:</label>
                <div className="relative mb-4">
                    <i className="fa-solid fa-person absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-semibold mt-2">Email:</label>
                <div className="relative mb-4">
                    <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <label htmlFor="mob" className="block mb-2 text-gray-700 font-semibold mt-2">Contact Number:</label>
                <div className="relative mb-4">
                    <i className="fa-solid fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    <input 
                        type="ph" 
                        id="mob" 
                        name="mob" 
                        placeholder="Enter your phone number" 
                        value={formData.mob} 
                        onChange={handleChange} 
                        maxLength={10}
                        required 
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <label htmlFor="query" className="block mb-2 text-gray-700 font-semibold mt-2">Any Query:</label>
                <div className="relative mb-4">
                    <i className="fa-solid fa-clipboard-question absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    <input 
                        type="text" 
                        id="query" 
                        name="query" 
                        placeholder="Enter your message!" 
                        value={formData.query} 
                        onChange={handleChange} 
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-2/3 h-10 mt-4 mx-auto block bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Enquire Now
                </button>
            </form>
        </div>
    );
}
