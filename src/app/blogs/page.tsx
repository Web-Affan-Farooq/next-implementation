import React from 'react';
import Blogs_card from '../../components/Blogs-card/Blogs-card';

const Blogs = () => {
  return (
    <main>
        <article>
            <section className='w-full box-border text-white py-36'>
                <h1 className='text-center text-3xl font-bold'>My Blogs</h1>
                <div className='flex flex-row flex-wrap gap-6'>
                    <Blogs_card/>
                </div>
            </section>
        </article>
    </main>
  )
}

export default Blogs