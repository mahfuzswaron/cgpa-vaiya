// import React from 'react';
import ChatContainer from "../components/ChatContainer";
import Header from "../components/Header";

const Home = () => {

    // const questions_options = {
    //     "স্বাগতম! তোমার প্রবিধান কত?": ["2016", "2022"],
    //     "তুমি কোন সেমিস্টারে পড়ো?": ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
    //     "সেমিস্টার পর্যন্ত রেজাল্ট বলো": "text-box"
    // }

    return (
        <div className="grid grid-rows-[1fr,10fr,1fr] h-full">
            <Header />
            <ChatContainer />

            {/* input */}
            <div className="relative">
                <input
                    type="text"
                    className="px-10 py-3 h-full w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green bg-white"
                    placeholder="Type your message..."
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-lg p-2 text-green hover:text-white bg-white hover:bg-green focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 m-1 md:m-0" strokeWidth="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg>
                </button>
            </div>




        </div>
    );
};

export default Home;
