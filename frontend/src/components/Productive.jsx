import productivity from '../assets/services/productivity.png';

export default function Productive() {
    return (
        <div className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center mb-16">
                    <div className="md:w-1/2 md:pr-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Productive</h2>
                        <p className="text-lg md:text-xl mb-8">
                        <blockquote>
                        Effective
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
                        <span class="relative text-white">time management</span>
                        </span>
                        is crucial for productivity. Use tools like calendars and task lists to prioritize tasks.
                        </blockquote>
                        <blockquote>
                        Practice focus techniques such as the
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
                        <span class="relative text-white">Pomodoro Technique</span>
                        </span>
                        to maintain concentration and enhance productivity.
                        </blockquote>
                        </p>
                        <p className="text-lg md:text-xl mb-8">
                        <blockquote>
                        Set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) 
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                        <span class="relative text-white">goals to stay motivated</span>
                        </span>
                        and on track with your objectives.
                        Explore productivity apps and tools like task managers and note-taking apps to streamline your workflow.
                        </blockquote>
                        <blockquote>
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span class="relative text-white">Discover tips and tools</span>
                        </span>
                        to boost your productivity and achieve your goals efficiently.
                        </blockquote>
                        </p>
                        <a
                        href="https://www.verywellmind.com/how-to-be-more-productive-6499714"
                        className="mt-3 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        target="_blank"  // Open link in a new tab
                        rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                        >
                        Learn More
                        </a>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src={productivity}
                            alt="Productivity Image"
                            className="rounded-xl"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
