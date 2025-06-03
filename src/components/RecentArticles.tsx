
import React from 'react';
import { Link } from 'react-router-dom';

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Theological Foundations of Tashayyu: Understanding the Imamah",
      excerpt: "An in-depth exploration of the concept of Imamah in Shia theology and its significance in Islamic doctrine...",
      date: "June 1, 2025",
      slug: "theological-foundations-imamah"
    },
    {
      id: 2,
      title: "Refuting Misconceptions About Shia Beliefs: A Scholarly Response",
      excerpt: "Addressing common misunderstandings and providing clear, evidence-based responses to frequently raised questions...",
      date: "May 28, 2025",
      slug: "refuting-misconceptions-shia-beliefs"
    },
    {
      id: 3,
      title: "The Legacy of Imam Ali: Leadership and Justice in Early Islam",
      excerpt: "Examining the leadership qualities and just governance of Imam Ali ibn Abi Talib and its lasting impact...",
      date: "May 25, 2025",
      slug: "legacy-imam-ali-leadership"
    },
    {
      id: 4,
      title: "Understanding Wilayah: The Concept of Divine Authority",
      excerpt: "A comprehensive study of the concept of Wilayah and its role in Shia Islamic jurisprudence and theology...",
      date: "May 20, 2025",
      slug: "understanding-wilayah-divine-authority"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
        Latest Articles
      </h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <article key={article.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <Link 
              to={`/articles/${article.slug}`}
              className="block hover:bg-gray-50 p-2 rounded transition-colors"
            >
              <h3 className="text-lg font-semibold text-blue-700 hover:text-blue-800 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="text-xs text-gray-500">{article.date}</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
