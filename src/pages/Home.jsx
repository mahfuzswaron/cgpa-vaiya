// import React from 'react';
import { useState, useRef, useEffect } from "react";
import ChatContainer from "../components/ChatContainer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { questions_options } from "./data";

const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', "8th"];

const Home = () => {
    const [conversation, setConversation] = useState([]);
    const [options, setOptions] = useState([]);
    const [option_input_keys, setOption_input_keys] = useState([]);
    const [inputs, setInputs] = useState({});
    const [questionCount, setQuestionCount] = useState(0);
    const [canText, setCanText] = useState(false);
    const [currentQuerry, setCurrentQuerry] = useState("");
    const [lang, setLang] = useState('bn')
    const [actionButtons, setActionButtons] = useState([]);
    const [result, setResult] = useState({});
    const [height, setHeight] = useState(0);
    const options_div_ref = useRef(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const showResult = () => {
        setConversation([...conversation, { sender: "vaiya", message: "দাড়াও বলছি..." }]);
        const { target, previous_result, scale } = inputs;
        let querry = `predict?target=${target}&scale=${scale}`;
        if (previous_result) querry += `&previous_result=${previous_result}`;
        const url = `https://cgpa-vaiya-server.onrender.com/${querry}`;
        fetch(url).then(res => res.json()).then(data => setResult(data));
    }
    /* const regenerateResult = (message) => {
        // setConversation([...conversation, { sender: "user", message: message }]);
        showResult();
    } */

    useEffect(() => {
        setHeight(options_div_ref.current.clientHeight)
    });

    useEffect(() => {
        if (result.message) {
            const { cgpa_array, message: description } = result;
            const cgpaList = semesters.map((semester, index) => `${semester} => ${cgpa_array[index]}`).join("\n")
            const message = description + "\n" + cgpaList;
            const promotionMessage = `এই অনুযায়ী প্রস্তুতি নিতে থাকো। বেস্ট অফ লাক! শীঘ্রই আমার আরও আপডেট আসবে। তুমি আমার থেকে আর কি কি ফিচার চাও আমার ডেভেলপারকে জানাতে পারো। উপরে তার সোশাল মিডিয়া প্রোফাইল লিংক করা আছে।`
            setConversation([...conversation, { sender: "vaiya", message: message }, {sender: "vaiya", message: promotionMessage} ]);
            
        }
    }, [result])

    useEffect(() => {

        setOptions([]);
        setOption_input_keys([]);

        if (currentQuerry === "previous_result" && inputs.previous_result !== undefined) {
            return showResult();
        }

        const QnO = questions_options[questionCount];
        const { question, querry, options, response_type, option_input_keys } = QnO;

        const message = { sender: "vaiya", message: question }
        if (querry === "previous_result" && inputs.semester < 2) {
            return showResult();
        }
        setConversation([...conversation, message]);
        setCurrentQuerry(querry);

        // Handling response types.
        setCanText(false);
        if (response_type === "text-input") {
            setCanText(true)
        } else if (response_type === "option") {
            setOptions(options)
        } else if (response_type === "option-input") {
            if (querry === "previous_result") {
                setOption_input_keys(option_input_keys.slice(0, inputs.semester - 1));
            } else {
                setOption_input_keys(option_input_keys)
            }
        }

        setQuestionCount(questionCount + 1)

    }, [inputs]);

    useEffect(() => {
        const inputBox = document.getElementById("chat-input");
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                handleSubmitTextInput();
            }
        };
        inputBox.addEventListener("keydown", handleKeyDown);

        return () => {
            inputBox.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentQuerry, inputs]);

    const handleSubmitTextInput = () => {
        const inputBox = document.getElementById("chat-input");
        const text = inputBox.value.trim();
        inputBox.value = "";

        if (text.length) {

            if(canText) {


                const message = { sender: "user", message: text }
                setConversation([...conversation, message]);

                // Validate input
                const regex = /^(2\.\d{2}|3\.\d{2}|4\.00)$/;
                if (!regex.test(text)) {
                    setConversation([...conversation, { sender: "vaiya", message: "Please enter a valid CGPA between 2.00 and 4.00 with two decimal places." }]);
                    return;
                }

                setInputs({ ...inputs, [currentQuerry]: text });

            }
        }
    }

    const handleSubmitOption = (value, label) => {
        setConversation([...conversation, { sender: "user", message: label }]);
        if (result.message) {
            return
        }
        setInputs({ ...inputs, [currentQuerry]: value });
    }

    const handleSubmitOptionInput = data => {
        let results = Object.values(data);
        if (results[results.length - 1].trim() === "") results.pop();
        results = results.join(",");
        setInputs({ ...inputs, previous_result: results });
        if (results.trim() === "") return
        setConversation([...conversation, { sender: "user", message: results }])
    };


    return (
        <div className="grid grid-rows-[1fr,10fr,1fr] h-full chat-bg">

            <Header />

            <ChatContainer conversations={conversation} bottomMargin={height} />

            {/* option boxes */}
            <div ref={options_div_ref} id="options" className="px-6 py-4 flex justify-end flex-wrap w-screen bg-transparent absolute bottom-14 mt-5 space-x-4">
                {
                    options.map(({ label, value }, index) => <button
                        key={index}
                        value={value}
                        onClick={(e) => handleSubmitOption(e.target.value, label)}
                        className="rounded-full px-5 py-3 bg-white bg-opacity-20 border-2 border-white ">
                        {label}
                    </button>)
                }
                {
                    option_input_keys.length !== 0 && <form onSubmit={handleSubmit(handleSubmitOptionInput)} className="flex flex-wrap justify-end w-[60vw] " >
                        {
                            option_input_keys.map((inputKey, index) => <input
                                key={inputKey}
                                name={inputKey}
                                placeholder={inputKey}
                                type="number"
                                step={"0.01"}
                                {...register(inputKey, { required: (index + 2) !== inputs["semester"], pattern: /^[2-4]\.\d{2}/, max: 4 })}
                                className={`rounded-full px-3 py-1 m-[0.15rem] w-20 bg-white bg-opacity-20 border-2 border-white ${errors[inputKey] ? "border-red" : ""}`}
                                title={errors[inputKey] && "invalid CGPA"}
                            />)
                        }
                        {
                            <button
                                type="submit"
                                className="flex justify-center rounded-full px-3 py-1 m-[0.15rem] w-16 bg-white bg-opacity-20 border-2 border-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                            </button>
                        }
                    </form>
                }
                {
                    actionButtons.length > 0 && actionButtons.map(actionBtn => <button onClick={() => actionBtn.onclick(actionBtn.label[lang])} > {actionBtn.label[lang]} </button>)
                }
            </div>

            {/* text input */}
            <div className="relative drop-shadow-xl min-h-[3.125rem]">
                <input
                    id="chat-input"
                    type="text"
                    className="px-10 py-3 h-full w-full rounded-lg border border-gray-300 focus:outline-none bg-white text-black"
                    placeholder={canText ? "Type your targeted CGPA...": "Answer in Options... " }
                />
                <button
                    onClick={handleSubmitTextInput}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-lg p-2 text-violet-700 hover:text-white bg-white hover:bg-violet-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 m-1 md:m-0" strokeWidth="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default Home;
