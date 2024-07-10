import React from 'react';
import RBlog from '../Blog Pages/RBlog';

export default function Blog2() {
  return (
    <div className='py-[80px] px-5 lg:px-[96px]'>
      <section className='w-full flex flex-col lg:flex-row sm:grid sm:grid-cols-2 justify-between gap-[40px]'>
        <aside className='flex flex-col gap-[20px]'>
          <article className='w-[350px] lg:w-[770px] sm:w-[480px] min-h-[500px] shadow-coursebox'>
            <figure className='bg-b2 w-full h-[433px] bg-cover rounded-lg'></figure>
            <p className='text-[22px] text-[#009dc3] font-bold p-3'>Common interview questions asked at IBM</p>
            <div className='flex flex-row gap-[50px] p-3'>
              <p className='text-[15px] text-[#8a8a8a] font-semibold'><i className="fa-solid fa-calendar text-[#66dc3c] p-3"></i>&ensp;13 Feb 2023</p>
              <p className='text-[15px] text-[#8a8a8a] font-semibold '><i className="fa-solid fa-tag text-[#66dc3c] p-3"></i>&ensp;Interview questions</p>
            </div>
            <p className='text-[#505050] text-[16px] font-semibold p-3'>Here are some commonly asked interview questions related to Full Stack Development at IBM, along with their answers.</p>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>What is Full Stack Development, and what technologies are commonly used?</p>
              <p className='text-[16px] font-bold text-justify'>Answer:<span className='font-[400]'>&ensp;Full Stack Development refers to the development of both the client-side (Front-end) and server-side (Back-end) of a web application. The technologies commonly used in Full Stack Development include HTML, CSS, JavaScript, Java, Node.js, Angular, React, Vue.js, Spring Boot, Hibernate, JSP/Servlets, and RESTful Web Services.</span></p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>How does Java fit into Full Stack Development, and what frameworks are commonly used?</p>
              <p className='text-[16px] font-bold text-justify'>Answer:<span className='font-[400]'>&ensp;Java is a widely used object-oriented programming language that is well-suited for Full Stack Development due to its simplicity, stability, and portability. Some popular Java frameworks commonly used in Full Stack Development at IBM include Spring Boot, Hibernate, JSP/Servlets, and JavaFX.</span></p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>What is Spring Boot, and how is it used in Full Stack Development?</p>
              <p className='text-[16px] font-bold text-justify'>Answer:<span className='font-[400]'>&ensp;Spring Boot is an open-source Java framework designed to simplify the development of stand-alone, production-grade Spring-based applications. It offers several features that make it popular for Full Stack Development, including embedded Tomcat server, auto-configuration, and starter dependencies. Spring Boot can be used to develop both the server-side and client-side of web applications, with its various modules like Spring MVC, Spring Data, and Spring Security.</span></p>
            </div>
          </article>
        </aside>
        <RBlog />
      </section>
    </div>
  )
}
