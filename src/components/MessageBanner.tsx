
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Feather, BookOpen } from 'lucide-react';

const MessageBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-green-900 py-6 border-b-2 border-green-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex-1 mb-3 md:mb-0 text-center md:text-left">
            <p className="text-lg md:text-xl font-bold">
              Promoting authentic Islam, refuting the lies of the Nasibi Qur'an deniers.
              <span className="block mt-1 font-normal">
                Read <Link to="/articles" className="text-green-800 font-semibold underline">this article</Link> for an introduction to Orthodox Islam.
              </span>
            </p>
          </div>
          <div className="flex space-x-3">
            <Star className="text-3xl opacity-80" size={32} />
            <Feather className="text-3xl opacity-80" size={32} />
            <BookOpen className="text-3xl opacity-80" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBanner;
