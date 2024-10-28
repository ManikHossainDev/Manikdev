import FullImageReveal from "../(withDashboard)/dashboard/Components/FullImageReveal";
import Photoskills from "./components/photoskills";

const ServicesPage = () => {
  return (
    <div className="md:my-5 mb-4">
      <h1 className="text-center text-7xl text-semibold mb-2">Service</h1>
      <Photoskills />
      <div className="py-7 mt-3">
        <FullImageReveal
          src="https://i.ibb.co.com/9hjrDht/1655411472320.jpg"
          alt="Beautiful landscape"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
