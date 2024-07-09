import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EnquiryMade() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getEnquiries');
        setEnquiries(response.data);
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    };
    fetchEnquiries();
  }, []);

  return (
    <div className='py-[80px] px-4 flex flex-col lg:flex-row flex-wrap justify-around gap-[2rem]'>
      {enquiries.map((enquiry, index) => (
        <div key={index} className="enquirybox lg:w-[420px] h-[520px] lg:h-[520px] sm:w-[420px] sm:h-[520px] bg-white p-5 rounded-lg border border-[#0473EA33] shadow-coursebox">
          <form>
            <h1 className='text-[24px] font-bold text-center'>Enquiries</h1>
            <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold mt-2">Name:</label>
            <div className="relative mb-4">
              <i className="fa-solid fa-person absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                id="name"
                name="name"
                value={enquiry.name}
                readOnly
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
                value={enquiry.email}
                readOnly
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <label htmlFor="mob" className="block mb-2 text-gray-700 font-semibold mt-2">Contact Number:</label>
            <div className="relative mb-4">
              <i className="fa-solid fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                id="mob"
                name="mob"
                value={enquiry.mobile}
                readOnly
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <label htmlFor="query" className="block mb-2 text-gray-700 font-semibold mt-2">Query:</label>
            <div className="relative mb-4">
              <i className="fa-solid fa-clipboard-question absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                id="query"
                name="query"
                value={enquiry.query}
                readOnly
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <label htmlFor="date" className="block mb-2 text-gray-700 font-semibold mt-2">Date:</label>
            <div className="relative mb-4">
              <i className="fa-solid fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                id="date"
                name="date"
                value={new Date(enquiry.date).toLocaleString()}
                readOnly
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}
