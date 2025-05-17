import React from 'react';

const Syllabuscards = ({ slink1, slink2, slink3, slink4, slink5, slink6, weekn,aos,aosDuration }) => {
    return (
        <div className='w-[337px] h-[222px] rounded-[20px] border border-t-0 border-l-1 border-b-4 border-r-1 border-[#38D200] p-[3rem] relative' data-aos={aos} data-aos-duration={aosDuration}>
            <li>{slink1}</li>
            <li>{slink2}</li>
            <li>{slink3}</li>
            <li>{slink4}</li>
            <li>{slink5}</li>
            <li>{slink6}</li>
            <div className='weekbox absolute w-[301px] h-[44px] border border-1 bg-[#0473EA] top-[-17px]'>
                <p className='text-white text-center font-bold text-[20px] p-2'><li>{weekn}</li></p>
            </div>
        </div>
    );
}

export default Syllabuscards;

