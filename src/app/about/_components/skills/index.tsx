import { Heading } from "@/components/shared/heading";
import { SkillGroup } from "./skill-group";
import { skills } from "@/app/_data";
import SectionTitle from "../titele";

export function Skills() {
  return (
    <>
      <div className="bg-white rounded-[16px]  p-4 mb-3 ">
        <p className="text-xl font-[500] font-butler text-center -mt-11">
          <button className="bg-white text-2xl px-2 pb-3 pt-2 rounded-md">
          <SectionTitle
          title={"Skills"}
          subTitle={"Full Stack Development"}
        ></SectionTitle>
          </button>
        </p>
        <SkillGroup title="Front End" skills={skills.frontEnds} />
      </div>
      <div className="bg-white rounded-[16px]  p-4 mb-3">
        <SkillGroup title="Back End" skills={skills.backends} />
      </div>
      <div className="bg-white rounded-[16px]  p-4 mb-3">
        <SkillGroup title="Tools" skills={skills.tools} />
      </div>
    </>
  );
}
