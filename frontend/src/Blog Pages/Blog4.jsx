import React from 'react';
import RBlog from '../Blog Pages/RBlog';

export default function Blog4() {
  return (
    <div className='py-[80px] px-5 lg:px-[96px]'>
      <section className='w-full flex flex-col lg:flex-row sm:grid sm:grid-cols-2 justify-between gap-[40px]'>
        <aside className='flex flex-col gap-[20px]'>
          <article className='w-[350px] lg:w-[770px] sm:w-[480px] min-h-[500px] shadow-coursebox'>
            <figure className='bg-whyjava w-full h-[433px] bg-cover rounded-lg'></figure>
            <p className='text-[22px] text-[#009dc3] font-bold p-3'>Why do most industries use Java?</p>
            <div className='flex flex-row gap-[50px] p-3'>
              <p className='text-[15px] text-[#8a8a8a] font-semibold'><i className="fa-solid fa-calendar text-[#66dc3c] p-3"></i>&ensp;17 Jan 2023</p>
              <p className='text-[15px] text-[#8a8a8a] font-semibold '><i className="fa-solid fa-tag text-[#66dc3c] p-3"></i>&ensp;Programming</p>
            </div>

            <div className='p-3 pb-3'>
              <p className='text-[16px] text-justify'>Java is a popular programming language that has been around since the mid-1990s. It was created by James Gosling and his team at Sun Microsystems (which was later acquired by Oracle Corporation). Java has since become one of the most widely used programming languages, with applications in various domains such as web development, mobile app development, gaming, and more. In this blog post, we'll explore some of the reasons why Java is so popular and widely used.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>1. Platform Independence:</p>
              <p className='text-[16px] text-justify'>Java is known for its platform independence, meaning that Java programs can run on any platform or operating system without modification. This is achieved through the use of the Java Virtual Machine (JVM), which provides a layer of abstraction between the Java code and the underlying hardware. Java programs are compiled into bytecode, which can be executed on any platform that has a JVM installed. This makes Java a highly portable language, and developers can write once and run anywhere.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>2. Object-Oriented Programming:</p>
              <p className='text-[16px] text-justify'>Java is an object-oriented programming language, which means that it is based on the concept of objects. This makes Java code more modular, reusable, and easier to maintain. Object-oriented programming also makes it easier to write complex applications, as it allows developers to break down the problem into smaller, more manageable parts.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>3. Rich API:</p>
              <p className='text-[16px] text-justify'>Java comes with a rich set of Application Programming Interfaces (APIs), which provide developers with a wide range of tools and libraries for building various applications. The APIs include networking, database connectivity, user interface development, and more. These APIs save developers time and effort by providing pre-built solutions for common tasks.</p>
            </div>
            <div className='p-3 pb-3 flex flex-col gap-3'>
              <p className='font-bold text-[16px] text-justify'>4. Community Support:</p>
              <p className='text-[16px] text-justify'>Java has a large and active community of developers and users, who contribute to the language's growth and development. The community provides support through forums, blogs, and online communities, which makes it easier for developers to get help when they need it.</p>
            </div>                        
          </article>
        </aside>
        <RBlog />
      </section>
    </div>
  )
}
