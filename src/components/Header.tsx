
import React from 'react';
import { Link } from 'react-router-dom';
import { Mosque, BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Banner with Islamic green gradient background */}
      <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 py-8 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Mosque className="text-4xl text-yellow-300" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              Tashayyu Defense Society
            </h1>
            <BookOpen className="text-4xl text-yellow-300" size={48} />
          </div>
          <p className="text-lg md:text-xl text-green-100 italic font-medium">
            Defending Authentic Islam Through Wisdom and Knowledge
          </p>
        </div>
        
        {/* Decorative Islamic pattern overlay */}
        <div className="absolute inset-0 islamic-pattern opacity-15" />
      </div>
    </header>
  );
};

export default Header;
