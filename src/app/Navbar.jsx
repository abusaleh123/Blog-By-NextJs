import Image from "next/image";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
const {getUser} = getKindeServerSession();
const user = await getUser();
  return (
    <nav className=" text-white" >
      <div className="w-11/12 mx-auto flex justify-between items-center py-10 ">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image src="/n.png" alt="Logo" width={50} height={50} />
          <span className="ml-2 text-3xl font-bold">Nextify</span>
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
            user ? <LogoutLink className="btn bg-green-500 rounded-lg border-none hover:bg-blue-500 text-lg text-white " > Log out</LogoutLink> :   <LoginLink className="btn bg-blue-500 border-none hover:bg-green-500 text-lg text-white " >Sign in</LoginLink>
          }
            
          
          
           
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
