
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarImages = () => {
  const imageLinks = [
    {
      id: 1,
      title: "Shia Scholars Portal",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      link: "/scholars",
      description: "Explore the lives and works of great Shia scholars"
    },
    {
      id: 2,
      title: "Historical Archives",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      link: "/history",
      description: "Discover the rich history of Tashayyu"
    },
    {
      id: 3,
      title: "Educational Resources",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop",
      link: "/basics",
      description: "Learn the fundamentals of Shia Islam"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-amber-500 pb-2">
          Featured Sections
        </h2>
        <div className="space-y-4">
          {imageLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block group hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-3 bg-gray-50">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Topics Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
          Browse Topics
        </h2>
        <div className="space-y-2">
          <Link to="/topics/latest" className="block text-blue-600 hover:text-blue-800 hover:underline">
            Latest Articles
          </Link>
          <Link to="/topics/popular" className="block text-blue-600 hover:text-blue-800 hover:underline">
            Most Popular
          </Link>
          <Link to="/topics/all" className="block text-blue-600 hover:text-blue-800 hover:underline">
            All Topics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarImages;
