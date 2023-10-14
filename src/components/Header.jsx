import React from 'react';

const Header = () => {
    return (
        <div className="min-h-[3.125rem] flex justify-between items-center p-3 bg-white rounded-b-lg drop-shadow-2xl text-black ">
            <div>CGPA Bhaia</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            </div>
        </div>
        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 50" width="1400" height="50">
        //     <rect x="0" y="0" width="300" height="50" rx="10" fill="#ffffff" stroke="#000000" stroke-width="1" />
        //     <text x="20" y="30" font-size="16" font-weight="bold">CGPA Vaiay</text>
        //     <text x="260" y="30" font-size="16">&#9432;</text>
        // </svg>


    );
};

export default Header;