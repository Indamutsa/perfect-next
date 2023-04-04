"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        // <!-- Hero Section -->
        <section id="home">

            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left mx-10 md:mx-6 sm:mx-3">

                {/* This is image for the portflio, it is rounded and has a shadow */}
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/portfolio.jpeg"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>

                {/* This is the text for the portfolio */}
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Arsene!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-semibold text-teal-600">
                            Software Engineer{" "}
                        </span>
                        based in Madrid, Spain. Working towards building software tools and products that
                        make a remarkable difference and spice our daily boring lives. 🚀 🚀
                    </p>

                    {/* This is the button for the portfolio */}
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>
                </div>
            </div>


            {/* This is the arrow down for the portfolio, it goes to button */}
            <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    {/* This is the arrow down icon */}
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection