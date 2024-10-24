import { TapeSection } from "../Components/TapeSection";
import AnnouncementBanner from "./components/App";
import { ProjectsSection } from "./components/heroProject";
import Service from "./components/Service";
import Timeamount from "./components/timeamount";

const Page = () => {
  return (
    <div>
      <AnnouncementBanner />
      <ProjectsSection/>
      <Service />
      {/* <h2 className="text-3xl font-bold text-[#00BBA6] text-center py-2">
          Why Choose Us?
        </h2>
      <div className="my-5 md:w-8/12 mx-auto backdrop-blur-md  bg-white  rounded-md shadow-xl">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Cutting-Edge Curriculum:
            </div>
            <div className="collapse-content">
              <p>
                Learn the latest industry skills with HTML, CSS, and Tailwind
                CSS.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Hands-On Learning:
            </div>
            <div className="collapse-content">
              <p>
                Build real-world projects for practical web development
                experience.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Job-Ready Focus:
            </div>
            <div className="collapse-content">
              <p>
                Master the skills employers demand and enter the job market with
                confidence.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Collaborative Community:
            </div>
            <div className="collapse-content">
              <p>
                Join a supportive, interactive network that enhances your
                learning journey.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Future-Proof Skills:
            </div>
            <div className="collapse-content">
              <p>Stay ahead with AI-powered tools and real-time
              collaboration for modern web design.</p>
            </div>
          </div>
        </div>
      </div> */}
      <TapeSection/>
      <Timeamount />
     
      
    </div>
  );
};

export default Page;
