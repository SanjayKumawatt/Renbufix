import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
// Ensure you have a logo at this path or change the import
import logo from "../assets/logo.png"; 


const Footer = () => {

    const companyLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
    ];

    return (
        <footer className="bg-[#101828] border-t border-[#101828]">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Left Column: Logo and Description */}
                    <div className="md:col-span-5 lg:col-span-5">
                        <Link to="/" className="flex items-center gap-2 mb-4" >
                            <img src={logo} alt="Renbufix Logo" className='h-17' />
                            
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Renbufix Technologies is a premier IT solutions provider, dedicated to transforming businesses through innovation, reliable software, and strategic digital growth.
                        </p>
                    </div>

                    {/* Middle Column: Company Links */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <h3 className="text-lg font-bold text-gray-200 mb-4">Company</h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="md:col-span-4 lg:col-span-4">
                        <h3 className="text-lg font-bold text-gray-200 mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                                <p className="ml-3 text-gray-400 text-sm leading-relaxed">
                                    G 24 Block 20, Dheeraj Nagar, Amarnagar (Faridabad),<br />
                                    Faridabad, Haryana, India - 121003
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                                <a href="mailto:support@renbufix.com" className="ml-3 text-gray-400 hover:text-blue-600 transition-colors text-sm">
                                    support@renbufix.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} RENBUFIX TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;