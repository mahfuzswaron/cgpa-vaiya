// import React from 'react';
import { useState, useRef, useEffect } from "react";
import ChatContainer from "../components/ChatContainer";
import Header from "../components/Header";


const questions_options = [
    {
        "question": "স্বাগতম! বলো, কত সিজিপিএ পেতে চাও?",
        "options": [],
    },
    {
        "question": "তোমার প্রবিধান কত?",
        "options": [
            {
                "label": "2016",
                "value": "diploma_2016"
            }
            ,
            {
                "label": "2022",
                "value": "diploma_2022"
            }
        ],
    },
    {
        "question": "তুমি কোন সেমিস্টারে পড়ো?",
        "options": [
            { label: '1st', value: 1 },
            { label: '2nd', value: 2 },
            { label: '3rd', value: 3 },
            { label: '4th', value: 4 },
            { label: '5th', value: 5 },
            { label: '6th', value: 6 },
            { label: '7th', value: 7 },
            { label: '8th', value: 8 }
        ]
        ,
    },
    {
        "question": "পূর্ববর্তী রেজাল্ট বলো",
        "options": [],
        "hasResult": true
    },
];

const Home = () => {
    // const [question_options, setQuestion_options] = useState({});
    const [conversation, setConversation] = useState([]);
    const [options, setOptions] = useState([]);
    const [inputs, setInputs] = useState("");
    const [index, setIndex] = useState(0);
    const [canText, setCanText] = useState(true);
    const [preResultInputNum, setPreResultInputNum] = useState(3);
    const [height, setHeight] = useState(0)
    const ref = useRef(null);
    const form = useRef(null);
    const showResult = () => {
        console.log("result pending")
    }


    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })

    useEffect(() => {
        setOptions([]);
        const QnO = questions_options[index];
        const { question, options, hasResult } = QnO;

        if (hasResult !== undefined) {
            const semester = inputs[inputs.length - 1];
            if (semester > 1) {
                setPreResultInputNum(semester - 1);
            } else {
                showResult()
            }
        }

        setConversation([...conversation, question]);
        const hasOptions = options.length;
        if (hasOptions) {
            setCanText(false);
            setOptions(options)
        }
        else if (!hasOptions) {
            setCanText(true)
        }
        setIndex(index + 1)
    }, [inputs])

    const handleSend = () => {
        const inputBox = document.getElementById("chat-input");
        const message = inputBox.value;
        if (message.trim().length) {
            setConversation([...conversation, message]);
            setInputs([...inputs, message]);
            inputBox.value = ""
        }
    }

    const handleResultSubmit = e => {
        e.preventDefault();
        const previeousResult = [...e.target.children].slice(0, preResultInputNum).map(input => input.value).join(",");

        e.target.reset()
    }


    return (
        <div className="grid grid-rows-[1fr,10fr,1fr] h-full chat-bg">

            <Header />

            <ChatContainer conversations={conversation} bottomMargin={height} />

            {/* option boxes */}
            <div ref={ref} id="options" className="px-6 flex justify-end bg-transparent w-screen absolute bottom-14 mt-5 space-x-4">
                {
                    options.map(({ label, value }, index) => <button
                        onClick={e => {
                            setConversation([...conversation, label]);
                            setInputs([...inputs, value])
                        }}
                        value={value}
                        key={index}
                        className="rounded-full px-5 py-3 bg-white bg-opacity-20 border-2 border-white ">
                        {label}
                    </button>)
                }
                {
                    <form ref={form} onSubmit={handleResultSubmit} className="flex flex-wrap justify-end w-[60vw] ">
                        {
                            new Array(preResultInputNum).fill(0).map((_, i) => <input
                                key={i}
                                type="number"
                                required={true}
                                placeholder={`${i + 1}`}
                                className="rounded-full px-3 py-1 m-[0.15rem] w-16 bg-white bg-opacity-20 border-2 border-white" />)
                        }
                        <button
                            type="submit"
                            className="flex justify-center rounded-full px-3 py-1 m-[0.15rem] w-16 bg-white bg-opacity-20 border-2 border-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                        </button>
                    </form>
                }
            </div>

            {/* input */}
            <div className="relative drop-shadow-xl min-h-[3.125rem]">
                <input
                    id="chat-input"
                    type="text"
                    className="px-10 py-3 h-full w-full rounded-lg border border-gray-300 focus:outline-none bg-white text-black"
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSend}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-lg p-2 text-green hover:text-white bg-white hover:bg-green focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 m-1 md:m-0" strokeWidth="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg>
                </button>
            </div>




        </div>
    );
};

export default Home;
