"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const BlogDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
// console.log(data);
    return (
        <div className="flex  min-h-screen mx-auto flex-col justify-center items-center w-10/12 ">
            <div className=" flex flex-col items-center text-center py-16 lg:px-32 md:px-20 px-10 backdrop-blur-lg  space-y-3 rounded-lg bg-gray-950">

            <h1 className="lg:text-4xl w-full md:text-3xl text-xl font-bold text-white/80"><span className="lg:text-5xl md:text-4xl text-3xl font-bold">Title</span>: {post?.title}</h1>
            <p className="text-xl font-bold text-white/90"><span className="text-2xl font-bold">Id: </span>{post.id}</p>
            <p className="text-lg w-3/4 font-semibold text-gray-500 "><span className="text-white">Body:</span> {post.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;