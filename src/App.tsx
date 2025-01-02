import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { Sparkles } from 'lucide-react';
import { messages } from './messages';

const App: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  const generateNewMessage = () => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(newMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center"
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Happy New Year from CloudFix!</h1>
        <motion.p
          key={currentMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-xl mb-6 text-gray-700"
        >
          {currentMessage}
        </motion.p>
        <Button onClick={generateNewMessage} className="bg-blue-500 hover:bg-blue-600">
          <Sparkles className="mr-2 h-4 w-4" /> Generate New Message
        </Button>
      </motion.div>
    </div>
  );
};

export default App; 