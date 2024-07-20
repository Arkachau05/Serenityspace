import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="bg-black p-4">
            <div className="max-w-[1240px] py-[20px] items-center flex justify-between border-black mx-auto">
                <div className="text-white font-bold text-3xl">Serenity Space</div>
                {toggle ? (
                    <AiOutlineClose
                        onClick={handleToggle}
                        className="text-white text-2xl md:hidden block"
                    />
                ) : (
                    <AiOutlineMenu
                        onClick={handleToggle}
                        className="text-white text-2xl md:hidden block"
                    />
                )}

                <ul className="hidden md:flex text-white gap-10">
                    <li>Home</li>
                    <li>Get Motivated</li>
                    <li>Book Appointment</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>

                <ul
                    className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[90px] 
                        ${toggle ? "left-[0]" : "left-[100%]"
                    }`}
                >
                    <li className="p-5">Home</li>
                    <li className="p-5">Get Motivated</li>
                    <li className="p-5">Book Appointment</li>
                    <li className="p-5">About us</li>
                    <li className="p-5">Contact us</li>
                </ul>
            </div>
        </div>
    );
}
