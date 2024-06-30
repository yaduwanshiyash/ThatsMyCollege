'use client'
import React, { useState } from 'react';
import { MdOutlineMarkEmailUnread, MdLocationPin } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { sendContactForm } from '@/lib/api';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner'

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // form validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setIsLoading(false);
      return toast.error('Please fill in all fields.');
    }

    // More specific email validation
    if (!isValidEmail(formData.email)) {
      setIsLoading(false);
      return toast.error('Please enter a valid email.');
    }

    try {
      await sendContactForm(formData);
      toast(<div><p>✅ Mail sent successfully</p><p>We will contact you soon.</p></div>);
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Error! Try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  return (
    <>
      <div className="container mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Contact Form */}
        <div className="lg:col-span-1 bg-white py-6 px-8 rounded-md">
          <h1 className="text-2xl font-semibold mb-6 flex text-blue-500"><MdOutlineMarkEmailUnread className='mt-1' />&nbsp; Send A Mail For Any Query</h1>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                Mobile
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="number"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? (
                  <RotatingLines strokeColor="white" strokeWidth="4" animationDuration="0.75" width="25" visible={true} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Address and details */}
        <div className="lg:col-span-1 mt-8 lg:mt-0 ">
          <div className='bg-white py-6 px-8 rounded-md'>
            <h2 className="text-xl font-semibold mb-4 text-slate-700">Contact Us</h2>
            <p className="text-gray-700 flex">
              <strong><MdLocationPin className='text-xl text-blue-500 mr-3' /></strong> BS Library, Plots no 72, Sector C Indrapuri, Bhopal, India
            </p>
            <p className="text-gray-700 flex">
              <strong><HiPhone className='text-xl text-blue-500 mr-3' /></strong> +91 7389796980
            </p>
            <p className="text-gray-700 flex">
              <strong><FaEnvelope className='text-xl text-blue-500 mr-3' /></strong> thatsmycollege@outlook.com
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-700">Follow us on </h2>
            <div className="flex">
              <a href="#" className="w-10 h-10 bg-blue-400 bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-500 hover:text-white" target='_blank'>
                <FaFacebookF />
              </a>
              <a href="https://x.com/thatsmycollege?s=08" className="w-10 h-10 bg-blue-400 bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-500 hover:text-white" target='_blank'>
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/thats_mycollege?utm_source=qr&igsh=czVsdmxnejI3Z3Ro" className="w-10 h-10 bg-blue-400 bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-500 hover:text-white" target='_blank'>
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/that-s-my-college-3470392ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 bg-blue-400 bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-500 hover:text-white" target='_blank'>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className='h-72 w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.8326152639311!2d77.4637789926512!3d23.25196948816571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43aba6ff2abd%3A0x64fad68413137cba!2sBs%20library!5e0!3m2!1sen!2sin!4v1693935467279!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Contact;
