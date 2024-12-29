// import Section_1 from '@/components/Section-1/Section-1';
// import React from 'react';

// const Home = () => {
//   return (
//     <div><br /><br /><br /><br /><br /><br /><br /><br />
//       <Section_1/>
//     </div>
//   )
// }

// export default Home;

"use client";

import React, { useState } from 'react';

const Home = () => {
  const [APIData, setAPIData] = useState<string[]>([
    "Mango",
    "orange",
    "banana",
    "peach"
  ]);

  return (
    <div className='text-white'>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      
    </div>
  )
}

export default Home