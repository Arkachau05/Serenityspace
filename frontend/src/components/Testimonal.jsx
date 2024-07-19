import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Testimonials = () => {
  // Sample data (you can fetch this data from an API or calculate dynamically)
  const totalVisitors = 100;
  const pageViews = 150; // Assuming this is a dynamic value
  const reviews = [
    { id: 1, text: 'That\'s amazing what a wonderful project i am amazed and for sure it gonna help a lot of people thank you for being out such a awesome project like this. It\'s a big step to help teen and people with depression and live confidentially and happily ', author: 'Ayush Upadhyay', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7217263112771575808?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7217263112771575808%2C7217538561774862336%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287217538561774862336%2Curn%3Ali%3AugcPost%3A7217263112771575808%29' },
    { id: 2, text: 'Impressive!', author: 'Abhijit Ranjan', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7217263112771575808?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7217263112771575808%2C7217265855301079040%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287217265855301079040%2Curn%3Ali%3AugcPost%3A7217263112771575808%29' },
  ];

  return (
    <div id="testimonials" className="bg-black text-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Testimonials</h1>

        <div className="flex justify-center space-x-4">
          {/* Visitors Box */}
          <div className="w-1/3 bg-white shadow-md rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h2 className="text-xl font-bold mb-4 text-center">Total Visitors</h2>
            <p className="text-3xl text-center">{totalVisitors}+</p>
            <h2 className="text-xl font-bold mt-4 mb-4 text-center">Page Views</h2>
            <p className="text-3xl text-center">{pageViews}+</p>
          </div>

          {/* Reviews Box */}
          <div className="w-2/3 bg-white shadow-md rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h2 className="text-xl font-bold mb-4 text-center">Reviews</h2>
            <ul>
              {reviews.map(review => (
                <li key={review.id} className="mb-8">
                  <blockquote className="italic text-gray-800">{review.text}</blockquote>
                  <div className="flex items-center justify-end mt-4">
                    <a href={review.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
                      <FaLinkedin size={36} />
                      <span className="ml-2">{review.author}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
