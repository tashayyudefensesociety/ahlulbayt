
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';
import RecentArticles from '../components/RecentArticles';
import SearchSection from '../components/SearchSection';
import SidebarImages from '../components/SidebarImages';

const Index = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content area - Recent Articles */}
          <div className="lg:w-2/3">
            <RecentArticles />
          </div>
          
          {/* Sidebar - Search, Images and Topics */}
          <div className="lg:w-1/3">
            <SearchSection />
            <SidebarImages />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2 font-bold">Tashayyu Defense Society</p>
          <p className="text-green-200">Preserving and defending authentic Islamic scholarship</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
