
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  console.log('Footer rendered');

  return (
    <footer className="bg-gray-100 border-t py-6 mt-8 text-sm text-gray-600">
      {/*<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">*/}
      <div  style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}>

        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} My Zirayco Shop. All rights reserved.
        </div>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '14px',
    position: 'relative', // default position
    bottom: 0,
    width: '100%',
  },
};

export default Footer;







