// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Session from './widgets/Session';
import Start from './widgets/Start';

const botName = 'CGPA Vaiya';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. Answer my questions and get a list of CGPA to get your desired CGPA in the Final Result.`, {
        widget: "Start"
    })],
    widgets: [
        {
            widgetName: "Start",
            widgetFunc: (props) => <Start {...props} />,
        },
        {
            widgetName: 'Session',
            widgetFunc: (props) => <Session {...props} />,
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
};

export default config;