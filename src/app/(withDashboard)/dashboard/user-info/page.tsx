import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Manik | User Info",
  description: "contacts information",
};
const UserInfoPage = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
      <div >
        {session?.user && (
          <>
            <h1 className="text-4xl text-center mt-10">
              Welcome {session?.user?.name}
            </h1>
            <h1 className="text-4xl text-center mt-10">
              Logged-in user email: {session?.user?.email}
            </h1>
            <Image
              src={ session?.user?.image || "https://ibb.co/dKhNftn" }  
              width={100}
              height={100}
              alt="user image"
              className="mx-auto rounded-full"
            />
          </>
        )}
      </div>
  );
};

export default UserInfoPage;
