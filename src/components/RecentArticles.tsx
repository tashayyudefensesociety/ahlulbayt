
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ArrowRight } from 'lucide-react';

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Concept of Imamate in Shia Islam",
      author: "Dr. Ali Kazmi",
      date: "October 12, 2023",
      excerpt: "The institution of Imamate represents a fundamental pillar of Shia Islam, established through divine designation rather than human selection. This article explores theological foundations and scriptural evidence for the divinely appointed succession from Prophet Muhammad (PBUH) to the twelve Imams. We examine how the concept of Imamate differs from political leadership and represents spiritual guidance for the Muslim community.",
      slug: "concept-of-imamate-shia-islam"
    },
    {
      id: 2,
      title: "Historical Analysis: The Event of Ghadir Khumm",
      author: "Scholar Fatima Jafri",
      date: "October 5, 2023",
      excerpt: "Examination of historical records reveals that the Prophet Muhammad (PBUH) appointed Imam Ali (AS) as his successor at Ghadir Khumm. Multiple Sunni sources confirm this event despite attempts to obscure its significance. This comprehensive analysis presents evidence from Sahih Bukhari, Sahih Muslim, and other authenticated sources that validate the appointment of Ali ibn Abi Talib as the rightful successor.",
      slug: "historical-analysis-ghadir-khumm"
    }
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-green-800 text-white py-4 px-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Book className="mr-3" size={28} />
          Latest Articles
        </h2>
      </div>
      
      <div className="p-6">
        {articles.map((article, index) => (
          <article key={article.id} className={`${index !== articles.length - 1 ? 'border-b border-gray-200 pb-6 mb-6' : 'pb-6'}`}>
            <div className="flex items-center mb-3">
              <div className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                {article.id}
              </div>
              <h3 className="text-xl md:text-2xl font-bold ml-3 text-green-900">
                {article.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-green-800">Author:</span> {article.author} | 
              <span className="font-semibold text-green-800 ml-2">Posted:</span> {article.date}
            </p>
            <div className="border-l-4 border-yellow-500 pl-4 text-gray-700 mb-4">
              <p>{article.excerpt}</p>
            </div>
            <Link 
              to={`/articles/${article.slug}`}
              className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Continue Reading 
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
