"use client";
import { Fade } from "react-awesome-reveal";
import { IconPicker } from "@/components/shared/icon-picker";
import { TSkillStatus } from "@/lib/types";
import { cn } from "@/utils/utils";
type TProps = {
  icon: string;
  name: string;
  status: TSkillStatus;
};

export function SkillCard({ icon, name, status }: TProps) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer rounded-2xl bg-neutral-100 p-6 text-center transition hover:shadow-[0_0_20px_5px_#159763]">
      <div className="mb-6 text-6xl">
        <Fade direction="up">
          <IconPicker iconName={icon} />
        </Fade>
      </div>
      <h2>{name}</h2>
      <p
        className={cn(
          "mx-auto mt-4 w-fit rounded-md px-3 py-1 text-xs font-bold",
          status === "EXPERT" && "bg-[#00BBA6] text-neutral-900",
          status === "INTERMEDIATE" && "bg-cyan-600",
          status === "FAMILIAR" && "bg-neutral-500"
        )}
      >
        {status}
      </p>
    </div>
  );
}
