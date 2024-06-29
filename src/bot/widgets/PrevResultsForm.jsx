import React from 'react';
const semesterLables = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

const PrevResultsForm = ({ payload }) => {
    const { currentSemester } = payload;
    const inputToPrint = currentSemester - 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.sem_1st.value)
    }
    return (
        <div className='react-chatbot-kit-chat-bot-message-container'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-2 font-[poppins]'>
                {
                    Array(inputToPrint).fill("sem").map((sem, index) => <input
                        className='results-input bg-white text-secondary block w-full px-[0.6em] py-[1.2em] '
                        key={index}
                        type="text"
                        inputMode='numeric'
                        min={2.00}
                        max={4.00}
                        step={0.01}
                        pattern='\b(2\.\d{2}|3\.\d{2}|4\.00)\b'
                        name={`sem_${semesterLables[index]}`}
                        placeholder={`Result of ${semesterLables[index]} semester. eg: 3.00`}
                        required
                    />)
                }
                <button type="submit">send</button>
            </form>
        </div>
    );
};

export default PrevResultsForm;