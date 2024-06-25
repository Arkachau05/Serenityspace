import React from "react";

const Navbar = () => {
    return(
<nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" class="flex items-center">
            <img src="\Images\Lightmodetext.png" class="h-6 mr-3 sm:h-9" alt="Landwind Logo"/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                        aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Get Motivated</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Book an Appointment</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


    )
}
export default Navbar;
