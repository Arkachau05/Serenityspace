import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Banner() {
    const [inputValue, setInputValue] = useState(""); // State for input value

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="bg-slate-900 w-full py-[100px]">
            <div className="max-w-[1240px] mx-auto text-center">
                <div className="text-white font-bold text-7xl py-12">
                    Become the best version of yourself
                </div>
                <div className="text-white font-thin text-2xl pt-5 py-20">
                    Talk to Esmo, our new AI chatbot. Esmo will assist and support you to get rid of stress and any 
                    kind of depression you are facing.
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your message..."
                    className="mt-5 p-4 rounded-full bg-white border-none text-black focus:outline-none h-16 w-[650px] mb-52"
                />
            </div>
        </div>
    );
}