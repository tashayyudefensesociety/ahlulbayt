
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import RecentArticles from '../components/RecentArticles';
import SidebarImages from '../components/SidebarImages';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Navigation />
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area - Recent Articles */}
          <div className="lg:col-span-2">
            <RecentArticles />
          </div>
          
          {/* Sidebar - Images and Topics */}
          <div className="lg:col-span-1">
            <SidebarImages />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Tashayyu Defense Society</p>
          <p className="text-gray-400">Preserving and defending authentic Islamic scholarship</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
