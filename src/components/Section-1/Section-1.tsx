import React from 'react'

const Section_1 = () => {  
  return (
    <section className='content text-white w-[93vw] bg-[rgba(255,255,255,0.1)] rounded-3xl py-[130px] m-auto box-border flex flex-row-reverse flex-nowrap justify-center align-middle gap-[50px] z-10 px-5 max-[855px]:flex-col-reverse max-[855px]:py-[50px]'>
        <div className='w-1/2 max-[855px]:w-full max-[855px]:m-auto max-[855px]:text-center'>
        <h1 className='text-4xl leading-[46px] font-bold'>Explore Muhammad's Docs</h1>
        <br />
        <p className='text-gray-400'>Key answers to the most complexed solved problems related to 
            <span className='text-link font-semibold'> NextJS</span> 
            <span className='text-link font-semibold'> ReactJS</span> and  <span className='text-link font-semibold'> Typescript</span> . Explore, review and boost your skills.
         </p>
        <br />
        <button type="button" className='px-[20px] py-[10px] text-white font-bold bg-pink-600 rounded-lg'>Explore Now</button> 
        </div>
        <img src="https://img.freepik.com/premium-photo/generated-illustration-businessman-using-computer-document-management-system_1088754-8790.jpg?ga=GA1.1.323865264.1719582461&semt=ais_hybrid" alt="" className='w-[350px] object-cover max-[855px]:m-auto' />
    </section>
  )
}

export default Section_1