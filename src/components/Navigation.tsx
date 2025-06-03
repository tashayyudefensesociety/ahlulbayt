
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Basics', path: '/basics' },
    { title: 'Scholars', path: '/scholars' },
    { title: 'History', path: '/history' },
    { title: 'Misconceptions', path: '/misconceptions' },
    { title: 'Imams', path: '/imams' },
    { title: 'Articles', path: '/articles' },
    { title: 'Answering Sunnis', path: '/answering-sunnis' },
    { title: 'Questions', path: '/questions' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-1 py-3 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 text-sm md:text-base whitespace-nowrap ${
                location.pathname === item.path
                  ? 'bg-green-800 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <button className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2">
            Support Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
