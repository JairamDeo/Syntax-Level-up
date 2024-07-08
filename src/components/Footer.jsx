import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className='lg:h-[450px] gap-[48px]'>
        <main className='min-h-[368px] lg:h-[368px] px-5 sm:px-[50px] lg:px-[100px] w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]  bg-[#000F9A] py-[60px]'>
          <container className='w-[210px] h-[212px] flex flex-col gap-[25px] lg:gap-[72px]'>
            <h1 className='text-[24px] lg:text-[32px] text-white font-bold leading-[39px]'>Syntaxlevelup</h1>
            <div className='flex flex-col gap-3'>
              <p className='text-[#38D200] text-[24px] weight-[600]'>Connect With Us</p>
              <div className='flex flex-row gap-4'>
                <Link className='w-[48px] h-[48px] border-2 border-white rounded-full flex justify-center items-center hover:bg-[orange] duration-[1000] cursor-pointer' data-aos="flip-left" data-aos-duration="1500">
                  <i className="fa-brands fa-google text-[white] text-[1.7rem]"></i>
                </Link>
                <Link className='w-[48px] h-[48px] border-2 border-white rounded-full flex justify-center items-center hover:bg-[orange] duration-[1000] cursor-pointer' data-aos="flip-left" data-aos-duration="2000">
                  <i className="fa-brands fa-instagram text-[white] text-[1.7rem]"></i>
                </Link>
                <Link className='w-[48px] h-[48px] border-2 border-white rounded-full flex justify-center items-center hover:bg-[orange] duration-[1000] cursor-pointer' data-aos="flip-left" data-aos-duration="2500">
                  <i className="fa-brands fa-facebook-f text-[white] text-[1.7rem]"></i>
                </Link>
              </div>
            </div>
          </container>

          <container className='foot w-[140px] h-[256px] flex flex-col gap-[24px]'>
            <h1 className='text-[24px] text-[#38D200] weight-[600] leading-[39px]'>Quick Links</h1>
            <div className='flex flex-col gap-[8px] text-white w-[127px] h-[198px] text-[18px]'>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/blogs">Blogs</Link>
              <Link>Privacy Policy</Link>
              <Link>Terms Of Use</Link>
            </div>
          </container>

          <container className='foot w-[155px] h-[256px] flex flex-col gap-[24px]'>
            <h1 className='text-[24px] text-[#38D200] weight-[600] leading-[39px]'>Contact Info</h1>
            <div className='flex flex-col gap-[8px] text-white w-[127px] h-[198px] text-[18px]'>
              <div className='flex flex-row gap-2 hover duration-[1000]:text-[#40E0D0]'>
                <i className="fa-regular fa-envelope p-1"></i><Link>courseconnect@gmail.com</Link>
              </div>
              <div className='flex flex-row w-[176px] gap-2 hover duration-[1000]:text-[#40E0D0]'>
                <i className="fa-solid fa-phone p-1"></i><Link>020-439349304</Link>
              </div>
              <div className='flex flex-row w-[176px] gap-2 hover duration-[1000]:text-[#40E0D0]'>
                <i className="fa-brands fa-whatsapp p-1"></i><Link>+91-8830289101</Link>
              </div>
            </div>
          </container>

          <container className='foot w-[140px] h-[256px] flex flex-col gap-[24px]'>
            <h1 className='text-[24px] text-[#38D200] weight-[600] leading-[39px]'>Our Office</h1>
            <div className='flex flex-row gap-[8px] text-white text-[18px] w-[365px] h-[198px] hover duration-[1000]:text-[#40E0D0]'>
              <i class="fa-regular fa-building p-1"></i>
              <Link>CourseConnect Company<br />789, Wanderlust Plaza,<br />Vacation Street, Explore Nagar,<br />Mumbai - 400001,<br />Maharashtra, India.</Link>
            </div>
          </container>

        </main>
        <p className='text-center text-[18px] weight-[400] p-6'>Copyright©2023, CourseConnect All rights reserved.</p>
      </footer>
    </>
  )
}
