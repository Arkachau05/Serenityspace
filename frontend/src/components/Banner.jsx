import React, { useState } from 'react';
import axios from 'axios';
import curve from "../assets/hero/curve.png";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import patternm from '../assets/services/patternm.png';
import spotlightl from '../assets/services/spotlightl.png';
import spotlightr from '../assets/services/spotlightr.png';

export default function Banner() {
    const [inputValue, setInputValue] = useState(""); // State for input value
    const [isOpen, setIsOpen] = useState(false); // State for dialog
    const [answer, setAnswer] = useState(""); // State for chatbot answer

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    const closeEsmoContainer = () => {
        setAnswer(""); // Clear any previous answer
    };

    async function generateAnswer() {
        setAnswer("loading...");
        try {
            const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCtYnRUaJc1-Fd3HdwcTWUj7f_7y9vkffY", {
                contents: [{ parts: [{ text: inputValue }] }]
            });
            setAnswer(response.data.candidates[0].content.parts[0].text);
        } catch (error) {
            console.error('Error fetching data:', error);
            setAnswer("An error occurred. Please try again later.");
        }
    }

    return (
        <div className="relative bg-slate-900 w-full min-h-screen py-[100px]">
            {/* Background Patterns */}
            <img
                src={spotlightl}
                alt="Pattern Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <img
                src={patternm}
                alt="Pattern Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <img
                src={spotlightr}
                alt="Pattern Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 max-w-[1240px] mx-auto text-center">
                <div className="text-white font-bold text-6xl md:text-7xl py-12 relative">
                    Become the best version of yourself
                </div>
                <div>
                    <img
                        src={curve}
                        alt="curve design"
                        className="mt-2 mb-2 relative"
                    />
                </div>
                <div className="text-white font-thin text-xl md:text-2xl py-10 md:py-20 relative">
                    Talk to Esmo, our new AI chatbot. Esmo will assist and support you to get rid of stress and any kind of depression you are facing.
                </div>
                <div className="flex flex-wrap justify-center relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter your message..."
                        className="mt-5 mb-4 p-4 rounded-xl bg-white border-none text-black focus:outline-none h-16 w-[85vw] max-w-[650px] md:w-[50vw] md:max-w-[700px] z-10"
                    />
                    <button
                        onClick={generateAnswer}
                        className="mt-5 p-4 ml-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none h-16 w-[85vw] max-w-[75px] md:w-[50vw] z-10"
                    >
                        Chat
                    </button>
                </div>

                {/* Chatbot Interaction Container */}
                {answer && (
                    <div className="fixed bottom-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-[400px] w-full max-h-[400px] overflow-y-auto">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                                E
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-800 font-semibold">Esmo</p>
                            </div>
                            <button
                                onClick={closeEsmoContainer}
                                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="overflow-y-auto max-h-[300px]">
                            <div className="mb-4">
                                <p className="text-gray-800">{answer}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Dialog for Chat with Esmo */}
            <Transition appear show={isOpen} as={React.Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={closeDialog}
                >
                    <div className="min-h-screen flex items-center justify-center px-4 py-6 text-center sm:p-0">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Panel className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="p-6">
                                    <div className="flex justify-end">
                                        <button
                                            onClick={closeDialog}
                                            className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                        >
                                            <XMarkIcon className="h-6 w-6" />
                                        </button>
                                    </div>
                                    <div className="text-center mt-6">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Chat with Esmo</h2>
                                        <p className="text-gray-600 mb-6">Start a conversation and get assistance from our AI chatbot.</p>
                                        <textarea
                                            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-40"
                                            placeholder="Type your message here..."
                                        ></textarea>
                                        <div className="flex justify-center mt-6">
                                            <button className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
