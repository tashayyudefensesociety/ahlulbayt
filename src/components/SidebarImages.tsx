
import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';

const SidebarImages = () => {
  const imageLinks = [
    {
      id: 1,
      title: "Sacred Architecture",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=200&fit=crop",
      link: "/scholars",
      description: "Explore the sacred architecture and history"
    },
    {
      id: 2,
      title: "Islamic Calligraphy",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=200&fit=crop",
      link: "/history",
      description: "Discover the beauty of Islamic artistic tradition"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 bg-green-800 text-white">
          <h3 className="text-xl font-bold flex items-center">
            <Image className="mr-2" size={24} />
            Featured Visuals
          </h3>
        </div>
        <div className="space-y-0">
          {imageLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block group hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="text-white p-4">
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Topics Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-900 mb-4 border-b-2 border-yellow-500 pb-2">
          Browse Topics
        </h2>
        <div className="space-y-3">
          <Link to="/articles" className="block text-green-700 hover:text-green-900 hover:underline font-medium">
            Latest Articles
          </Link>
          <Link to="/basics" className="block text-green-700 hover:text-green-900 hover:underline font-medium">
            Basic Beliefs
          </Link>
          <Link to="/imams" className="block text-green-700 hover:text-green-900 hover:underline font-medium">
            The Twelve Imams
          </Link>
          <Link to="/history" className="block text-green-700 hover:text-green-900 hover:underline font-medium">
            Islamic History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarImages;
