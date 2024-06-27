// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Regulation from './widgets/Regulation';
import Start from './widgets/Start';

const botName = 'CGPA Vaiya';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. Answer my questions and get a list of CGPA to get your desired CGPA in the Final Result.`, {
        widget: "Start"
    })],
    state: {
        currentQuery: null,
        userData: {
            Regulation: null,
            targetedCgpa: null,
            currentSemester: null,
            previousResults: [],
        }
    },
    widgets: [
        {
            widgetName: "Start",
            widgetFunc: (props) => <Start {...props} />,
        },
        {
            widgetName: 'Regulation',
            widgetFunc: (props) => <Regulation {...props} />,
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