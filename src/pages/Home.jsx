// import React from 'react';
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import Header from "../components/Header";

const Home = () => {
    const [question_options, setQuestion_options] = useState({});
    const [conversation, setConversation] = useState([
        "Hello, how are you today?",
        "Hope you're having a great day!",
        "What's new with you?",
        "I'm here to help you. What can I do for you?",
        "Remember to stay hydrated!",
        "Have you tried the new restaurant in town?",
        "Wishing you a fantastic week ahead!",
        "Don't forget to take breaks and relax.",
        "You're doing great, keep it up!",
        "Sending positive vibes your way.",
        "Let's make today amazing!",
        "Remember to smile, it's contagious!",
        "I believe in you. You've got this!",
        "Take a deep breath and let go of any stress.",
        "Always look for the silver lining. Always look for the silver lining. Always look for the silver lining. Always look for the silver lining. Always look for the silver lining. Always look for the silver lining. ",
    ]);
    const [input, setInput] = useState("");

    // const questions_options = {
    //     "স্বাগতম! তোমার প্রবিধান কত?": ["2016", "2022"],
    //     "তুমি কোন সেমিস্টারে পড়ো?": ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
    //     "সেমিস্টার পর্যন্ত রেজাল্ট বলো": "text-box"
    // }

    return (
        <div className="grid grid-rows-[1fr,10fr,1fr] h-full chat-bg">
            <Header />
            <ChatContainer conversations={conversation} />

            {/* input */}
            <div className="relative drop-shadow-xl ">
                <input
                    type="text"
                    className="px-10 py-3 h-full w-full rounded-lg border border-gray-300 focus:outline-none bg-white text-black"
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
