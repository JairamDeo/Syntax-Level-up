import React from 'react';

import cardi1 from '/assets/card1.png';
import cardi2 from '/assets/card2.png';
import cardi3 from '/assets/card3.png';
import cardi4 from '/assets/card4.png';
import cardi5 from '/assets/card5.png';
import cardi6 from '/assets/card6.png';
import cardi7 from '/assets/card7.png';

import capg from '/assets/capg.png';
import tcs from '/assets/tcs.png';
import cogn from '/assets/cognizant.png';
import infosys from '/assets/infosys.png';
import lt from '/assets/mindtree.png';
import wipro from '/assets/wipro.png';
import cybage from '/assets/cybage.png';
import Marquee from "react-fast-marquee";

export default function CardSlider() {
    
  return (
    
    <div className='cardsd'>

    {/* card1 */}
    <Marquee speed={150}>
        <div className='card1'>
            <div className='imgdiv'>
                <img src={cardi1} className='cardi1' alt=" "></img>
                <p>Nandini Agrwal</p>
            </div>
            <div className='infod'>
                <p className='p1'>Full stack Developer</p>
                <p className='p2'>11.45 LPA</p>
                <img src={capg} alt=""></img>
            </div>
        </div>
        {/* card2 */}
        <div className='card2'>
            <div className='imgdiv'>
                <img src={cardi2} className='cardi1' alt=" "></img>
                <p>Aarav Desai</p>
            </div>
            <div className='infod'>
                <p className='p1'>MERN Developer</p>
                <p className='p2'>10 LPA</p>
                <img src={tcs} alt=""></img>
            </div>
        </div>
        {/* card3 */}
        <div className='card3'>
            <div className='imgdiv'>
                <img src={cardi3} className='cardi1' alt=" "></img>
                <p>Nikita Mahakalkar</p>
            </div>
            <div className='infod'>
                <p className='p1'>MEAN Developer</p>
                <p className='p2'>8 LPA</p>
                <img src={cogn} alt=""></img>
            </div>
        </div>
        {/* card4 */}
        <div className='card4'>
            <div className='imgdiv'>
                <img src={cardi4} className='cardi1' alt=" "></img>
                <p>Rajesh Joshi</p>
            </div>
            <div className='infod'>
                <p className='p1'>Full stack Developer</p>
                <p className='p2'>9.5 LPA</p>
                <img src={infosys} alt=""></img>
            </div>
        </div>

        {/* card 5*/}
        <div className='card5'>
            <div className='imgdiv'>
                <img src={cardi5} className='cardi1' alt=" "></img>
                <p>Sneha Joshi</p>
            </div>
            <div className='infod'>
                <p className='p1'>Full stack Developer</p>
                <p className='p2'>8 LPA</p>
                <img src={lt} alt=""></img>
            </div>
        </div>

        {/* card 6*/}
        <div className='card6'>
            <div className='imgdiv'>
                <img src={cardi6} className='cardi1' alt=" "></img>
                <p>Siddharth Mehta</p>
            </div>
            <div className='infod'>
                <p className='p1'>Backend Developer</p>
                <p className='p2'>10 LPA</p>
                <img src={wipro} alt=""></img>
            </div>
        </div>

        {/* card 7*/}
        <div className='card7'>
            <div className='imgdiv'>
                <img src={cardi7} className='cardi1' alt=" "></img>
                <p>Aarav Shah</p>
            </div>
            <div className='infod'>
                <p className='p1'>MEAN Engineer</p>
                <p className='p2'>12 LPA</p>
                <img src={cybage} alt=""></img>
            </div>
        </div>
        </Marquee>
    </div>
  )
}
