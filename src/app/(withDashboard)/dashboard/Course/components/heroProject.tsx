/* eslint-disable react/jsx-key */
import aimock from "@/assets/images/html.jpg";
import fluentLang from "@/assets/images/javascript.png";
import buildx from "@/assets/images/Next_.jpg";
import prochesta from "@/assets/images/node.jpg";
import next_blog from "@/assets/images/prisma.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import { Cards } from "@/components/shared/Cards";
import Link from "next/link";

const portfolioProjects = [
    {
      company: "SecTechManik",
      year: "2025",
      title: "HTML, CSS, and TailwindCSS Modules",
      results: [
        { title: "Improved layout flexibility with Tailwind by 60%" },
        { title: "Decreased CSS file size by 45%" },
        { title: "Enhanced responsiveness across all devices" },
      ],
      link: "#timeamount",
      image: aimock, // Replace with actual image path
    },
    {
      company: "SecTechManik",
      year: "2025",
      title: "JavaScript and TypeScript Modules",
      results: [
        { title: "Increased student engagement by 55%" },
        { title: "Reduced bugs with TypeScript by 40%" },
        { title: "Improved code readability and maintainability" },
      ],
      link: "#timeamount",
      image: fluentLang, // Replace with actual image path
    },
    {
      company: "SecTechManik",
      year: "2025",
      title: "React and Next.js Modules ",
      results: [
        { title: "Boosted course enrollment by 30%" },
        { title: "Enhanced site SEO with Next.js by 35%" },
        { title: "Reduced page load time by 25%" },
      ],
      link: "#timeamount",
      image: buildx, // Replace with actual image path
    },
    {
      company: "SecTechManik",
      year: "2025",
      title: "Node.js and MongoDB Modules ",
      results: [
        { title: "Increased API response speed by 50%" },
        { title: "Reduced server load by 35%" },
        { title: "Optimized data storage using MongoDB" },
      ],
      link: "#timeamount",
      image: prochesta, // Replace with actual image path
    },
    {
      company: "SecTechManik",
      year: "2025",
      title: "PostgreSQL and Prisma Modules",
      results: [
        { title: "Enhanced database query performance by 45%" },
        { title: "Improved data consistency and reliability" },
        { title: "Streamlined student progress tracking system" },
      ],
      link: "#timeamount",
      image: next_blog, // Replace with actual image path
    },
  ];
  
  
export const ProjectsSection = () => {
  return (
    <section className="pb-16">
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Cards
              key={project.title}
              className=" p-8 px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 text-white">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-gray-400">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-[#00BBA6] text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Enroll Now</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto "
                  />
                </div>
              </div>
            </Cards>
          ))}
        </div>
    </section>
  );
};
