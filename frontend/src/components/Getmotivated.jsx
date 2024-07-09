import React from 'react';

const GetMotivated = () => {
  return (
    <div id="get-motivated" className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Get Motivated</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Left Container 1: Motivational Quotes */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg px-6 py-8 hover:bg-gray-200 hover:shadow-lg">
              <h2 className="text-black text-2xl font-bold text-center mb-4">Motivational Quotes Of The Day</h2>
              <div className="text-center">
                <p className="italic text-gray-600 mb-4">
                  "The only way to do great work is to love what you do." - Steve Jobs
                </p>
                <p>
                 <blockquote class="italic text-center text-gray-600 mb-4">
                 <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                 <span class="relative text-white">Believe</span>
                 </span>
                 you can and you're halfway there. - Theodore Roosevelt
                 </blockquote>
                </p>
                <p>
                 <blockquote class="italic text-center text-gray-600 mb-4">
                 If you can change
                 <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
                 <span class="relative text-white">your mind</span>
                 </span>
                 ,you can change your life. - William James
                 </blockquote>
                </p>
                <p>
                 <blockquote class="italic text-center text-gray-600 mb-4">
                 At the end of the Day, you gotta feel some way. So why not feel 
                 <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
                 <span class="relative text-white">unbeatable?</span>
                 </span>
                 So Why not feel untouchable? Why not feel like the best ever to do it? - Conor McGregor
                 </blockquote>
                </p>
                <p className="italic text-gray-600 mb-4">
                  "If you are born poor its not your mistake, But if you die poor its your mistake" - Bill Gates
                </p>
                <p>
                 <blockquote class="italic text-center text-gray-600 mb-4">
                 The most precious thing that we all have with us is
                 <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
                 <span class="relative text-white">time</span>
                 </span>
                 - Steve Jobs
                 </blockquote>
                </p>
              </div>
            </div>
          </div>
          {/* Left Container 2: Listen to TED Talks */}
          <div className="w-full md:w-1/2 md:ml-auto px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg px-6 py-8 hover:bg-gray-200 hover:shadow-lg">
              <h2 className="text-black text-2xl font-bold text-center mb-4">Listen to TED Talks</h2>
              <div className="text-center">
                {/* Embedded YouTube Video for TED Talk */}
                <iframe
                  title="The psychology of self-motivation | Scott Geller"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/7sxpKhIbr0E"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Right Container: Motivational Reels */}
          <div className="w-full md:w-1/2 md:ml-auto px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg px-6 py-8 hover:bg-gray-200 hover:shadow-lg">
              <h2 className="text-black text-2xl font-bold text-center mb-4">Motivational Reels</h2>
              <div className="text-center">
                {/* Example of an embedded video (replace with your actual video) */}
                <iframe
                  title="Motivational Reel"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/wCIZ8TZI2FI"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Fourth Container: Inspiring Stories */}
          <div className="w-full md:w-1/2 md:ml-auto px-4 mb-">
            <div className="bg-white shadow-md rounded-lg px-6 py-8 hover:bg-gray-200 hover:shadow-lg">
              <h2 className="text-black text-2xl font-bold text-center mb-4">Inspiring Stories</h2>
              <div className="text-center">
                {/* Example of an embedded video for Inspiring Story */}
                <iframe
                  title="IOne of the Greatest Speeches Ever | Steve Jobs"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Tuw8hxrFBH8"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMotivated;
