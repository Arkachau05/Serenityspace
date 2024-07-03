import { useState } from 'react';
import curve from "../assets/hero/curve.png";
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Banner() {
    const [inputValue, setInputValue] = useState(""); // State for input value
    const [isOpen, setIsOpen] = useState(false); // State for dialog

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-slate-900 w-full py-[100px]">
            <div className="max-w-[1240px] mx-auto text-center">
                <div className="text-white font-bold text-6xl md:text-7xl py-12">
                    Become the best version of yourself
                </div>
                <div>
                <img
                src={curve}
                alt="curve desgin"
                className="mt-2 mb-2"
                />
                </div>
                <div className="text-white font-thin text-xl md:text-2xl py-10 md:py-20">
                    Talk to Esmo, our new AI chatbot. Esmo will assist and support you to get rid of stress and any kind of depression you are facing.
                </div>
                <div className="flex flex-wrap justify-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter your message..."
                        className="mt-5 mb-4 p-4 rounded-xl bg-white border-none text-black focus:outline-none h-16 w-[85vw] max-w-[650px] md:w-[50vw] md:max-w-[700px]"
                    />
                    <button
                        onClick={openDialog}
                        className="mt-5 p-4 ml-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none h-16 w-[85vw] max-w-[75px] md:w-[50vw]" 
                    >
                        Chat
                    </button>
                </div>

            </div>
            <Dialog open={isOpen} onClose={closeDialog} className="fixed inset-0 z-10 overflow-y-auto">
                <DialogPanel className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <div className="flex justify-end">
                            <button onClick={closeDialog} className="text-gray-400 hover:text-gray-600 focus:outline-none">
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
                </DialogPanel>
            </Dialog>
        </div>
    );
}
