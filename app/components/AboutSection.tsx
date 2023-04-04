import React from "react"
import Image from "next/image"

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
    return (
        // <!-- About Section -->
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48 mx-10 md:mx-6 sm:mx-3" >

                {/* This is the title for the about section */}
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                {/* This is section holds the description and skills */}
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">

                    {/* This is the description for the about section */}
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get in Touch!
                        </h1>
                        <p>
                            Hello, my name is Arsene.
                            <br />
                            I am a passionate and <span className="font-bold"> {"highly motivated"}</span>,
                            research engineer based in Madrid, Spain. With a <span className="font-bold">{"strong ambition"}</span>, and <span className="font-bold">{"drive"}</span> to challenge the norms, I am dedicated to build modern tools and products that exploit exhaustively software engineering, artificial intelligence and data engineering.
                        </p>
                        <br />
                        <p>
                            I earned a PhD in Information Engineering and Sciences from the University of L&apos;Aquila, and also hold a Master of Science in Information Technology from Carnegie Mellon University.
                        </p>
                        <br />
                        <p>
                            My expertise spans several areas, including software engineering, model-driven engineering, cloud computing, and data engineering and analytics, particularly in the context of developing data-intensive applications. My hobbies include reading, writing, and making music.
                        </p>
                        <br />
                        <p>
                            Driven by my passion for technology, I believe in
                            <span className="font-bold text-teal-500">
                                continuous growth, thinking out-of-box and pushing boundaries.
                            </span> Open to new opportunities and challenges, I amm excited to explore where my career takes me. With a commitment to excellence and hunger for progress, I am confident in making meaningful contributions to organizations that value innovation and growth. 🙂
                        </p>
                    </div>

                    {/* This is the skills section */}
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                        <Image
                            src="/hello.webp"
                            alt=""
                            width={325}
                            height={325}
                            className="block mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection