import Image from "next/image";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
const {getUser} = getKindeServerSession();
const user = await getUser();
  return (
    <nav className="bg-gray-800 text-white">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4 ">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image src="/lo.png" alt="Logo" width={50} height={50} />
          <span className="ml-2 text-3xl font-bold">MyApp</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center text-lg font-semibold ">
      
            <Link href="/">
              Home
            </Link>
            <Link href="/profile">
             Profile
            </Link>
          {
            user ? <LogoutLink className="btn bg-blue-500 border-none hover:bg-blue-500 text-lg text-white " > Log out</LogoutLink> :   <LoginLink className="btn bg-blue-500 border-none hover:bg-blue-500 text-lg text-white " >Sign in</LoginLink>
          }
            
          
          
           
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
