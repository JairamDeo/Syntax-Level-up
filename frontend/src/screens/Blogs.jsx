import React from 'react';
import { Link } from 'react-router-dom';
import RBlog from '../Blog Pages/RBlog';

export default function Blogs() {
  const cards = [
    {
      bgImg: 'b1',
      heading: 'Most asked Java Full Stack interview questions',
      date: '25 Jan 2023',
      tags: 'Interview questions',
      desc: 'Prepare for the java interview using our preparation guide.',
      linkTo: '/java-interview-questions',
      aos: 'fade-right',
      aosDuration: '1500'      
    },
    {
      bgImg: 'b2',
      heading: 'Common interview questions asked at IBM',
      date: '13 Feb 2023',
      tags: 'Interview Questions',
      desc: 'Here are some commonly asked interview questions related to Full Stack Development at IBM, along with their answers.',
      linkTo: '/most-common-interview-questions-asked-at-ibm',      
      aos: 'fade-up',
      aosDuration: '2000'        
    },
    {
      bgImg: 'b3',
      heading: 'What does full-stack developers actually do?',
      date: '2 Feb 2023',
      tags: 'Development',
      desc: 'In this blog post, we will explore what full stack developers do and what their role entails, with a specific focus on Java Full Stack Developers.',
      linkTo: '/what-is-role-of-full-stack-developers',
      aos: 'fade-up',
      aosDuration: '2000'
    },
    {
      bgImg: 'whyjava',
      heading: 'Why do most industries use Java?',
      date: '17 Jan 2023',
      tags: 'Programming',
      desc: 'Java is a versatile and powerful programming language that has stood the test of time.',
      linkTo: '/why-choose-java',
      aos: 'fade-up',
      aosDuration: '2000'
    },
  ];

  return (
    <div className='py-[80px] px-5 lg:px-[96px]'>
      <section className='w-full flex flex-col lg:flex-row sm:grid sm:grid-cols-2 justify-between gap-[40px]'>
        <aside className='flex flex-col gap-[20px] mx-auto'>
          {cards.map((card, index) => (
            <article key={index} className='w-[350px] lg:w-[770px] lg:min-h-[500px] shadow-coursebox' data-aos={card.aos} data-aos-duration={card.aosDuration}>
              <figure className={`bg-${card.bgImg} w-full h-[233px] lg:h-[433px] bg-contain bg-no-repeat lg:bg-cover rounded-lg`}></figure>
              <Link to={card.linkTo} className='lg:text-[22px] text-[#009dc3] font-bold p-3'>{card.heading}</Link>
              <div className='flex flex-row gap-[50px] lg:p-3'>
                <p className='lg:text-[15px] text-[#8a8a8a] font-semibold'><i className="fa-solid fa-calendar text-[#66dc3c] p-3"></i>&ensp;{card.date}</p>
                <p className='lg:text-[15px] text-[#8a8a8a] font-semibold '><i className="fa-solid fa-tag text-[#66dc3c] p-3"></i>&ensp;{card.tags}</p>
              </div>
              <p className='text-[#505050] lg:text-[16px] font-semibold p-3'>{card.desc}</p>
            </article>
          ))}
        </aside>
        <RBlog />
      </section>
    </div>
  )
}
