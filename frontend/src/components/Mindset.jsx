import React, { useState } from 'react';
import grid from '../assets/services/grid.png';
import mcgwal from '../assets/services/mcgwal.jpg';
import mtwal from '../assets/services/mtwal.png';
import kbwal from '../assets/services/kbwal.jpg';
import dgwal from '../assets/services/dgwal.webp';
import zlwal from '../assets/services/zlwal.png';

const Mindset = () => {
  // State to manage current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for sliding functionality
  const images = [mcgwal, zlwal, kbwal, dgwal, mtwal];

  // Function to handle next image click
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle previous image click
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div id="mindset" className="relative bg-slate-900 text-white py-20">
      {/* Background grid image */}
      <img
        src={grid}
        alt="Grid Image"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />

      <div className="container relative mx-auto px-4 z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-24">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300">Have a Winner Mindset!!</h2>
            <div className="mb-8">
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                Having the correct mindset is crucial for navigating life's challenges with resilience and positivity. 
                It enables individuals to approach setbacks as opportunities for growth rather than insurmountable obstacles.
              </p>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                A positive mindset fosters mental well-being by promoting optimism and reducing stress levels. By cultivating a mindset focused on gratitude, 
                acceptance, and proactive problem-solving, individuals can effectively manage stressors and mitigate the risk of depression.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                This approach empowers individuals to maintain emotional balance, foster healthier relationships, and achieve greater overall satisfaction in life.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <img src={images[currentImageIndex]} alt="Sliding Image" className="rounded-xl" />
            {/* Arrow buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 bg-opacity-50 text-white p-2 rounded-2xl"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 bg-opacity-50 text-white p-2 rounded-2xl"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mindset;
