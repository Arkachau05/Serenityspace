import React from 'react';
import Adityaimg from '../assets/services/Adityaimg.jpeg';
import Arkoimg2 from '../assets/services/Arkoimg2.jpeg';
import Sameerimg from '../assets/services/Sameerimg.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-slate-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About Serenityspace</h2>
        <div className="mb-8"> {/* Reduce the margin bottom here */}
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="mb-4">
            Serenityspace aims to provide comprehensive support and resources to combat stress and depression, addressing a global issue that affects millions of people.
          </p>
          <p className="mb-4">
            According to the World Health Organization (WHO), approximately 280 million people worldwide suffer from depression, with significant impacts on both adults and teenagers. Depression is associated with increased risks of suicide, crime, and other serious consequences.
          </p>
          <p className="mb-4">
            Our initiative seeks to mitigate these effects by offering personalized AI-driven assistance, fostering community support, and delivering motivational content that inspires positive mental health practices.
          </p>
          <p>
            Join us in our mission to create a supportive environment where individuals can find guidance, encouragement, and resources to become the best versions of themselves.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">{/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg px-6 py-8">
            <div className="text-center">
            <img
            src={Adityaimg}
            alt="Aditya Kumar Singh"
            className="rounded-2xl mx-auto h-48 max-w-full mb-2"
            />
            <h2 className="text-black text-xl font-bold mb-2">Aditya Kumar Singh</h2>
            <p className="text-gray-600">Founder & Developer</p>
            <div className="mt-4">
            <a href="mailto:adityandmb@gmail.com" className="text-blue-300 hover:underline">Email</a> |{' '}
            <a href="https://www.linkedin.com/in/adityakumarsingh2005/" className="text-blue-300 hover:underline">LinkedIn</a> |{' '}
            <a href="https://twitter.com/adityasingh7211" className="text-blue-300 hover:underline">Twitter</a>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg px-6 py-8">
          <div className="text-center">
          <img
          src={Arkoimg2}
          alt="Arkadyuti Chaudhari"
          className="rounded-2xl mx-auto h-48 max-w-full mb-2"
          />
          <h2 className="text-black text-xl font-bold mb-2">Arkadyuti Chaudhari</h2>
          <p className="text-gray-600">CoFounder & Developer</p>
          <div className="mt-4">
          <a href="mailto:arkadyutichaudhuri@gmail.com" className="text-blue-300 hover:underline">Email</a> |{' '}
          <a href="https://www.linkedin.com/in/arkadyuti-chaudhuri/" className="text-blue-300 hover:underline">LinkedIn</a> |{' '}
          <a href="https://x.com/CArkadyuti" className="text-blue-300 hover:underline">Twitter</a>
          </div>
       </div>
      </div>
      <div className="bg-white shadow-md rounded-lg px-6 py-8">
        <div className="text-center">
        <img
        src={Sameerimg}
        alt="Sameer Yadav"
        className="rounded-2xl mx-auto h-48 max-w-full mb-2"
        />
        <h2 className="text-black text-xl font-bold mb-2">Sameer Yadav</h2>
        <p className="text-gray-600">CoFounder & Developer</p>
        <div className="mt-4">
        <a href="mailto:ysameer0026@gmail.com" className="text-blue-300 hover:underline">Email</a> |{' '}
        <a href="https://www.linkedin.com/in/sameer-yadav-214a01282/" className="text-blue-300 hover:underline">LinkedIn</a> |{' '}
        <a href="https://x.com/ysameer001" className="text-blue-300 hover:underline">Twitter</a>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
};


export default AboutUs;
