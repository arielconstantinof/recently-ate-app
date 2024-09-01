import React, { useState } from 'react';
import { Send, ChevronRight } from 'lucide-react';

const mockAnswers = [
  { text: "Just had a delicious homemade margherita pizza! Here's the recipe I used: [link]", date: "2024-08-31 18:45", location: "Naples, Italy" },
  { text: "Enjoyed some spicy Thai green curry. The coconut milk made it so creamy!", date: "2024-08-31 12:30", location: "Bangkok, Thailand" },
  { text: "Tried making sushi for the first time. It was fun and tasty!", date: "2024-08-30 20:15", location: "San Francisco, USA" },
  { text: "Had a traditional English breakfast. Nothing beats beans on toast!", date: "2024-08-30 09:00", location: "London, UK" },
  { text: "Sampled some local street food - tacos al pastor. Amazing flavors!", date: "2024-08-29 14:20", location: "Mexico City, Mexico" },
  { text: "Made a hearty vegetable soup. Perfect for a chilly day!", date: "2024-08-29 19:30", location: "Stockholm, Sweden" },
  { text: "Tried a new vegan burger place. The patty was made from jackfruit!", date: "2024-08-28 13:45", location: "Berlin, Germany" },
  { text: "Had some freshly caught grilled salmon. The seaside view made it even better!", date: "2024-08-28 20:00", location: "Vancouver, Canada" },
  { text: "Enjoyed a traditional Moroccan tagine. The blend of spices was incredible!", date: "2024-08-27 21:15", location: "Marrakech, Morocco" }
];

const RecentlyAteApp = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-600">I Recently Ate</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            rows="4"
            placeholder="What did you just eat? Inspire someone around the globe! Feel free to add a link to the recipe or a picture. Please only recommend food you have enjoyed!"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {inputText.length >= 10 && (
            <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors flex items-center">
              Send <Send className="ml-2 h-4 w-4" />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockAnswers.map((answer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-800 mb-2">{answer.text}</p>
              <div className="text-sm text-gray-500">
                <p>{answer.date}</p>
                <p>{answer.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors flex items-center mx-auto">
            Browse all answers <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </main>
      
      <footer className="bg-gray-200 py-4">
        <p className="text-center text-gray-600">&copy; 2024</p>
      </footer>
    </div>
  );
};

export default RecentlyAteApp;