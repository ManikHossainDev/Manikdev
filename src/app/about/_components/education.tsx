"use client"
import { educations } from '@/app/_data/education';
import { Heading } from '@/components/shared/heading';
import { Fade } from "react-awesome-reveal";

export function Education() {
  return (
    <>
      <Heading className="pt-2">Education.</Heading>
      <div className="mt-6 grid gap-3 space-y-3 overflow-hidden">
        <Fade direction="left">
        {educations.map(
          ({ degreeName, institution, obtainedCgpa, totalCgpa, year }) => (
            <div
              key={degreeName}
              className="flex cursor-pointer flex-col rounded-2xl bg-neutral-100 p-7 transition hover:shadow-[0_0_20px_5px_#159763]"
            >
              <h3 className="text-blue-500">{year}</h3>
              <h4 className="mb-1 mt-3 text-lg font-semibold">{degreeName}</h4>
              <p className="mb-3 text-xs text-gray-500">{institution}</p>
              <h2 className="mt-auto">
                CGPA / GPA :{' '}
                <span className="text-blue-500">{obtainedCgpa}</span> of{' '}
                {totalCgpa}
              </h2>
            </div>
          ),
        )}
        </Fade>
      </div>
    </>
  );
}
