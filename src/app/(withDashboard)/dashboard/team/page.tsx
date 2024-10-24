"use client";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Call to Action */}
        <div className="text-center pb-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BBA6] to-[#00BBA6] mb-6">
            Join Us Today!
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join our comprehensive Web Design Course and learn the essential
            skills to create stunning and responsive websites. From the
            fundamentals to advanced techniques, this course is designed for
            both beginners and those looking to enhance their skills.
          </p>
          <Link
            href="/login"
            className="inline-block bg-gradient-to-r from-[#00BBA6] to-[#00BBA6] text-slate-100 font-bold py-3 px-6 rounded-full shadow-lg hover:from-green-300 hover:to-teal-400 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Team Section */}
        <div className="backdrop-blur-md bg-opacity-10 p-10 rounded-3xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-[#00BBA6] mb-6">
            Meet the Team
          </h2>
          <div>
            <div className="">
              <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                  <h2 className="text-2xl font-bold text-gray-500">
                    Mission And Values
                  </h2>
                  <p className="text-gray-500 lg:w-8/12 lg:mx-auto">
                    Meet the team behind Play Time Hub
                  </p>
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                  <Zoom>
                    <div className="space-y-4 text-center">
                      <Image
                        className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                        src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                      />
                      <div>
                        <h4 className="text-2xl text-gray-500">Hentoni Doe</h4>
                        <span className="block text-sm text-gray-500/70">
                          Chief Officer
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4 text-center">
                      <Image
                        className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                        src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                        alt="man"
                        loading="lazy"
                        width="1000"
                        height="667"
                      />
                      <div>
                        <h4 className="text-2xl text-gray-500">Jonathan</h4>
                        <span className="block text-sm text-gray-500/70">
                          CEO-Founder
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4 text-center">
                      <Image
                        className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                        src="https://i.ibb.co.com/NN529CP/closeup-smiling-young-beautiful-indian-woman-1262-2261.jpg"
                        alt="woman"
                        loading="lazy"
                        width="1000"
                        height="667"
                      />
                      <div>
                        <h4 className="text-2xl text-gray-500">Anabelle</h4>
                        <span className="block text-sm text-gray-500/70">
                          Chief Officer
                        </span>
                      </div>
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="backdrop-blur-md bg-opacity-30 bg-white p-10 rounded-3xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-[#00BBA6] mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our mission is to revolutionize web design education by creating
            courses that are not only practical but also future-focused. We aim
            to make learning web design accessible and engaging for everyone,
            whether you&apos;re a beginner or an experienced developer. By
            integrating the latest tools, techniques, and frameworks such as
            HTML, CSS, and Tailwind CSS, we ensure that our students are
            job-ready and equipped with the skills to build modern, responsive,
            and visually stunning websites. We&apos;re here to empower the next
            generation of designers and developers to shape the future of the
            web.
          </p>
        </div>

        {/* Why Us Section */}
        {/* <div className="backdrop-blur-md bg-opacity-30 bg-white p-10 rounded-3xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-[#00BBA6] mb-6">
            Why Choose Us?
          </h2>
          <ul className="list-inside text-lg text-gray-500 leading-relaxed space-y-4">
            <li>
              Cutting-Edge Curriculum: Learn the latest industry skills with
              HTML, CSS, and Tailwind CSS.
            </li>
            <li>
              Hands-On Learning: Build real-world projects for practical web
              development experience.
            </li>
            <li>
              Job-Ready Focus: Master the skills employers demand and enter the
              job market with confidence.
            </li>
            <li>
              Collaborative Community: Join a supportive, interactive network
              that enhances your learning journey.
            </li>
            <li>
              Future-Proof Skills: Stay ahead with AI-powered tools and
              real-time collaboration for modern web design.
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
