import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    image: 'bg-test3i',
    name: 'Nandini Agrwal',
    company: 'Capgemini',
    message:
      'I am incredibly grateful to Syntax level up for their outstanding services! With their help, I found my job within a short period.',
    },
  {
    id: 2,
    image: 'bg-test2i',
    name: 'Rajesh Joshi',
    company: 'Infosys',
    message:
      'Huge gratitude to Syntax Level Up for their exceptional service! With their aid, I swiftly secured my job. Their assistance was invaluable in my job search journey.',
    },
  {
    id: 3,
    image: 'bg-test1i',
    name: 'Nikita Mahakalkar',
    company: 'Cognizant',
    message:
      'Immense appreciation to Syntax Level Up for their exceptional service! With their assistance, I quickly landed my job. Their support was instrumental in my job search success.',
    },
];

export default function Carousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextClick = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePreviousClick = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <section className='py-[64px] px-5'>
        <h2 className='text-center text-[24px] lg:text-[40px] font-bold leading-[48px] mb-[3rem]'>
          Here’s what our happy students say
        </h2>

        <div className='testmain sm:w-[600px] lg:w-[1180px] h-[650px] lg:h-[388px] lg:px-[40px] py-5 lg:py-[100px] lg:gap-[10px] flex flex-col lg:flex-row justify-center mx-auto relative'>
          <div className={`testi w-[339px] h-[348px] ${testimonials[currentTestimonial].image} bg-no-repeat mx-auto`}></div>
          <div className='test2 w-[300px] lg:w-[532px] h-[550px] lg:h-[235px] gap-[8px] shadow-coursebox flex flex-col justify-center p-[20px] mx-auto relative' data-aos="fade-left" data-aos-duration="1500">
            <div className='icons w-[152px] h-[24px] flex flex-row flex-start gap-[8px]'>
              {[...Array(5)].map((_, index) => (
                <i key={index} className="fa-solid fa-star w-[24px] h-[24px]" style={{ color: '#FFD43B' }}></i>
              ))}
            </div>
            <h2 className='text-[24px] font-bold'>{testimonials[currentTestimonial].name}</h2>
            <p>Placed at {testimonials[currentTestimonial].company}</p>
            <p className='h-[96px] text-justify font-[400] lg:text-[16px]'>
              {testimonials[currentTestimonial].message}
            </p>
            <div className='absolute text-[#38D200] w-[32px] h-[32px] text-[50px] top-[-35px] left-[-5px] sm:left-[-25px] lg:left-[-15px]'><i className="fa-solid fa-quote-left"></i></div>
            <div className='absolute text-[#38D200] w-[32px] h-[32px] text-[50px] bottom-[10px] right-[5px] sm:right-[-8px] lg:right-[-10px]' onClick={handleNextClick}><i className="fa-solid fa-quote-right"></i></div>
          </div>
          <div onClick={handlePreviousClick} className="absolute hexagon-grid CustomHexagon mb-8 lg:mb-0 ml-[80px] lg:ml-0 top-[105%] lg:top-[47%] sm:left-[150px] lg:left-[-70px]">
            <a className="lessthan cursor-pointer">
              <div className="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]  bg-white p-[2px] w-14 h-14 parenthex flex justify-center items-center via-cyan-700 to-linear-bg from-blue-600 -translate-y-[50%]">
                <div className="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex justify-center h-full w-full items-center bg-[#726ae3]">
                  <p className="text-[24px] text-[white] font-bold">&lt;</p>
                </div>
              </div>
            </a>
          </div>
          <div onClick={handleNextClick} className="absolute hexagon-grid CustomHexagon mb-8 mr-[80px] lg:mr-0 lg:mb-0 top-[105%] lg:top-[47%] right-1 sm:right-[160px] lg:right-[-70px]">
            <a className="greaterthan cursor-pointer">
              <div className="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]  bg-white p-[2px] w-14 h-14 parenthex flex justify-center items-center via-cyan-700 to-linear-bg from-blue-600 -translate-y-[50%]">
                <div className="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex justify-center h-full w-full items-center bg-[#726ae3]">
                  <p className="text-[24px] text-[white] font-bold">&gt;</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
