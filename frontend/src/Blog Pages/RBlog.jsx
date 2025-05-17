import React from 'react';
import { Link } from 'react-router-dom';

export default function RBlog() {
    const cards = [
        {
            bgImg: 'whyjava',
            heading: 'Why do most industries use Java?',
            date: '17 Jan 2023',
            linkTo: '/why-choose-java'            
        },
        {
            bgImg: 'full-stack-development',
            heading: 'What does full-stack developers actually do?',
            date: '2 Feb 2023',
            linkTo: '/what-is-role-of-full-stack-developers'
        },
        {
            bgImg: 'interview',
            heading: 'Tips and tricks for full stack interview',
            date: '17 Mar 2023',
            linkTo: '/fullstack-interview-tips-and-tricks'
        },
    ];

    return (
        <main className='shadow-coursebox w-[350px] lg:w-[370px] h-[865px] mx-auto blogm flex flex-col p-6 gap-[20px]' data-aos="fade-left" data-aos-duration="2000">
            <h5 className='text-[18px] text-[#009dc3] font-bold '>Popular Posts</h5>
            {cards.map((card, index) => (
                    <article key={index} className='w-[280px] h-[350px]'>
                        <figure className={`bg-${card.bgImg} w-full h-[157px] bg-cover rounded-md`} data-aos="zoom-in" data-aos-duration="2000"></figure>
                        <Link to={card.linkTo} className='text-[18px] text-[#009dc3] font-bold'>{card.heading}</Link>
                        <p className='text-[16px] font-[500] leading-[28px] text-[#505050]'>{card.date}</p>
                    </article>
            ))}
        </main>
    )
}
