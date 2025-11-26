import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../assets/logo.png"; // Make sure logo yahan existing ho

// SVG Icon for Hamburger Menu
const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

// SVG Icon for Chevron Down
const ChevronDownIcon = () => (
    <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll animation logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Navigation items
    const companyLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
    ];

    const itServices = [
        { name: 'Static Website Development', path: '/static-website' },
        { name: 'Dynamic Website', path: '/dynamic-website' },
        { name: 'Logo & Graphic Designing', path: '/logo-design' },
        { name: 'Custom Software Development', path: '/custom-software' },
        { name: 'Ecommerce Software Development', path: '/ecommerce-software' },
        { name: 'Mobile App Development', path: '/mobile-app' },
        
        { name: 'Service Now', path: '/service-now' },
        { name: 'Product Development', path: '/product-development' },

        { name: 'SEO/SMO Services', path: '/seo-smo' },
        { name: 'Payment Gateway', path: '/payment-gateway' },
    ];

    const itProducts = [
        { name: 'Mobile Recharge Software', path: '/product/mobile-recharge' },
        { name: 'Loan Management Software', path: '/product/loan-management' },
        { name: 'E-commerce Software', path: '/product/ecommerce' },
        { name: 'Education Management Software', path: '/product/education' },
        { name: 'Travel Software', path: '/product/travel' },
        { name: 'CRM Software', path: '/product/crm' },
    ];

    return (
        <header className={`fixed block top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50 transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4">
                <nav className='flex items-center justify-between h-20 lg:h-24'> {/* Height thoda adjust kiya safe side ke liye */}
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2" >
                        {/* Logo Image */}
                        <img src={logo} alt="Renbufix Logo" className='h-10 lg:h-14' /> 
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center space-x-8">
                        {/* Company Dropdown */}
                        <li className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-4">
                                Company <ChevronDownIcon />
                            </button>
                            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-52 py-2 border border-gray-100">
                                {companyLinks.map(link => (
                                    <Link key={link.name} to={link.path} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </li>

                        {/* IT Services Dropdown */}
                        <li className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-4">
                                IT Services <ChevronDownIcon />
                            </button>
                            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-72 py-2 border border-gray-100">
                                {itServices.map(service => (
                                    <Link key={service.name} to={service.path} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </li>

                        {/* IT Products Dropdown */}
                        <li className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-4">
                                IT Products <ChevronDownIcon />
                            </button>
                            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-72 py-2 border border-gray-100">
                                {itProducts.map(product => (
                                    <Link key={product.name} to={product.path} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    </ul>

                    {/* Contact Button & Hamburger Menu */}
                    <div className="flex items-center space-x-4">
                        <Link to={"/contact"}>
                            <button className="cursor-pointer hidden sm:block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                                CONTACT US
                            </button>
                        </Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-800 focus:outline-none">
                            <HamburgerIcon />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto shadow-inner">
                    <div className="flex flex-col items-center p-4 space-y-2">
                        <details className="w-full group">
                            <summary className="py-3 text-center font-medium cursor-pointer list-none hover:text-blue-600 transition-colors">Company</summary>
                            <div className="flex flex-col space-y-1 pb-2">
                                {companyLinks.map(link => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="block py-2 text-center text-sm text-gray-600 bg-gray-50 rounded-md"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <details className="w-full group">
                            <summary className="py-3 text-center font-medium cursor-pointer list-none hover:text-blue-600 transition-colors">IT Services</summary>
                            <div className="flex flex-col space-y-1 pb-2">
                                {itServices.map(service => (
                                    <Link
                                        key={service.name}
                                        to={service.path}
                                        className="block py-2 text-center text-sm text-gray-600 bg-gray-50 rounded-md"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <details className="w-full group">
                            <summary className="py-3 text-center font-medium cursor-pointer list-none hover:text-blue-600 transition-colors">IT Products</summary>
                            <div className="flex flex-col space-y-1 pb-2">
                                {itProducts.map(product => (
                                    <Link
                                        key={product.name}
                                        to={product.path}
                                        className="block py-2 text-center text-sm text-gray-600 bg-gray-50 rounded-md"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {product.name}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <Link to={"/contact"} onClick={() => setIsMenuOpen(false)} className="w-full pt-4">
                            <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 shadow-md">
                                CONTACT US
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;