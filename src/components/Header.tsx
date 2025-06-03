
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Banner with golden gradient background */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Tashayyu Defense Society
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Defending the Authentic Islamic Tradition Through Scholarship and Knowledge
          </p>
        </div>
        
        {/* Decorative Islamic pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
