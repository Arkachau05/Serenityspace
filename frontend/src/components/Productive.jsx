import React from 'react';
import productivity from '../assets/services/productivity.png';
import gaming from '../assets/services/gaming.png';
import grid from '../assets/services/grid.png';

const Productive = () => {
  return (
    <div id="get-productive" className="relative bg-black text-white py-20">
      {/* Background grid image */}
      <img
        src={grid}
        alt="Grid Image"
        className="absolute inset-0 w-full h-full object-cover opacity-130"
      />

      <div className="container relative mx-auto px-4 z-10">
        {/* First section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-24">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Productive</h2>
            <div className="mb-8">
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                Effective{' '}
                <span className="inline-block bg-green-500 text-white px-2 py-1 rounded">
                  time management
                </span>{' '}
                is crucial for productivity. Use tools like calendars and task lists to prioritize tasks.
              </p>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                Practice focus techniques such as the{' '}
                <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded">
                  Pomodoro Technique
                </span>{' '}
                to maintain concentration and enhance productivity.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                Set SMART (Specific, Measurable, Achievable, Relevant, Time-bound){' '}
                <span className="inline-block bg-pink-500 text-white px-2 py-1 rounded">
                  goals to stay motivated
                </span>{' '}
                and on track with your objectives. Explore productivity apps and tools like task managers and note-taking apps to streamline your workflow.
              </p>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
                <span className="inline-block bg-gray-500 text-white px-2 py-1 rounded">
                  Discover tips and tools
                </span>{' '}
                to boost your productivity and achieve your goals efficiently.
              </p>
            </div>
            <a
              href="https://www.verywellmind.com/how-to-be-more-productive-6499714"
              className="inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={productivity} alt="Productivity Image" className="rounded-xl" />
          </div>
        </div>

        {/* Second section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-16">
          
          <div className="md:w-1/2 mt-8 order-2 md:order-1 md:mt-0">
            <img src={gaming} alt="gaming Image" className="rounded-xl" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 order-1 md:order-2">
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
              <span className="inline-block bg-violet-500 text-white px-2 py-1 rounded">
                Online gaming can be good for your mental health
              </span>{' '}
              Mental health practitioners are using online gaming to treat stress and other disorders. Clinicians can let patients play independently or join them for treatment on multiplayer platforms such as Roblox or Minecraft.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-white">
              <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded">
                Benefits of Sports for Mental Health
              </span>{' '}
              About 75% to 90% of doctor visits are for stress-related illnesses. Sports help you manage stress. Exercise causes your body to release endorphins, the chemicals in your brain that relieve pain and stress.
            </p>
            <a
              href="https://www.weforum.org/agenda/2021/12/online-gaming-stress-therapy-mental-health/"
              className="inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productive;
