import React from 'react';
import { ReactTyped } from "react-typed";
import EnquiryForm from '../components/EnquiryForm';
import CourseCard from '../components/CourseCard';
import Carousel from '../components/Carousel';
import Cardslider from '../components/Cardslider';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='font-sans'>
            <section className='relative h-[568px] px-5 lg:px-[100px] flex flex-col justify-center items-center'>
                <ellipse className='elipsel hidden lg:block'></ellipse>
                <head className='h-[304px] py-[56px] flex flex-col justify-center items-center lg:gap-[24px]'>
                    <h2 className='lg:w-[1240px] h-[132px] text-center font-bold text-[20px] lg:text-[48px] '>
                        Best Software Training Institute in Pune with<br /><span className='text-[#0473EA]'>Guaranteed placement</span>
                    </h2>
                    <h2 className='text-[20px] lg:text-[28px] sm:text-[28px] font-semibold text-center'>Elevate Your Skills with Syntax Level Up</h2>
                    <ReactTyped className='text-[18px] lg:text-[22px] sm:text-[22px]'
                        strings={[
                            "Full Stack Development",
                            "Mern Stack Development",
                            "Mean Stack Development",
                            "Web Development",
                            "UiUx Design",
                            "React Development"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </head>
                <button className="w-[220px] h-[56px] mt-[4rem] mx-auto block bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Learn More
                </button>
                <ellipse className='elipser hidden lg:block'></ellipse>
            </section>
            <Cardslider />

            <section className=' py-[56px]'>
                <h2 className='text-center text-[24px] lg:text-[40px] font-700 leading-[48px]'>Enquire Now</h2>
                <section className='min-h-[564px] py-[48px] px-5 lg:gap-[72px] lg:px-[100px] flex flex-col lg:flex-row justify-between items-center'>
                    <aside className='w-full lg:w-[632px] lg:h-[484px] pt-0 pl-[24px] pb-[36px] pr-[16px] gap-[64px]' data-aos="fade-right" data-aos-duration="2000">
                        <article className='lg:w-[592px] h-[69px] font-500 text-[14px] lg:text-[19px] text-justify leading-[23px] capitalize'>
                            Be ready to get your dream job in IT Sector. Our curriculum - Learn by doing, will help you to understand the concepts better.
                        </article>
                        <div className='flex flex-col lg:flex-row sm:flex-row flex-wrap justify-center items-center gap-12 w-full py-[60px] mx-auto'>
                            <div className='bg-[#FFD5DF] shadow-boxShadow1 w-[209px] h-[120px] border-[#FF537D] sec2box4 flex flex-col justify-around mx-auto'>
                                <p className='mx-auto w-[151px] h-[37px] font-bold text-[30px] text-center'>10000+</p>
                                <p className='mx-auto w-[162px] h-[24px] font-bold text-center'>Student Enrolled</p>
                            </div>

                            <div className='bg-[#BFF5F2] shadow-boxShadow2 w-[209px] h-[120px] border-[#008E85] sec2box4 flex flex-col justify-around mx-auto'>
                                <p className='mx-auto w-[151px] h-[37px] font-bold text-[30px] text-center'>10000+</p>
                                <p className='mx-auto w-[162px] h-[24px] font-bold text-center'>Student Enrolled</p>
                            </div>

                            <div className='bg-[#DFCEFB] shadow-boxShadow3 w-[209px] h-[120px] border-[#8B45FF] sec2box4 flex flex-col justify-around mx-auto'>
                                <p className='mx-auto w-[151px] h-[37px] font-bold text-[30px] text-center'>10000+</p>
                                <p className='mx-auto w-[162px] h-[24px] font-bold text-center'>Student Enrolled</p>
                            </div>

                            <div className='bg-[#FFF5D1] shadow-boxShadow4 w-[209px] h-[120px] border-[#FFC900] sec2box4 flex flex-col justify-around mx-auto'>
                                <p className='mx-auto w-[151px] h-[37px] font-bold text-[30px] text-center'>10000+</p>
                                <p className='mx-auto w-[162px] h-[24px] font-bold text-center'>Student Enrolled</p>
                            </div>
                        </div>
                    </aside>
                    <EnquiryForm />
                </section>
            </section>

            <section className='min-h-[728px] py-[64px] px-5 lg:px-[100px]'>
                <h2 className='text-center text-[24px] lg:text-[40px] font-[500] leading-[48px] mb-[4rem]'>Our Popular Courses</h2>
                <main className='course w-full lg:w-[1240px] h-[392x] gap-[47px] lg:flex lg:flex-row sm:flex sm:flex-row justify-center items-center mx-auto'>
                    <CourseCard
                        bgImage="bg-FSDI"
                        courseTitle="Full Stack Development"
                        courseDuration="6 Months"
                        courseDescription="Full Stack Java course is a comprehensive program that covers the skills and knowledge required to become a proficient Full Stack Java Developer.The..."
                        linkTo="/Full-Stack-Development"
                        aos="flip-left"
                        aosDuration="2000"
                    />
                    <CourseCard
                        bgImage="bg-MERNI"
                        courseTitle="MERN Stack"
                        courseDuration="6 Months"
                        courseDescription="MERN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MERN Stack Developer. The course is..."
                        linkTo="/Mern-Stack-Development"
                        aos="zoom-in"
                        aosDuration="2500"
                    />
                    <CourseCard
                        bgImage="bg-MEANI"
                        courseTitle="MEAN Stack"
                        courseDuration="6 Months"
                        courseDescription="MEAN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MEAN Stack Developer."
                        linkTo="/Mean-Stack-Development"
                        aos="flip-right"
                        aosDuration="3000"
                    />
                </main>
                <Link to="/courses">
                    <button className="w-[220px] h-[56px] mt-[4rem] mx-auto block bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Explore All
                    </button>
                </Link>
            </section>

            <section className='h-[349px] py-[64px] px-5 lg:px-[100px]' data-aos="fade-down" data-aos-duration="1500">
                <h2 className='text-center text-[24px] lg:text-[40px] font-[500] leading-[48px] mb-[4rem]'>Our students placed in top companies</h2>
                <div className='h-[149px] mx-auto bg-Companyi bg-contain bg-no-repeat'></div>
            </section>

            <section className='h-[349px] py-[64px] px-5 lg:px-[100px]' data-aos="fade-up" data-aos-duration="1500">
                <h2 className='text-center text-[24px] lg:text-[40px] font-[500] leading-[48px] mb-[4rem]'>Our students from below colleges</h2>
                <div className='h-[149px] mx-auto bg-Collegei bg-contain bg-no-repeat'></div>
            </section>

            <section className=' py-[56px]'>
                <h2 className='text-center text-[24px] lg:text-[40px] font-700 leading-[48px] mb-[3rem]'>Check out our recent Blogs</h2>
                <div className='lg:h-[522px] gap-[40px] flex flex-col lg:flex-row justify-evenly'>
                    <aside className='w-[350px] lg:w-[538px] h-[522px] border border-1 shadow-coursebox rounded-[20px] flex flex-col lg:justify-center items-center mx-auto mb-2 gap-[20px] lg:gap-[24px]' data-aos="fade-right" data-aos-duration="1500" >
                        <div className='lg:w-[474px] h-[24px] flex flex-row justify-between gap-[30px] mt-4 lg:mt-1'>
                            <p className='w-[160px] lg:w-[190px] h-[30px] rounded-md text-[12px] lg:text-[14px] font-[600] text-[#101010] bg-[#FCE674] text-center py-1'>Interview Preparation</p>
                            <p className='text-[16px] lg:text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700'>20-10-2023</p>
                        </div>
                        <figure className={`w-[300px] lg:w-[470px] h-[250px] bg-homeblogi bg-contain bg-center bg-no-repeat`}></figure>
                        <article className='w-[300px] lg:w-[470px] h-[140px] flex flex-col justify-center gap-[35px] lg:gap-[25px]'>
                            <h2 className='h-[27px] text-[20px] font-semibold mb-4 lg:mb-0'>How to stay organized and productive</h2>
                            <p className='lg:w-[470px] h-[57px] text-[12px] lg:text-[14px] font-[400] text-justify'>In today's fast-paced world, staying organized is essential for effectively managing daily tasks  and achieving personal.Here are some tips to help you stay organized and boost your....</p>
                            <div className='lg:w-[474px] h-[24px] flex flex-row justify-between mt-1'>
                                <p className='text-[16px] font-[600] text-[#38D200]'><span><i class="fa-regular fa-clock"></i></span> 5 Min Read</p>
                                <Link className='text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700 underline'>Read More &gt;</Link>
                            </div>
                        </article>
                    </aside>
                    <main className='w-[300px] lg:w-[633px] min-h-[516px] gap-[24px] flex flex-col lg:justify-center items-center mx-auto'>
                        <div className='w-full h-full flex flex-col justify-center items-center gap-[40px]'>
                            <div className='lg:w-[633px] h-[420px] lg:h-[246px] rounded-[8px] px-[24px] py-[20px] gap-[24px] border-1 shadow-coursebox' data-aos="fade-down" data-aos-duration="1500">
                                <div className='lg:w-[580px] h-[24px] flex flex-row justify-between gap-[30px] mt-4 lg:mt-1'>
                                    <p className='w-[160px] lg:w-[100px] h-[30px] rounded-md text-[12px] lg:text-[14px] font-[600] text-[#101010] bg-[#FABFFF] text-center py-1'>Design</p>
                                    <p className='text-[16px] lg:text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700'>20-10-2023</p>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between mt-[2rem] gap-4 mx-auto'>
                                    <figure className='w-[177px] h-[112px] bg-designi bg-no-repeat bg-contain mb-4 lg:mb-0 mx-auto'></figure>
                                    <article className='w-[300px] lg:w-[384px] h-[140px] flex flex-col justify-center gap-[35px] lg:gap-[25px]'>
                                        <h2 className='h-[27px] text-[20px] font-semibold mb-4 lg:mb-0 '>What is deign thinking?</h2>
                                        <p className='lg:w-[384px] h-[57px] text-[12px] lg:text-[14px] font-[400] text-justify'>Design thinking is an approach used for practical and creative problem-solving. It is based heavily on the methods and processes that designers use...</p>
                                        <div className='lg:w-[384px] h-[24px] flex flex-row justify-between mt-1'>
                                            <p className='text-[16px] font-[600] text-[#38D200]'><span><i class="fa-regular fa-clock"></i></span> 4 Min Read</p>
                                            <Link className='text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700 underline'>Read More &gt;</Link>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className='lg:w-[633px] h-[420px] lg:h-[246px] rounded-[8px] px-[24px] py-[20px] gap-[24px] border-1 shadow-coursebox' data-aos="fade-up" data-aos-duration="1500">
                                <div className='lg:w-[580px] h-[24px] flex flex-row justify-between gap-[30px] mt-4 lg:mt-1'>
                                    <p className='w-[160px] lg:w-[100px] h-[30px] rounded-md text-[12px] lg:text-[14px] font-[600] text-[#101010] bg-[#ADFFFA] text-center py-1'>Development</p>
                                    <p className='text-[16px] lg:text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700'>11-11-2023</p>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between mt-[2rem] gap-4 mx-auto'>
                                    <figure className='w-[177px] h-[112px] bg-reacti bg-no-repeat bg-contain mb-4 lg:mb-0 mx-auto'></figure>
                                    <article className='w-[300px] lg:w-[384px] h-[140px] flex flex-col justify-center gap-[35px] lg:gap-[25px]'>
                                        <h2 className='h-[27px] text-[20px] font-semibold mb-4 lg:mb-0 '>Tips to Improve your React code</h2>
                                        <p className='lg:w-[384px] h-[57px] text-[12px] lg:text-[14px] font-[400] text-justify'>Solid knowledge of React is one of the most valuable skills for a frontend developer. Many companies are constantly searching for React...</p>
                                        <div className='lg:w-[384px] h-[24px] flex flex-row justify-between mt-1'>
                                            <p className='text-[16px] font-[600] text-[#38D200]'><span><i class="fa-regular fa-clock"></i></span> 4 Min Read</p>
                                            <Link className='text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700 underline'>Read More &gt;</Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <Link to="/blogs">
                    <button className="w-[220px] h-[56px] mt-[4rem] mx-auto block bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        View All
                    </button>
                </Link>
            </section>

            <Carousel />

            <section className='lg:px-[100px] py-[64px]'>
                <h2 className='text-center text-[24px] lg:text-[40px] leading-[48px] mb-[4rem] weight-[500]'>About Us</h2>
                <div className='w-full lg:w-[1240px] min-h-[414px] flex flex-col lg:flex-row justify-around gap-[4rem] lg:gap-[150px] px-[24px] py-[16px]'>
                    <div className='gradient w-[350px] lg:w-[542px] sm:w-[542px] min-h-[445px] p-3 border-2 mx-auto' data-aos="fade-right" data-aos-duration="1500">
                        <p className='font-[400] lg:text-[20px] leading-[24px] mb-2 text-justify'>
                            Welcome to Syntax Level Up Elevate Your Skills with Syntax Level Up Your Gateway to Full Stack Development Mastery Welcome to Syntax Level Up, your premier training institute for mastering Full Stack Development.
                            Our comprehensive courses are meticulously crafted to provide students with the skills and knowledge essential for becoming proficient Full Stack Developers. At Syntax Level Up, we take pride in offering in-depth Full Stack Development courses that cover a diverse range of topics. Our curriculum includes essential technologies such as HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. We are committed to ensuring that our students gain a holistic understanding of the entire development stack.
                        </p>
                        <Link to="/about" className='font-[600] text-[16px] lg:text-[20px] text-[#0473EA] underline'>Learn More</Link>
                    </div>

                    <div className='gradient w-[300px] lg:w-[454px] h-[300px] lg:h-[382px] border-2 mx-auto'>
                        <figure className='w-full h-full bg-hblog bg-cover mx-auto' data-aos="zoom-in" data-aos-duration="1500"></figure>
                    </div>
                </div>
            </section>

        </div>
    )
}
