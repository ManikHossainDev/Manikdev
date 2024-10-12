import Image from 'next/image';
import Link from 'next/link';
import './CredentialsCss.css';
const CredentialsPhoto = () => {
  return (
    <div>
       <div className="col-span-12 md:col-span-6 me p-1">
      <div className="boxs container mx-auto p-4 bg-white rounded-lg shadow-lg ">
        <div className="contentss flex flex-col items-center text-center">
          <Image
            src="https://i.ibb.co.com/J37bMzc/m1.png"
            alt="Manik Hossain"
            width={224}
            height={150}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">Manik Hossain</h2>
          <Link
            href="https://drive.google.com/file/d/1a8vMSUTFnmM2HpjSAPkiJRxMDntR8C1y/view?usp=sharing"
            passHref
          >
            <span rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline mt-2">
              View CV
            </span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};



export default CredentialsPhoto;