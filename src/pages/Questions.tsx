
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Questions = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Questions & Answers</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Find comprehensive answers to frequently asked questions about Shia Islam, covering theological, practical, and historical aspects of the faith.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Categories of Questions</h2>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Basic Beliefs & Practices</h3>
                <p className="text-gray-700">Questions about fundamental Shia doctrines, worship practices, and religious obligations.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Historical Inquiries</h3>
                <p className="text-gray-700">Questions about early Islamic history, the Imams, and significant events in Shia history.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contemporary Issues</h3>
                <p className="text-gray-700">Modern challenges and how Shia Islamic principles address contemporary social and ethical questions.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interfaith Dialogue</h3>
                <p className="text-gray-700">Questions about Shia perspectives on other Islamic schools of thought and religious communities.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">How to Submit Questions</h2>
            <p className="text-gray-700 mb-4">
              We welcome sincere questions from seekers of knowledge. All questions are reviewed by qualified scholars before answers are published. Please ensure your questions are respectful and genuinely seeking knowledge rather than engaging in polemics.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">Knowledge Seeking</h3>
              <p className="text-yellow-700">
                "The pursuit of knowledge is a sacred duty in Islam. We encourage all sincere seekers to ask questions that will increase their understanding of authentic Islamic teachings."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questions;
