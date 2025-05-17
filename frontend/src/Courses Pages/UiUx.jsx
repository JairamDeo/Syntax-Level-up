import React, { useState } from 'react';
import Syllabuscards from './Syllabuscards';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function UiUx() {
    const [activeSection, setActiveSection] = useState('frontend');
    const handleDownload = () => {
        const pdfPath = '/SyllabusPdf/UiUx-Syllabus.pdf'; // Path to your PDF file inside the public folder
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'UiUx Design Syllabus.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div className='py-[80px]'>
            <section className='py-4 lg:py-[48px] px-5 lg:px-[100px] flex flex-col lg:flex-row justify-between gap-[64px] min-h-[606px]'>
                <div className=' lg:w-[543px] min-h-[348px]'>
                    <h2 className='text-[36px] font-bold leading-[48px] min-h-[43px] capitalize mb-4'>UiUx Design</h2>
                    <p className='lg:w-[543px] min-h-[95px] text-[16px] leading-[19px] text-justify text-[#1b1c1e] mb-4'>Our UiUx Development course is a comprehensive program that covers the skills and knowledge required to become a proficient web developer. The course is designed for students who have little to no experience in web development but want to learn how to create dynamic and responsive websites.</p>
                    <div className='flex flex-row  min-h-[84px] items-center gap-2 py-5 '>
                        <div className='w-[140px] lg:h-[34px] rounded-[100px] border-2 border-[#38D200] text-[16px] font-bold text-[#1B1C1E] text-center hover:bg-[#38D200] hover:text-white duration-700 p-1'><span><i className="fa-regular fa-clock"></i></span>&ensp;3 Months</div>
                        <div className='lg:w-[258px] lg:h-[34px] rounded-[100px] border-2 border-[#38D200] text-[16px] font-bold text-[#1B1C1E] text-center hover:bg-[#38D200] hover:text-white duration-700 p-1'><span><i className="fa-solid fa-certificate"></i></span>&ensp;Completion Certificate</div>
                    </div>
                    <div className='flex flex-row  min-h-[84px] items-center gap-2 py-5'>
                        <div className='lg:w-[220px] lg:h-[34px] rounded-[100px] border-2 border-[#38D200] text-[16px] font-bold text-[#1B1C1E] text-center hover:bg-[#38D200] hover:text-white duration-700 p-1'><span><i className="fa-solid fa-record-vinyl"></i></span>&ensp;Recording lectures</div>
                        <div className='lg:w-[258px] lg:h-[34px] rounded-[100px] border-2 border-[#38D200] text-[16px] font-bold text-[#1B1C1E] text-center hover:bg-[#38D200] hover:text-white duration-700 p-1'><span><i className="fa-solid fa-diagram-project"></i></span>&ensp;Real world Projects</div>
                    </div>
                    <div className='grid grid-cols-2 py-3'>
                        <button className=" w-[150px]  lg:w-[220px] h-[56px] block bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 duration-700">
                            Enroll Now
                        </button>
                        <button onClick={handleDownload} className=" w-[150px]  lg:w-[220px] h-[56px] block bg-white text-blue-500 font-semibold rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 duration-700 border border-1 border-blue-500">
                            Download Syllabus
                        </button>
                    </div>
                </div>

                <div className='w-[370px] h-[300px] lg:w-[633px] lg:h-[510px] bg-UiUxI1 bg-contain bg-no-repeat bg-center' data-aos="fade-left" data-aos-duration="1500">

                </div>

            </section>

            <section className='py-5 w-[350px] lg:w-[1240px] mx-auto'>
                <div data-aos="fade-down" data-aos-duration="2000">
                    <div className='w-[350px] lg:w-[1240px] mx-auto mb-3'>
                        <h1 className='lg:w-[1040px] min-h-[48px] text-[24px] lg:text-[40px] font-bold leading-[48px] text-center mx-auto mb-3'>Course Syllabus</h1>
                        <p className='lg:w-[1040px] min-h-[50px] text-[24px] lg:text-[20px] leading-[24px] text-center mx-auto'>We have crafted a 12 - weeks course that will enable you to transform into a designer.<br />A complete hands-on experience from industry leaders.</p>
                    </div>
                    <div className='w-[350px] lg:w-[1240px] mx-auto flex flex-row justify-around items-center gap-2 py-5'>
                        <button
                            className={`Frontendbtn w-[150px] lg:w-[220px] h-[56px] block ${activeSection === 'frontend' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} font-semibold rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 duration-700 border border-1 border-blue-500`}
                            onClick={() => setActiveSection('frontend')}
                        >
                            Frontend
                        </button>
                        <button
                            className={`Backendbtn w-[150px] lg:w-[220px] h-[56px] block ${activeSection === 'backend' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} font-semibold rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 duration-700 border border-1 border-blue-500`}
                            onClick={() => setActiveSection('backend')}
                        >
                            Backend
                        </button>
                        <button
                            className={`Databasebtn w-[150px] lg:w-[220px] h-[56px] block ${activeSection === 'database' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} font-semibold rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 duration-700 border border-1 border-blue-500`}
                            onClick={() => setActiveSection('database')}
                        >
                            Database
                        </button>
                    </div>
                </div>

                <TransitionGroup>
                    {activeSection === 'frontend' && (
                        <CSSTransition
                            key="frontend"
                            timeout={1000}
                            classNames="fade"
                        >
                            <main className='FrontendContainer w-full py-[65px] gap-[64px] flex flex-col lg:flex-row flex-wrap justify-evenly'>
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 1"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 2"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 3"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 4"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 5"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 6"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 7"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 8"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 9"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 10"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 11"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 12"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 13"
                                    aos='flip-right'
                                    aosDuration='2500'
                                />
                                <Syllabuscards
                                    slink1="Html Structure"
                                    slink2="Html Tags and Elements"
                                    slink3="Iframes"
                                    slink4="Frames with Validation"
                                    slink5="Table Integration"
                                    slink6="Favicon Implementation"
                                    weekn="Week 14"
                                    aos='flip-left'
                                    aosDuration='2500'
                                />
                            </main>
                        </CSSTransition>
                    )}
                    {activeSection === 'backend' && (
                        <CSSTransition
                            key="backend"
                            timeout={1000}
                            classNames="fade"
                        >
                            <main className='BackendContainer w-full py-[65px] gap-[64px] flex flex-col lg:flex-row flex-wrap justify-evenly'>
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 1"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 2"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 3"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 4"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 5"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 6"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 7"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 8"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 9"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 10"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 11"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 12"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 13"
                                    aos='flip-right'
                                    aosDuration='2500'
                                />
                                <Syllabuscards
                                    slink1="Backend Topic 1"
                                    slink2="Backend Topic 2"
                                    slink3="Backend Topic 3"
                                    slink4="Backend Topic 4"
                                    slink5="Backend Topic 5"
                                    slink6="Backend Topic 6"
                                    weekn="Week 14"
                                    aos='flip-left'
                                    aosDuration='2500'
                                />
                            </main>
                        </CSSTransition>
                    )}
                    {activeSection === 'database' && (
                        <CSSTransition
                            key="database"
                            timeout={1000}
                            classNames="fade"
                        >
                            <main className='DatabaseContainer w-full py-[65px] gap-[64px] flex flex-col lg:flex-row flex-wrap justify-evenly'>
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 1"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 2"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 3"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 4"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 5"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 6"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 7"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 8"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 9"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 10"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 11"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 12"
                                    aos='fade-up'
                                    aosDuration='2000'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 13"
                                    aos='flip-right'
                                    aosDuration='2500'
                                />
                                <Syllabuscards
                                    slink1="Database Topic 1"
                                    slink2="Database Topic 2"
                                    slink3="Database Topic 3"
                                    slink4="Database Topic 4"
                                    slink5="Database Topic 5"
                                    slink6="Database Topic 6"
                                    weekn="Week 14"
                                    aos='flip-left'
                                    aosDuration='2500'
                                />
                            </main>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </section>
        </div>
    );
}
