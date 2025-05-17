import React from 'react';
import { Link } from 'react-router-dom';
import EnqiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <div className='px-3 lg:px-[100px] py-[120px] lg:py-[120px]'>
      <div className='w-full lg:w-[1240px] sm:w-[500px] mx-auto gap-[80px] lg:gap-[126px] flex lg:flex-row flex-col justify-between items-center'>
        <div className='gradient1 w-full lg:w-[520px] h-[560px] round-[10px] flex flex-col text-[#FFFFFF] gap-[20px] lg:gap-[10px] p-[2rem]'>
          <h2 className='text-[24px] lg:text-[40px] font-[500] leading-[48px]'>Contact Us</h2>
          <div className='h-[126px] gap-[8px] '>
            <p className='font-[600] text-[18px] lg:text-[24px]'>Location</p>
            <div className='flex flex-row gap-[16px] h-[84px] items-center'>
              <div className='border-2 border-white rounded-[50%] w-[52px] h-[52px] flex justify-center items-center hover:bg-blue-500 duration-1000 cursor-pointer' data-aos='flip-left' data-aos-duration='2000'>
                <i className="fa-solid fa-location-dot text-[24px]"></i>
              </div>
              <div className='w-[300px] h-[84px] p-1 contactp' data-aos='fade-left' data-aos-duration='2000'>
                <Link>3rd Floor, Above Jijamata Mahila Sahakari Bank Karvenagar, Pune, Maharastra - 411052</Link>
              </div>
            </div>


          </div>

          <div className='h-[126px] gap-[8px] '>
            <p className='font-[600] text-[18px] lg:text-[24px]'>Contact Number</p>
            <div className='flex flex-row gap-[16px] h-[84px] items-center'>
              <div className='border-2 border-white rounded-[50%] w-[52px] h-[52px] flex justify-center items-center hover:bg-blue-500 duration-1000 cursor-pointer' data-aos='flip-left' data-aos-duration='2000'>
                <i className="fa-solid fa-phone text-[24px]"></i>
              </div>
              <div className='w-[300px] h-[84px] p-4 contactp' data-aos='fade-left' data-aos-duration='2000'>
                <Link>+91 9850941120<br/></Link>
                <Link>+91 8087601850</Link>
              </div>
            </div>


          </div>

          <div className='h-[126px] gap-[8px] '>
            <p className='font-[600] text-[18px] lg:text-[24px]'>Mail</p>
            <div className='flex flex-row gap-[16px] h-[84px] items-center'>
              <div className='border-2 border-white rounded-[50%] w-[52px] h-[52px] flex justify-center items-center hover:bg-blue-500 duration-1000 cursor-pointer' data-aos='flip-left' data-aos-duration='2000'>
                <i className="fa-regular fa-envelope text-[24px]"></i>
              </div>
              <div className='h-[84px] p-6 text-[14px] lg:text-[20px] contactp' data-aos='fade-left' data-aos-duration='2000'>
                <Link>syntaxlevelup@gmail.com</Link>
              </div>
            </div>

            <div className='h-[126px] flex flex-row justify-between'>
              <p className='w-[145px] h-[34px] text-[22px] font-[600]'>Follow us on</p>
              <div className='flex flex-row gap-[20px]'>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 0H8C3.85786 0 0.5 3.35786 0.5 7.5V24.5C0.5 28.6421 3.85786 32 8 32H25C29.1421 32 32.5 28.6421 32.5 24.5V7.5C32.5 3.35786 29.1421 0 25 0Z" fill="url(#paint0_radial_646_2517)" />
                  <path d="M25 0H8C3.85786 0 0.5 3.35786 0.5 7.5V24.5C0.5 28.6421 3.85786 32 8 32H25C29.1421 32 32.5 28.6421 32.5 24.5V7.5C32.5 3.35786 29.1421 0 25 0Z" fill="url(#paint1_radial_646_2517)" />
                  <path d="M16.5011 3.5C13.1064 3.5 12.6803 3.51488 11.347 3.5755C10.0163 3.6365 9.10787 3.84712 8.31313 4.15625C7.49088 4.4755 6.7935 4.90262 6.09875 5.59762C5.40338 6.2925 4.97625 6.98987 4.656 7.81175C4.346 8.60675 4.13512 9.5155 4.07525 10.8456C4.01562 12.179 4 12.6053 4 16.0001C4 19.395 4.015 19.8197 4.0755 21.153C4.13675 22.4837 4.34738 23.3921 4.65625 24.1869C4.97575 25.0091 5.40288 25.7065 6.09788 26.4013C6.7925 27.0966 7.48988 27.5247 8.3115 27.844C9.10687 28.1531 10.0154 28.3637 11.3459 28.4247C12.6792 28.4854 13.105 28.5002 16.4996 28.5002C19.8948 28.5002 20.3195 28.4854 21.6528 28.4247C22.9835 28.3637 23.8929 28.1531 24.6882 27.844C25.5101 27.5247 26.2065 27.0966 26.901 26.4013C27.5964 25.7065 28.0234 25.0091 28.3438 24.1873C28.651 23.3921 28.862 22.4835 28.9245 21.1532C28.9844 19.82 29 19.395 29 16.0001C29 12.6053 28.9844 12.1792 28.9245 10.8459C28.862 9.51512 28.651 8.60688 28.3438 7.81213C28.0234 6.98988 27.5964 6.2925 26.901 5.59762C26.2057 4.90237 25.5104 4.47525 24.6875 4.15637C23.8906 3.84712 22.9817 3.63638 21.651 3.5755C20.3176 3.51488 19.8931 3.5 16.4972 3.5H16.5011ZM15.3798 5.75262C15.7126 5.75213 16.084 5.75262 16.5011 5.75262C19.8388 5.75262 20.2342 5.76463 21.5522 5.8245C22.771 5.88025 23.4325 6.08388 23.8731 6.255C24.4565 6.4815 24.8724 6.75238 25.3096 7.19C25.7471 7.6275 26.0179 8.04412 26.245 8.6275C26.4161 9.0675 26.62 9.729 26.6755 10.9478C26.7354 12.2655 26.7484 12.6612 26.7484 15.9972C26.7484 19.3333 26.7354 19.7291 26.6755 21.0467C26.6198 22.2655 26.4161 22.927 26.245 23.3671C26.0185 23.9505 25.7471 24.3659 25.3096 24.8031C24.8721 25.2406 24.4568 25.5114 23.8731 25.738C23.433 25.9099 22.771 26.113 21.5522 26.1688C20.2345 26.2286 19.8388 26.2416 16.5011 26.2416C13.1634 26.2416 12.7677 26.2286 11.4501 26.1688C10.2314 26.1125 9.56987 25.9089 9.12887 25.7377C8.54562 25.5111 8.12887 25.2404 7.69137 24.8029C7.25387 24.3654 6.98312 23.9498 6.756 23.3661C6.58488 22.926 6.381 22.2645 6.3255 21.0457C6.26562 19.728 6.25362 19.3323 6.25362 15.9941C6.25362 12.6561 6.26562 12.2624 6.3255 10.9446C6.38125 9.72587 6.58488 9.06437 6.756 8.62375C6.98263 8.04037 7.25388 7.62375 7.6915 7.18625C8.129 6.74875 8.54562 6.47787 9.129 6.25087C9.56962 6.079 10.2314 5.87587 11.4501 5.81987C12.6032 5.76775 13.0501 5.75212 15.3798 5.7495V5.75262ZM23.1736 7.82812C22.3455 7.82812 21.6736 8.49938 21.6736 9.32763C21.6736 10.1558 22.3455 10.8276 23.1736 10.8276C24.0018 10.8276 24.6736 10.1558 24.6736 9.32763C24.6736 8.4995 24.0018 7.82762 23.1736 7.82762V7.82812ZM16.5011 9.58075C12.9561 9.58075 10.0819 12.455 10.0819 16.0001C10.0819 19.5452 12.9561 22.4181 16.5011 22.4181C20.0462 22.4181 22.9195 19.5452 22.9195 16.0001C22.9195 12.4551 20.046 9.58075 16.5009 9.58075H16.5011ZM16.5011 11.8334C18.8022 11.8334 20.6679 13.6988 20.6679 16.0001C20.6679 18.3013 18.8022 20.1669 16.5011 20.1669C14.1999 20.1669 12.3345 18.3013 12.3345 16.0001C12.3345 13.6988 14.1999 11.8334 16.5011 11.8334Z" fill="white" />
                  <defs>
                    <radialGradient id="paint0_radial_646_2517" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9 34.4646) rotate(-90) scale(31.7144 29.4969)">
                      <stop stop-color="#FFDD55" />
                      <stop offset="0.1" stop-color="#FFDD55" />
                      <stop offset="0.5" stop-color="#FF543E" />
                      <stop offset="1" stop-color="#C837AB" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_646_2517" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-4.86012 2.30512) rotate(78.681) scale(14.1765 58.436)">
                      <stop stop-color="#3771C8" />
                      <stop offset="0.128" stop-color="#3771C8" />
                      <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_646_2521)">
                    <path d="M32.5 16C32.5 7.1635 25.3365 0 16.5 0C7.6635 0 0.5 7.1635 0.5 16C0.5 23.986 6.351 30.6054 14 31.8056V20.625H9.9375V16H14V12.475C14 8.465 16.3888 6.25 20.0435 6.25C21.794 6.25 23.625 6.5625 23.625 6.5625V10.5H21.6075C19.6199 10.5 19 11.7334 19 12.9987V16H23.4375L22.7281 20.625H19V31.8056C26.649 30.6054 32.5 23.9861 32.5 16Z" fill="#1877F2" />
                    <path d="M22.7281 20.625L23.4375 16H19V12.9987C19 11.7332 19.6199 10.5 21.6075 10.5H23.625V6.5625C23.625 6.5625 21.794 6.25 20.0434 6.25C16.3888 6.25 14 8.465 14 12.475V16H9.9375V20.625H14V31.8056C14.827 31.9352 15.6629 32.0002 16.5 32C17.3371 32.0002 18.173 31.9353 19 31.8056V20.625H22.7281Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_646_2521">
                      <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>


              </div>
            </div>


          </div>
        </div>
        <EnqiryForm />
      </div>
    </div>
  )
}
