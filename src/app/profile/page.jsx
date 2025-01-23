

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
  const {isAuthenticated} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  
  return (
    <div>
      {
      isUserAuthenticated ? (<>
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome to your profile!
      </h1>
    </div>
        </>) : (<>
          
          </>)
    }
    </div>
  );
};

export default Profile;
