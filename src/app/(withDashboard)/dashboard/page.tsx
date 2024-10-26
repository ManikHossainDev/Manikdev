import FullImageReveal from "./Components/FullImageReveal";
import Homestudio from "./Components/Homestudio";

const Page = () => {
  return (
    <div className="">
      <FullImageReveal
        src="https://i.ibb.co.com/DRbjzMX/462538765-1051617399738736-9211789484925033907-n.jpg"
        alt="Beautiful landscape"
      />
      <h2 className="text-xl text-center py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BBA6] to-[#03f3db] ">
        Welcome to My Studio Desk!
      </h2>
      
      <Homestudio />

     
    
    </div>
  );
};

export default Page;
