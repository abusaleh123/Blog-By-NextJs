

import Link from "next/link";

const Blogs = ({data}) => {
    console.log(data);
    return (
        <div className="grid grid-cols-5 gap-5 w-11/12 mx-auto">
            {
                data.map(info => <div key={info.id} className="backdrop-blur-lg hover:bg-gray-800 bg-white/5 py-3 px-6 rounded-lg">
                    <Link  href={`blog/${info.id}`} className="text-lg hover:text-green-500 ">{info.title}</Link>
                </div>)
            }
        </div>
    );
};

export default Blogs;