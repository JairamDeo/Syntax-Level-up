import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ bgImage, courseTitle, courseDuration, courseDescription, linkTo, aos, aosDuration }) => {
    return (
        <div className='w-[300px] lg:w-[382px] h-[392px] border border-1 shadow-coursebox rounded-[20px] flex flex-col lg:justify-center items-center mx-auto mb-2 gap-[24px]' data-aos={aos} data-aos-duration={aosDuration}>
            <figure className={`w-[270px] lg:w-[350px] h-[196px] ${bgImage} bg-contain bg-center bg-no-repeat`}></figure>
            <article className='w-[270px] lg:w-[350px] h-[140px] flex flex-col justify-center gap-[25px]'>
                <h2 className='h-[27px] text-[20px] font-semibold'>{courseTitle}</h2>
                <p className='lg:w-[350px] h-[57px] text-[12px] lg:text-[14px] font-[400] text-justify'>{courseDescription}</p>
                <div className='lg:w-[350px] h-[24px] flex flex-row justify-between mt-1'>
                    <p className='text-[16px] font-[600] text-[#38D200]'><span><i class="fa-regular fa-clock"></i></span> {courseDuration}</p>
                    <Link className='text-[16px] font-[600] text-[#0473EA] hover:text-[#38D200] duration-700' to={linkTo}>Read More &gt;</Link>
                </div>
            </article>
        </div>
    );
}

export default CourseCard;
