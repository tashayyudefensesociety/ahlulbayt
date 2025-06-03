
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const ArticleDetail = () => {
  const { slug } = useParams();
  
  const articles = {
    "theological-foundations-imamah": {
      title: "The Theological Foundations of Imamate",
      author: "Dr. Ali Kazmi",
      date: "October 12, 2023",
      content: `
        <h2>Introduction</h2>
        <p>The concept of Imamate in Shia Islam is rooted in divine appointment rather than human election. According to Shia theology, the Prophet Muhammad (PBUH) explicitly designated Ali ibn Abi Talib as his successor at Ghadir Khumm, establishing a principle of divine guidance that would continue through the twelve Imams.</p>
        
        <h2>Scriptural Evidence</h2>
        <p>This article examines the scriptural basis for this belief, drawing from both Shia and Sunni sources to demonstrate the authenticity of these claims. The Quran states: "O Messenger! Convey what has been sent down to you from your Lord, and if you do not, then you have not conveyed His message." (5:67)</p>
        
        <h2>The Event at Ghadir Khumm</h2>
        <p>The Prophet's declaration at Ghadir Khumm, "For whomever I am his leader (mawla), Ali is his leader," represents a clear designation of succession. This event is documented in numerous authentic sources and represents the foundation of the Imamate doctrine.</p>
        
        <h2>Conclusion</h2>
        <p>The institution of Imamate ensures the continuation of divine guidance after the Prophet's death, preserving the authentic teachings of Islam through the divinely appointed Imams.</p>
      `
    },
    "historical-analysis-ghadir-khumm": {
      title: "Historical Analysis: The Event of Ghadir Khumm",
      author: "Scholar Fatima Jafri",
      date: "October 5, 2023",
      content: `
        <h2>Historical Context</h2>
        <p>The event at Ghadir Khumm represents one of the most significant moments in Islamic history. On the 18th of Dhul Hijjah, during the Prophet's farewell pilgrimage, he gathered over 100,000 Muslims to make a crucial announcement.</p>
        
        <h2>The Proclamation</h2>
        <p>The hadith of Ghadir is narrated by numerous Sunni scholars and represents clear evidence of Ali's appointment as the Prophet's successor. The Prophet asked the gathering: "Do I not have more right over the believers than what they have over themselves?" When they replied in the affirmative, he declared: "For whomever I am his mawla, Ali is his mawla."</p>
        
        <h2>Sources and Documentation</h2>
        <p>This event is documented in major Sunni hadith collections including Sahih Muslim, Musnad Ahmad, and others. Over 110 companions are recorded as narrating this event, making it one of the most widely transmitted traditions in Islamic history.</p>
      `
    },
    "refuting-misconceptions-tahreef": {
      title: "Refuting Common Misconceptions about Tahreef",
      author: "Mufti Hasan Rizvi",
      date: "September 28, 2023",
      content: `
        <h2>The False Accusation</h2>
        <p>One of the most persistent misconceptions about Shia Islam is the claim that Shias believe in the corruption (tahreef) of the Quran. This allegation is completely false and contradicts the established position of Shia scholarship throughout history.</p>
        
        <h2>Shia Position on the Quran</h2>
        <p>All major Shia scholars and the Imams themselves have affirmed the complete preservation of the Quranic text. Imam Ali (AS) stated: "The Quran is preserved from addition and subtraction." This represents the unanimous position of authentic Shia scholarship.</p>
        
        <h2>Historical Evidence</h2>
        <p>The Imams were themselves the greatest preservers of the Quranic text. Imam Ali (AS) compiled the first mushaf, and subsequent Imams continued to preserve and teach the Quran exactly as revealed to the Prophet.</p>
      `
    }
  };
  
  const article = articles[slug as keyof typeof articles];
  
  if (!article) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
        <Header />
        <Navigation />
        <main className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Article Not Found</h1>
            <p className="text-gray-700 mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/articles" className="bg-green-800 text-white px-4 py-2 rounded-md">
              Back to Articles
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-green-800 hover:text-green-900 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Articles
          </Link>
          
          <article className="bg-white rounded-lg shadow-md p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center text-gray-600 space-x-4">
                <div className="flex items-center">
                  <User className="mr-2" size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>{article.date}</span>
                </div>
              </div>
            </header>
            
            <div 
              className="prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
