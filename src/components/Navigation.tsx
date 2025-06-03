
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Basics', path: '/basics' },
    { title: 'Scholars', path: '/scholars' },
    { title: 'History', path: '/history' },
    { title: 'Misconceptions', path: '/misconceptions' },
    { title: 'Articles', path: '/articles' },
    { title: 'Answering Sunnis', path: '/answering-sunnis' },
    { title: 'Questions', path: '/questions' },
  ];

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-2 py-3 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium text-sm md:text-base whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
