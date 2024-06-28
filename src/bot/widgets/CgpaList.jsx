import React from 'react';
const semesterLables = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];


const CgpaList = (props) => {
    const { cgpa_array } = props.payload;


    return (
        <div className='react-chatbot-kit-chat-bot-message-container'>
            <div className='min-w-[300px] w-[400px]'>
                <table className="w-full divide-y divide-secondary ">
                    <thead className="bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-light">
                                Semesters
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-light">
                                CGPA
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary bg-white">
                        {semesterLables.map((label, index) => (
                            <tr key={index} className="text-secondary hover:bg-secondary hover:text-light">
                                <td className="px-6 py-4 whitespace-nowrap text-sm ">{label}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm ">{cgpa_array[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CgpaList;