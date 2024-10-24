import memojiAvatar1 from "@/assets/images/dd.jpeg";
import memojiAvatar2 from "@/assets/images/dfgdfg.jpeg";
import memojiAvatar3 from "@/assets/images/downad (1).jpeg";
import memojiAvatar4 from "@/assets/images/gdfg.jpeg";
import memojiAvatar5 from "@/assets/images/Make .jpeg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
    {
      name: "James Carter",
      position: "Computer Science Student @ Tech University",
      text: "Manik's teaching made complex topics so easy to understand. His explanations and coding examples helped me grasp React and Node.js in no time. I feel much more confident now!",
      avatar: memojiAvatar1,
    },
    {
      name: "Isabella Thompson",
      position: "Software Engineering Student @ Global Coding Academy",
      text: "Learning from Manik has been an incredible experience. He is patient, thorough, and always ready to answer questions. My frontend skills have improved significantly thanks to his guidance.",
      avatar: memojiAvatar2,
    },
    {
      name: "Ethan Wright",
      position: "Full Stack Development Bootcamp Student",
      text: "Manik’s lessons on the MERN stack were invaluable. He broke down every concept, and his real-world examples helped me build practical projects. I'm now confident in building full-stack applications.",
      avatar: memojiAvatar3,
    },
    {
      name: "Mia Roberts",
      position: "Web Development Student @ CodeAcademy",
      text: "Manik’s passion for teaching is truly inspiring. His hands-on approach and clear explanations have made me much better at working with JavaScript and React. Highly recommend learning from him!",
      avatar: memojiAvatar4,
    },
    {
      name: "Liam Walker",
      position: "Backend Developer Student @ DevSchool",
      text: "Thanks to Manik, I now have a solid understanding of backend development with Node.js and MongoDB. His teaching style made even the toughest concepts easier to grasp. Amazing instructor!",
      avatar: memojiAvatar5,
    },
  ];
  

export const TestimonialsSection = () => {
  return ( 
        <div className=" flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="size-24"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
  );
};
