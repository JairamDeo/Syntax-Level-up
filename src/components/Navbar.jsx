import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const location = useLocation();

    const handleMouseEnter = () => {
        setShowSubmenu(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setShowSubmenu(false);
        }, 200);
    };

    useEffect(() => {
        // Scroll to the top of the page when location changes
        window.scrollTo(0, 0);
    }, [location.pathname]); // Trigger effect when pathname changes

    // Determine if any submenu link is active
    const isSubmenuActive = [
        '/Full-Stack-Development',
        '/Mern-Stack-Development',
        '/Mean-Stack-Development',
        '/Web-Development',
        '/UiUx-Design',
        '/React-Development'
    ].some(path => location.pathname.startsWith(path));

    // NavLink component to handle active link styling
    const NavLink = ({ to, exact, children, ...rest }) => {
        const isActive = useLocation().pathname === to;

        // Determine if the current link is "Courses" and should be highlighted
        const isActiveCourses = to === '/courses' && isSubmenuActive;

        return (
            <Link
                to={to}
                {...rest}
                className={`text-[16px] weight-600 leading-[17.6px] ${
                    isActive || isActiveCourses ? 'text-[#66dc3c]' : 'text-black'
                }`}
            >
                {children}
            </Link>
        );
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setToggle(false); // Close the menu after logout
    }

    const handleAdminLogout = () => {
        localStorage.removeItem("authToken1");
        setToggle(false); // Close the menu after logout
    }

    return (
        <div className="w-full h-[105.4px]">
            <div className={`navbar bg-[#FFFFFF] shadow-navsh px-[25px] md:px-[96px] py-[20px] flex justify-between items-center fixed top-0 z-[1000] transition-all duration-300 ease-in-out`}>
                <div className="navlogo bg-Logo w-[162px] sm:w-[140px] lg:w-[162px] h-[65px] bg-no-repeat bg-cover"></div>
                <div className="md:flex hidden gap-[34px] items-center">
                    <NavLink to="/" exact activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>Home</NavLink>
                    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <NavLink to="/courses" activeClassName={isSubmenuActive ? 'text-[#66dc3c]' : 'text-black'} className='courselink text-[16px] weight-600 text-black leading-[17.6px]'>Courses</NavLink>
                        <div className="submenu" onMouseEnter={() => setShowSubmenu(true)} onMouseLeave={() => setShowSubmenu(false)}>
                            <Link to="/Full-Stack-Development" className="submenu-item" onClick={() => setShowSubmenu(false)}>Full Stack Development</Link>
                            <Link to="/Mern-Stack-Development" className="submenu-item" onClick={() => setShowSubmenu(false)}>Mern Stack Development</Link>
                            <Link to="/Mean-Stack-Development" className="submenu-item" onClick={() => setShowSubmenu(false)}>Mean Stack Development</Link>
                            <Link to="/Web-Development" className="submenu-item" onClick={() => setShowSubmenu(false)}>Web Development</Link>
                            <Link to="/UiUx-Design" className="submenu-item" onClick={() => setShowSubmenu(false)}>UiUx Design</Link>
                            <Link to="/React-Development" className="submenu-item" onClick={() => setShowSubmenu(false)}>React Development</Link>
                        </div>
                    </div>
                    <NavLink to="/blogs" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>Blogs</NavLink>
                    <NavLink to="/about" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>About</NavLink>
                    <NavLink to="/contact" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>Contact us</NavLink>

                    {!localStorage.getItem("authToken") && !localStorage.getItem("authToken1") ?
                        <div className="flex flex-row gap-[10px]">
                            <NavLink to="/login" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>Login</NavLink>
                            <NavLink to="/admin-login" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>Admin</NavLink>
                        </div>
                        :
                        <div>
                        {localStorage.getItem("authToken") ?
                            <React.Fragment>
                                {/* Student Logout */}
                                <NavLink to="/mycourse" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>My Courses</NavLink>                                
                                <Link to="/login" className='nav-link ml-3' onClick={handleLogout}>Logout</Link>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                {/* Admin Logout */}
                                 <NavLink to="/enquirymade" activeClassName="text-[#66dc3c]" className='text-[16px] weight-600 text-black leading-[17.6px]'>Enquiries</NavLink>
                                <Link to="/admin-login" className='nav-link ml-3' onClick={handleAdminLogout}>Admin Logout</Link>
                            </React.Fragment>
                        }
                        </div>                        
                    }

                    <Link to="/contact"><button type="button" className="flex items-center justify-center w-[164px] h-[40px] px-[24px] py-[14px] text-[16px] weight-600 text-white rounded-[8px] bg-blue-500 font-semibold  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enquire Now</button></Link>
                </div>

                <div className="md:hidden flex items-center relative z-[1001]">
                    {toggle ? (
                        <AiOutlineClose
                            onClick={() => setToggle(!toggle)}
                            className="text-black text-2xl"
                        />
                    ) : (
                        <AiOutlineMenu
                            onClick={() => setToggle(!toggle)}
                            className="text-black text-2xl"
                        />
                    )}
                </div>
            </div>

            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <ul className="flex flex-col items-start gap-10 pl-7 text-black mt-32">
                    <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/" exact onClick={() => setToggle(false)}>Home</NavLink></li>
                    <li className="cursor-pointer relative" onClick={() => setToggle(false)}>
                        <NavLink to="/courses" onClick={() => setToggle(false)}>Courses</NavLink>
                        {toggle && (
                            <div className="submenu absolute left-0 top-full mt-2 bg-white shadow-md rounded-md">
                                <Link to="/Full-Stack-Development" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={() => setShowSubmenu(false)}>Full Stack Development</Link>
                                <Link to="/Mern-Stack-Development" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={() => setShowSubmenu(false)}>Mern Stack Development</Link>
                                <Link to="/Mean-Stack-Development" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={() => setShowSubmenu(false)}>Mean Stack Development</Link>
                                <Link to="/Web-Development" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={() => setShowSubmenu(false)}>Web Development</Link>
                                <Link to="/UiUx-Design" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={() => setShowSubmenu(false)}>UiUx Design</Link>
                                <Link to="/React-Development" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={() => setShowSubmenu(false)}>React Development</Link>
                            </div>
                        )}
                    </li>
                    <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/blogs" onClick={() => setToggle(false)}>Blogs</NavLink></li>
                    <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/about" onClick={() => setToggle(false)}>About</NavLink></li>
                    <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/contact" onClick={() => setToggle(false)}>Contact us</NavLink></li>

                    {!localStorage.getItem("authToken") && !localStorage.getItem("authToken1") ?
                        <>
                            <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/login" onClick={() => setToggle(false)}>Login</NavLink></li>
                            <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/admin-login" onClick={() => setToggle(false)}>Admin</NavLink></li>
                        </>
                        :
                        <>
                        {localStorage.getItem("authToken") ?
                            <>
                                <li className="cursor-pointer" onClick={() => setToggle(false)}><Link to="/login" onClick={handleLogout}>Logout</Link></li>
                                <li className="cursor-pointer" onClick={() => setToggle(false)}><NavLink to="/mycourse" onClick={() => setToggle(false)}>My Courses</NavLink></li>
                            </>
                            :
                            <>
                                <li className="cursor-pointer" onClick={() => setToggle(false)}><Link to="/admin-login" onClick={handleAdminLogout}>Admin Logout</Link></li>
                            </>
                        }
                        </>
                    }

                    <li className="cursor-pointer" onClick={() => setToggle(false)}><Link to="/contact"><button type="button" className="flex items-center justify-center w-[134px] h-[40px] bg-custom-gradient px-[24px] py-[14px] text-[16px] weight-600 text-black rounded-[8px]">Button</button></Link></li>
                </ul>
            </div>
        </div>
    );
}
