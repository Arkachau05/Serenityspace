import React, { useState } from 'react';

const JoinOurCommunity = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with actual logic to handle form submission
    console.log('Submitted:', { fullName, email, discordUsername, message });
    // Reset the form fields after submission if needed
    setFullName('');
    setEmail('');
    setDiscordUsername('');
    setMessage('');
  };

  return (
    <div id="community" className="bg-gray-900 text-white py-12">
      <div className="container px-6 py-8 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
        <p className="text-lg text-center mb-6">
          Join our Discord community where you can share your experiences, connect with others, and receive mutual support in overcoming stress and depression.
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discordUsername">
              Discord Username:
            </label>
            <input
              type="text"
              id="discordUsername"
              value={discordUsername}
              onChange={(e) => setDiscordUsername(e.target.value)}
              placeholder="Enter your Discord username#0000"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message (Optional):
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about yourself or why you want to join..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 text-center">
          By submitting this form, you agree to abide by the rules and guidelines of our Discord community.
        </p>
        <p className="text-center mt-4">
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
    </div>
  );
};

export default JoinOurCommunity;
