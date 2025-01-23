import Blogs from '@/components/blogs';
import React from 'react';

const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  // console.log(data);
  return (
    <div>
    Hi
    <Blogs data={data} />
    </div>
  );
};

export default Home;