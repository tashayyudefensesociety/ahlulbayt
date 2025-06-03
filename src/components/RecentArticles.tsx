
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ArrowRight } from 'lucide-react';

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Theological Foundations of Imamate",
      author: "Dr. Ali Kazmi",
      date: "October 12, 2023",
      excerpt: "The institution of Imamate represents a fundamental pillar of Shia Islam, established through divine designation rather than human selection. This article explores the theological foundations and scriptural evidence for the divinely appointed succession from Prophet Muhammad (PBUH) to the twelve Imams. We examine how the concept of Imamate differs from political leadership and represents spiritual guidance for the Muslim community through authenticated traditions and Quranic verses.",
      slug: "theological-foundations-imamah",
      content: "The concept of Imamate in Shia Islam is rooted in divine appointment rather than human election. According to Shia theology, the Prophet Muhammad (PBUH) explicitly designated Ali ibn Abi Talib as his successor at Ghadir Khumm, establishing a principle of divine guidance that would continue through the twelve Imams. This article examines the scriptural basis for this belief, drawing from both Shia and Sunni sources to demonstrate the authenticity of these claims."
    },
    {
      id: 2,
      title: "Historical Analysis: The Event of Ghadir Khumm",
      author: "Scholar Fatima Jafri",
      date: "October 5, 2023",
      excerpt: "Examination of historical records reveals that the Prophet Muhammad (PBUH) appointed Imam Ali (AS) as his successor at Ghadir Khumm. Multiple Sunni sources confirm this event despite attempts to obscure its significance. This comprehensive analysis presents evidence from Sahih Bukhari, Sahih Muslim, and other authenticated sources that validate the appointment of Ali ibn Abi Talib as the rightful successor to the Prophet.",
      slug: "historical-analysis-ghadir-khumm",
      content: "The event at Ghadir Khumm represents one of the most significant moments in Islamic history. On the 18th of Dhul Hijjah, during the Prophet's farewell pilgrimage, he gathered over 100,000 Muslims to make a crucial announcement. The hadith of Ghadir is narrated by numerous Sunni scholars and represents clear evidence of Ali's appointment as the Prophet's successor."
    },
    {
      id: 3,
      title: "Refuting Common Misconceptions about Tahreef",
      author: "Mufti Hasan Rizvi",
      date: "September 28, 2023",
      excerpt: "The false accusation that Shia Muslims believe in textual alteration (Tahreef) of the Quran represents a grave misrepresentation of authentic Shia theology. Historical scholarship demonstrates that Shia Imams themselves were the greatest preservers of the Quranic text. This article provides comprehensive evidence from classical Shia sources that categorically reject any notion of textual corruption.",
      slug: "refuting-misconceptions-tahreef",
      content: "One of the most persistent misconceptions about Shia Islam is the claim that Shias believe in the corruption (tahreef) of the Quran. This allegation is completely false and contradicts the established position of Shia scholarship throughout history. All major Shia scholars and the Imams themselves have affirmed the complete preservation of the Quranic text."
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
