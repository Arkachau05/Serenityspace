import React from 'react';
import discord from '../assets/socials/discord.svg';
import gswal from '../assets/services/gswal.png';

const JoinOurCommunity = () => {
  return (
    <div id="community" className="bg-black text-white py-12">
      <div className="container px-6 py-8 mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left side content */}
        <div className="md:w-1/2 md:pr-10 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">Why Join Our Community?</h2>
          <p className="text-lg mb-6">
            Join our Discord community where you can share your experiences, connect with others, and receive mutual support in overcoming stress and depression.
          </p>
          <p className="text-lg mb-6">
            Our community provides a safe space for discussions, resources, and encouragement, fostering a supportive environment for mental health and well-being.
          </p>
          <img src={discord} alt="Discord Icon" className="h-16 w-16 mb-4" />
          <p className="text-lg">
            <a
              href="https://discord.com/invite/pgZKaWQA"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Discord Channel
            </a>
          </p>
        </div>
        {/* Right side content */}
        <div className="md:w-1/2 md:pl-10">
          <img src={gswal} alt="Service Image" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
