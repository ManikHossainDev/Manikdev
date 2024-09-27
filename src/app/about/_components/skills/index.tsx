import { Heading } from "@/components/shared/heading";
import { SkillGroup } from "./skill-group";
import { skills } from "@/app/_data";

export function Skills() {
  return (
    <>
     
      <div className="bg-white rounded-[16px]  p-4 mb-3 ">
        <p className="text-3xl font-[700] font-butler text-center -mt-9 ">
          <button className="bg-white px-5 rounded-md hover:bg-slate-100">Skills</button>
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
