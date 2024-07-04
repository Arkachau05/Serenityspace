import productivity from '../assets/services/productivity.png';
import gaming from '../assets/services/gaming.png';

export default function Productive() {
    return (
        <div id="get-productive" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                {/* First section */}
                <div className="flex flex-col md:flex-row items-center justify-center mb-24">
                    <div className="md:w-1/2 md:pr-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Productive</h2>
                        <p className="text-lg md:text-xl mb-8">
                            <blockquote>
                                Effective
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
                                    <span className="relative text-white">time management</span>
                                </span>
                                is crucial for productivity. Use tools like calendars and task lists to prioritize tasks.
                            </blockquote>
                            <blockquote>
                                Practice focus techniques such as the
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
                                    <span className="relative text-white">Pomodoro Technique</span>
                                </span>
                                to maintain concentration and enhance productivity.
                            </blockquote>
                        </p>
                        <p className="text-lg md:text-xl mb-8">
                            <blockquote>
                                Set SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                                    <span className="relative text-white">goals to stay motivated</span>
                                </span>
                                and on track with your objectives.
                                Explore productivity apps and tools like task managers and note-taking apps to streamline your workflow.
                            </blockquote>
                            <blockquote>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                    <span className="relative text-white">Discover tips and tools</span>
                                </span>
                                to boost your productivity and achieve your goals efficiently.
                            </blockquote>
                        </p>
                        <a
                            href="https://www.verywellmind.com/how-to-be-more-productive-6499714"
                            className="mt-3 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
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

                {/* Second section */}
                <div className="flex flex-col md:flex-row items-center justify-center mb-16">
                    <div className="md:w-1/2 md:pr-10 order-2 md:order-1 md:mt-0">
                        <img
                            src={gaming}
                            alt="Gaming Image"
                            className="rounded-xl max-w-full h-auto"
                            style={{ maxWidth: '500px' }}
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 order-1 md:order-2">
                        <p className="text-lg md:text-xl mb-8">
                            <blockquote>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block">
                                    <span className="relative text-white">Online gaming can be good for your mental health</span>
                                </span>
                                Mental health practitioners are using online gaming to treat stress and other disorders.
                                Clinicians can let patients play independently or join them for treatment on multiplayer platforms such as Roblox or Minecraft.
                            </blockquote>
                        </p>
                        <p className="text-lg md:text-xl mb-8">
                            <blockquote>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
                                    <span className="relative text-white">Benefits of Sports for Mental Health.</span>
                                </span>
                                About 75% to 90% of doctor visits are for stress-related illnesses. Sports help you manage stress.
                                Exercise causes your body to release endorphins, the chemicals in your brain that relieve pain and stress.
                            </blockquote>
                        </p>
                        <a
                            href="https://www.weforum.org/agenda/2021/12/online-gaming-stress-therapy-mental-health/"
                            className="mt-3 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Full Article
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
