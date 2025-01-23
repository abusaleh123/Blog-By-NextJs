
import Blogs from '@/components/page';
import React from 'react';

const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  // console.log(data);
  return (
    <div className='py-16'>
  
    <Blogs data={data} />
    </div>
  );
};

export default Home;