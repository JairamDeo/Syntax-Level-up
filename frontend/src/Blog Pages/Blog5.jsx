import React from 'react';
import RBlog from '../Blog Pages/RBlog';

export default function Blog5() {
  return (
    <div className='py-[80px] px-5 lg:px-[96px]'>
      <section className='w-full flex flex-col lg:flex-row sm:grid sm:grid-cols-2 justify-between gap-[40px]'>
        <aside className='flex flex-col gap-[20px]'>
          <article className='w-[350px] lg:w-[770px] sm:w-[480px] min-h-[500px] shadow-coursebox'>
            <figure className='bg-interview w-full h-[433px] bg-cover rounded-lg'></figure>
            <p className='text-[22px] text-[#009dc3] font-bold p-3'>Tips and tricks for full stack interview</p>
            <div className='flex flex-row gap-[50px] p-3'>
              <p className='text-[15px] text-[#8a8a8a] font-semibold'><i className="fa-solid fa-calendar text-[#66dc3c] p-3"></i>&ensp;17 Mar 2023</p>
              <p className='text-[15px] text-[#8a8a8a] font-semibold '><i className="fa-solid fa-tag text-[#66dc3c] p-3"></i>&ensp;Interview</p>
            </div>

            <div className='p-3 pb-3'>
              <p className='text-[16px] text-justify'>Preparing for a full stack developer interview can be daunting, but with the right mindset and preparation, you can increase your chances of success. Here are some tips and tricks to help you ace your next full stack developer interview:</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>1. Brush Up on Your Technical Skills:</p>
              <p className='text-[16px] text-justify'>As a full stack developer, you'll be expected to have a broad range of technical skills. Make sure you're comfortable with the languages, frameworks, and tools that are commonly used in full stack development. Practice coding challenges and review common algorithms and data structures.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>2. Prepare for Behavioral and Situational Questions:</p>
              <p className='text-[16px] text-justify'>In addition to technical questions, you'll likely be asked behavioral and situational questions. These questions are designed to assess your problem-solving skills, communication abilities, and teamwork skills. Be prepared to give examples from your past experiences that demonstrate these skills.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>3. Research the Company and the Interviewer:</p>
              <p className='text-[16px] text-justify'>Before the interview, research the company and the interviewer to get a sense of their values, culture, and priorities. Look for commonalities between your skills and experiences and what the company is looking for. This will help you tailor your responses to the company's needs.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>4. Practice Your Communication Skills:</p>
              <p className='text-[16px] text-justify'>As a full stack developer, you'll be expected to communicate effectively with both technical and non-technical team members. Practice explaining technical concepts in simple terms and be prepared to collaborate with others to solve problems.</p>
            </div>                        
          </article>
        </aside>
        <RBlog />
      </section>
    </div>
  )
}
