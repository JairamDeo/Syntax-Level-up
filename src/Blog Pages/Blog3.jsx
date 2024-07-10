import React from 'react';
import RBlog from '../Blog Pages/RBlog';

export default function Blog3() {
  return (
    <div className='py-[80px] px-5 lg:px-[96px]'>
      <section className='w-full flex flex-col lg:flex-row sm:grid sm:grid-cols-2 justify-between gap-[40px]'>
        <aside className='flex flex-col gap-[20px]'>
          <article className='w-[350px] lg:w-[770px] sm:w-[480px] min-h-[500px] shadow-coursebox'>
            <figure className='bg-b3 w-full h-[433px] bg-cover rounded-lg'></figure>
            <p className='text-[22px] text-[#009dc3] font-bold p-3'>What does full-stack developers actually do?</p>
            <div className='flex flex-row gap-[50px] p-3'>
              <p className='text-[15px] text-[#8a8a8a] font-semibold'><i className="fa-solid fa-calendar text-[#66dc3c] p-3"></i>&ensp;2 Feb 2023</p>
              <p className='text-[15px] text-[#8a8a8a] font-semibold '><i className="fa-solid fa-tag text-[#66dc3c] p-3"></i>&ensp;Development</p>
            </div>

            <div className='p-3 pb-3'>
              <p className='text-[16px] text-justify'>Full Stack Developers are professionals who are responsible for developing and maintaining the front-end and back-end of web applications. They have a broad set of skills that allow them to work with both client-side and server-side technologies, which is why they are called "full stack" developers. In this blog post, we'll explore what full stack developers do and what their role entails, with a specific focus on Java Full Stack Developers.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>Front-End Development:</p>
              <p className='text-[16px] font-bold text-justify'>Answer:<span className='font-[400]'>&ensp;Full Stack Developers are responsible for creating the user interface (UI) and user experience (UX) of web applications. This involves working with front-end technologies like HTML, CSS, and JavaScript to build responsive and interactive web pages. In addition, Full Stack Developers also work with front-end frameworks like Angular, React, and Vue.js to develop robust and scalable front-end solutions.</span></p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>Back-End Development:</p>
              <p className='text-[16px] font-bold text-justify'>Answer:<span className='font-[400]'>&ensp;Full Stack Developers are also responsible for building and maintaining the server-side of web applications. This involves working with back-end technologies like Java, Node.js, and PHP to develop the logic and functionality of web applications. Full Stack Developers use frameworks like Spring Boot, Hibernate, and JSP/Servlets to build scalable and maintainable back-end solutions.</span></p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>Database Management:</p>
              <p className='text-[16px] font-bold text-justify'>Answer:<span className='font-[400]'>&ensp;Full Stack Developers are also responsible for managing the databases used by web applications. This involves working with database management systems like MySQL, MongoDB, and Oracle to create, manage, and maintain the databases. Full Stack Developers also work with database frameworks like Hibernate and JPA to provide object-relational mapping between the databases and the application code.</span></p>
            </div>
          </article>
        </aside>
        <RBlog />
      </section>
    </div>
  )
}
