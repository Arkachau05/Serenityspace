import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle form submission logic here, like sending data to a server
    console.log('Submitted:', { firstName, lastName, email, phoneNumber, message });
    // Reset the form fields after submission if needed
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');

    
    const formData = new FormData(event.target);

    formData.append("access_key", "0d656241-2c74-4af3-9802-4e2d87ece7a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
     
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };
  const notify=()=>{
    toast("Form Submitted");
  };

  return (

    <div id="contactus"className="bg-slate-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-xl mb-2">First Name:</label>
            <input
              type="text" name="FIRSTNAME"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-slate-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Last Name:</label>
            <input
              type="text" name='LASTNAME'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-slate-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Email:</label>
            <input
              type="email" name='EMAIL'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-3 py-2 border rounded-lg bg-slate-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Phone Number:</label>
            <input
              type="tel" name='PHONENUMBER'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-slate-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Message:</label>
            <textarea
              value={message} name='MESSAGE'
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-slate-800 text-white"
              rows="4"
              required
            />
          </div>
          <button onClick={notify} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Submit
          </button>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
