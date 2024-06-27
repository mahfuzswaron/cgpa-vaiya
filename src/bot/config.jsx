// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Regulation from './widgets/Regulation';
import Start from './widgets/Start';
import Regenerate from './widgets/Regenerate';
import BotAvatar from '../components/BotAvatar';

const botName = 'CGPA Vaiya';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. Answer my questions and get a list of CGPA to get your desired CGPA in the Final Result.`, {
        widget: "Start"
    })],
    state: {
        currentQuery: null,
        userData: {
            regulation: null,
            targetedCgpa: null,
            currentSemester: null,
            previousResults: null,
        },
    },
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
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
        {
            widgetName: 'Regenerate',
            widgetFunc: (props) => <Regenerate {...props} />
        }
    ]
};

export default config;