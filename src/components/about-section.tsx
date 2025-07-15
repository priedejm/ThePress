import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">About The Press</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="assets/images/pressAbout.jpeg" 
            alt="The Press kitchen" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold">Welcome to The Press</h3>
          <p className="text-foreground-600 leading-relaxed">
            A family-owned and operated spot in the heart of Charleston, The Press serves perfectly pressed burritos made with recipes passed down through generations. Our unique pressing technique creates a crispy exterior while keeping the inside perfectly moist and flavorful.
          </p>
          <p className="text-foreground-600 leading-relaxed">
            We extend a warm welcome and hope to see you soon! Our menu includes delicious options with various protein choices, fresh vegetables, and house-made sauces, all designed to accommodate different dietary preferences while maintaining our signature pressed style.
          </p>
        </motion.div>
      </div>
    </section>
  );
};