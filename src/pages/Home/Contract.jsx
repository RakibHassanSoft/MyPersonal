import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contract = () => {
    return (
        <div className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Contact and Subscription Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-gray-400">Your Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-green-500 border-gray-600" placeholder="Your email address" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-400">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-green-500 border-gray-600" placeholder="Your message"></textarea>
                            </div>
                            <div className="flex items-center">
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Send Message</button>
                            </div>
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Social Links</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <a href="https://facebook.com" className="flex items-center text-gray-300 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-xl mr-2" />
                                    <span className="text-white">Facebook</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="https://twitter.com" className="flex items-center text-gray-300 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="text-xl mr-2" />
                                    <span className="text-white">Twitter</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="https://linkedin.com" className="flex items-center text-gray-300 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-xl mr-2" />
                                    <span className="text-white">LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Subscription Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
                    <form className="flex items-center space-x-4">
                        <input type="email" className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-green-500 border-gray-600" placeholder="Your email address" />
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contract;
