import React from 'react';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
export default function Courses() {
    return (
        <div className='py-[100px]'>
            <main className='coursecards w-full lg:w-[1240px] h-[392x] gap-[47px] lg:flex lg:flex-row lg:flex-wrap sm:flex sm:flex-wrap sm:flex-row justify-center items-center mx-auto'>
                <Link to="/Full-Stack-Development">
                    <CourseCard
                        bgImage="bg-FSDI"
                        courseTitle="Full Stack Development"
                        courseDuration="6 Months"
                        courseDescription="Full Stack Java course is a comprehensive program that covers the skills and knowledge required to become a proficient Full Stack Java Developer.The..."
                        linkTo="/Full-Stack-Development"
                        aos="flip-left"
                        aosDuration="2000"
                    />
                </Link>
                <Link to="/Mern-Stack-Development">
                    <CourseCard
                        bgImage="bg-MERNI"
                        courseTitle="MERN Stack"
                        courseDuration="6 Months"
                        courseDescription="MERN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MERN Stack Developer. The course is..."
                        linkTo="/Mern-Stack-Development"
                        aos="zoom-in"
                        aosDuration="2500"
                    />
                </Link>
                <Link to="/Mean-Stack-Development">
                    <CourseCard
                        bgImage="bg-MEANI"
                        courseTitle="MEAN Stack"
                        courseDuration="6 Months"
                        courseDescription="MEAN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MEAN Stack Developer."
                        linkTo="/Mean-Stack-Development"
                        aos="flip-right"
                        aosDuration="3000"
                    />
                </Link>
                <Link to="/Web-Development">
                    <CourseCard
                        bgImage="bg-WEBI"
                        courseTitle="Web Development"
                        courseDuration="6 Months"
                        courseDescription="MEAN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MEAN Stack Developer."
                        linkTo="/Web-Development"
                        aos="fade-up"
                        aosDuration="1000"
                    />
                </Link>
                <Link to="/React-Development">
                    <CourseCard
                        bgImage="bg-REACTI"
                        courseTitle="React Development"
                        courseDuration="6 Months"
                        courseDescription="MEAN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MEAN Stack Developer."
                        linkTo="/React-Development"
                        aos="fade-up"
                        aosDuration="2000"                        
                    />
                </Link>
                <Link to="/UiUx-Design">
                    <CourseCard
                        bgImage="bg-UiUxI"
                        courseTitle="UiUX Development"
                        courseDuration="6 Months"
                        courseDescription="MEAN Stack course is a comprehensive program that covers the skills and knowledge required to become a proficient MEAN Stack Developer."
                        linkTo="/UiUx-Design"
                        aos="fade-up"
                        aosDuration="3000"  
                    />
                </Link>
            </main>
        </div>
    )
}
