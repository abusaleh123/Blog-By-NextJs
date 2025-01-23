"use client"

const Blogs = ({data}) => {
    console.log(data);
    return (
        <div className="grid grid-cols-5">
            {
                data.map(info => <div key={info.id} className="">
                    <p className="text-lg">{info.title}</p>
                </div>)
            }
        </div>
    );
};

export default Blogs;