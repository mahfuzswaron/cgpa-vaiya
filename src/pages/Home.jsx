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
            <div className="bg-white">text input</div>
        </div>
    );
};

export default Home;
