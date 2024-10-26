import { TapeSection } from "../Components/TapeSection";
import AccordionWithIndex from "./components/acodiation";
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
      <h2 className="text-3xl font-bold text-[#00BBA6] text-center mt-3 py-3">
          Why Choose Us?
        </h2>
      <div className="py-6">
      <AccordionWithIndex/>
      </div>
      
      <TapeSection/>
      <Timeamount />
     
      
    </div>
  );
};

export default Page;
