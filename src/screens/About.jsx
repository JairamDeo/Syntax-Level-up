// About.jsx
import React from 'react';

export default function About() {
    const cards = [
        {
            number: '01',
            title: 'Why Choose Us',
            description: 'We provide the best Full Stack Development training. Our courses cover a wide range of technologies and best practices. We have a team of experienced instructors and industry experts. We offer personalized attention and ongoing support to our students.',
            aos: 'fade-up',
            aosDuration: '1000'
        },
        {
            number: '02',
            title: 'Our Mission',
            description: 'To empower individuals with the skills and knowledge needed to succeed in the tech industry. To provide practical, hands-on training and resources for Full Stack Development. To foster a community of Full Stack Developers, Web Developers, and Software Engineers.',
            aos: 'fade-up',
            aosDuration: '2000'
        },
        {
            number: '03',
            title: 'Our Vision',
            description: 'To be the leading institute for Full Stack Development training. To constantly innovate and update our courses to meet industry needs. To inspire and facilitate career growth and success for our students.',
            aos: 'fade-up',
            aosDuration: '3000'
        },
    ];

    const cards2 = [
        {
            number: '6000+',
            description: 'students Trained'
        },
        {
            number: '400+',
            description: 'Courses Taught'
        },
        {
            number: '5000+',
            description: 'Students Placed'
        },
        {
            number: '17LPA',
            description: 'Highest Package'
        },
    ];

    return (
        <div className='py-[80px]'>
            <div className='px-5 py-5 lg:px-[100px]'>
                <h1 className='font-bold text-[48px] leading-[60px] mb-[2rem]'>Welcome to Syntax Level Up</h1>
                <p className='min-h-[394px] text-[12px] lg:text-[16px] text-[#010A18] font-[400] leading-[28px] mb-[2rem]'>
                    Welcome to Syntax Level Up, the leading institute for Full Stack Development training!<br />
                    At Syntax Level Up, we believe in providing the best training and resources to our students to help them build successful careers in<br />the tech industry.<br />
                    Our institute offers comprehensive courses in Full Stack Development, covering a wide range of technologies, programming<br />languages, and frameworks used in web development. We provide practical, hands-on training in building responsive, scalable, and<br />interactive web applications, using industry-standard tools and best practices. Our team of experienced instructors and industry<br />experts are dedicated to providing personalized attention to each student, helping them achieve their learning goals and prepare for<br />
                    their career in Full Stack Development.<br />
                    At Syntax Level Up, we understand the importance of staying up-to-date with the latest trends and advancements in technology.<br />That's why we constantly update our course materials and offer ongoing support to our students, ensuring that they have the skills<br />and knowledge needed to succeed in the fast-paced world of Full Stack Development.<br />
                    We welcome you to join our community of Full Stack Developers, Web Developers, and Software Engineers, and start your journey<br />towards a successful and fulfilling career in the tech industry.
                </p>

                <div className='lg:-[930px] grid grid-cols-1 lg:grid-cols-3 justify-between gap-[40px] mx-auto'>
                    {cards.map((card, index) => (
                        <div key={index} className='w-[290px] min-h-[317px]' data-aos={card.aos} data-aos-duration={card.aosDuration}>
                            <h2 className='text-[#dbdbdb] pb-[22px] leading-[46px] text-[60px]'>{card.number}</h2>
                            <h4 className='text-[#009dc3] text-[24px] pb-[25px] font-bold'>{card.title}</h4>
                            <p className='text-[16px] font-[400] leading-[25px] text-justify pb-[2rem]'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 w-full h-[300px] lg:h-[250px] bg-[#07294D] justify-around items-center mx-auto '>
                {cards2.map((card1, index) => (
                    <div key={index} className='mx-auto'>
                        <h3 className='text-[#66dc3c] font-bold text-[36px]'>{card1.number}</h3>
                        <p className='text-[15px] font-[400] text-[#fff] '>{card1.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}