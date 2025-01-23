

import Link from "next/link";

const Blogs = ({data}) => {
    // console.log(data);
    return (
        <div className="grid grid-cols-5 gap-5 w-11/12 mx-auto">
            {
                data.map(info => <div key={info.id} className="backdrop-blur-lg hover:bg-gray-800 bg-gray-950 h-36 flex flex-col justify-center items-center px-6 rounded-lg">

                    <Link  href={`blog/${info.id}`} className="text-lg hover:text-green-500 ">{info.title}</Link>
                    <p className="h-8 w-8 flex justify-center items-center border-2 border-green-600 rounded-full absolute right-0 top-0">{info.id}</p>
                </div>)
            }
        </div>
    );
};

export default Blogs;