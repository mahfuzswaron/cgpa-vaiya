import React, { useState } from 'react';

const MessengerInbox = () => {
    const [messages, setMessages] = useState([
        'Hello!',
        'How are you?',
        'What are you up to?',
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return;
        }

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setNewMessage('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
            <h1 className="text-2xl mb-4">Messenger Inbox</h1>

            <div className="mb-4">
                <ul>
                    {messages.map((message, index) => (
                        <li key={index} className="p-2 bg-gray-100 mb-2 rounded">
                            {message}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow p-2 rounded-l"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white p-2 rounded-r"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default MessengerInbox;
