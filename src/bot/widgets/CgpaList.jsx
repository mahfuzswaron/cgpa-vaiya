import React from 'react';
const semesterLables = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];


const CgpaList = (props) => {
    const { cgpa_array } = props.payload;


    return (
        <div className='react-chatbot-kit-chat-bot-message-container'>
            <table className="min-w-[300px] w-[400px] divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Semesters
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CGPA
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {semesterLables.map((label, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{label}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cgpa_array[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CgpaList;