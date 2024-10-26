import Image from "next/image";

const TechOrbit = () => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className="w-[366px] h-[366px] relative"
        style={{
          width: "360px",
          height: "360px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            'url("https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/bg/partners-circle.png")',
        }}
      >
        <div className="relative w-[360px] h-[360px] mx-auto">
          {/* Rotating Partners */}
          <div className="w-full h-full animate-[spin_30s_linear_infinite] ">
            {/* Partner 1 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-y-[-217%]">
              <Image
                src="https://i.ibb.co.com/r6Y1pgh/mongo.png"
                alt="MongoDB Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite ]"
              />
            </div>

            {/* Partner 2 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-x-[164%] translate-y-[-153%]">
              <Image
                src="https://i.ibb.co.com/syPX4Ks/nextjs.png
"
                alt="Next.js Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite]"
              />
            </div>

            {/* Partner 3 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-x-[220%]">
              <Image
                src="https://i.ibb.co.com/zfdskbw/node.png"
                alt="TypeScript Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite] "
              />
            </div>

            {/* Partner 4 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-x-[164%] translate-y-[159%]">
              <Image
                src="https://i.ibb.co.com/ynnyYx4/react.png"
                alt="Redux Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite]"
              />
            </div>

            {/* Partner 5 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-y-[225%]">
              <Image
                src="https://i.ibb.co.com/8z6hc5H/redux.png"
                alt="React Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite]"
              />
            </div>

            {/* Partner 6 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-x-[-157%] translate-y-[163%]">
              <Image
                src="https://i.ibb.co.com/WpvwPJy/tailwind.png"
                alt="Node.js Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite]"
              />
            </div>

            {/* Partner 7 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-x-[-209%]">
              <Image
                src="https://i.ibb.co.com/82tXwWh/ts.png"
                alt="Express.js Logo"
                width={40}
                height={40}
                className="animate-[spin_30s_linear_infinite] "
              />
            </div>

            {/* Partner 8 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[45px] h-[45px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transform translate-x-[-157%] translate-y-[-151%]">
              <Image
                src="https://i.ibb.co.com/S0xD90Z/png-clipart-postgresql-database-logo-computer-icons-replication-software-developer-miscellaneous-blu.png"
                alt="Tailwind CSS Logo"
                width={45}
                height={45}
                className="animate-[spin_30s_linear_infinite]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute top-[4px] left-[4px] right-0 bottom-0 m-auto w-[230px] h-[230px] shadow-md rounded-full">
          <Image
            className="rounded-full transition hero-img"
            alt="logo"
            src="https://i.ibb.co.com/J37bMzc/m1.png"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default TechOrbit;
