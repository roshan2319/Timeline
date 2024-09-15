import React, { useState } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../src/Resources/2018.jpeg';
import photo2 from '../src/Resources/2019.jpeg';
import photo3 from '../src/Resources/2020.jpeg';
import photo4 from '../src/Resources/2021.jpeg';
import photo5 from '../src/Resources/2022.jpeg';
import photo6 from '../src/Resources/2023.jpeg';
import photo7 from '../src/Resources/2024.jpeg';

const timelineData = [
  { year: 'April 2018', description: 'We are one of India\'s leading drone firms in providing end-to-end Drone Solutions.', img: photo1 },
  { year: 'April 2019', description: 'We expanded our operations internationally.', img: photo2 },
  { year: 'April 2020', description: 'Developed advanced AI for drone flight optimization.', img: photo3 },
  { year: 'April 2021', description: 'Launched the most affordable drone fleet solutions in the market.', img: photo4 },
  { year: 'April 2022', description: 'Pioneered drone delivery services in multiple cities.', img: photo5},
  { year: 'April 2023', description: 'We hit a milestone of 1 million successful drone missions.', img: photo6 },
  { year: 'April 2024', description: 'Developing next-generation drones for medical services.', img: photo7 },
];

const Timeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col bg-custom-gradient items-center justify-center py-8 min-h-screen">

      {/* Centered content (image + text) */}
      <motion.div
        key={selectedIndex}
        className="flex flex-col md:flex-row items-center justify-center mb-8 max-w-4xl space-x-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image on the left */}
        <motion.img
          src={timelineData[selectedIndex].img}
          className="w-32 h-32 object-cover rounded-full shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Text content on the right */}
        <div className="ml-6 text-center md:text-left w-[280px] max-w-[320px]">
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {timelineData[selectedIndex].year}
          </motion.h2>
          <motion.p
            className=" text-black mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {timelineData[selectedIndex].description}
          </motion.p>
        </div>
      </motion.div>

      {/* Timeline with points, lines, and labels */}
      <div className="flex items-center justify-center w-full max-w-4xl mt-8">
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => setSelectedIndex(index)}
              className={`relative w-8 h-8 rounded-full ${
                selectedIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              } flex items-center justify-center focus:outline-none shadow-md transition-transform transform hover:scale-110`}
            >
              <motion.span
                className="absolute -top-10 text-sm font-medium whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.year}
              </motion.span>
              <span className="w-4 h-4 rounded-full bg-white"></span>
            </button>

            {/* Line between timeline points */}
            {index < timelineData.length - 1 && (
              <div className="flex-grow h-0.5 bg-gray-400 mx-1"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
