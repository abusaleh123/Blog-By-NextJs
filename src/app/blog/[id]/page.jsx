

const BlogDetails = async({params}) => {
const res = fetch(` https://jsonplaceholder.typicode.com/posts/${params.id}`)
const data = await (await res).json()
// console.log(data);
    return (
        <div className="flex w-fit min-h-screen mx-auto flex-col justify-center items-center ">
            <div className=" flex flex-col items-center text-center py-16 lg:px-32 md:px-20 px-10 backdrop-blur-lg  space-y-3 rounded-lg bg-green-100">

            <h1 className="lg:text-4xl w-full md:text-3xl text-xl font-bold text-black"><span className="lg:text-5xl md:text-4xl text-3xl font-bold">Title</span>: {data.title}</h1>
            <p className="text-3xl font-bold text-black"><span className="text-4xl font-bold">Id: </span>{data.id}</p>
            <p className="text-lg w-3/4 font-semibold text-gray-600 ">{data.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;