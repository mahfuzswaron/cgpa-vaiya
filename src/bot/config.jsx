// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Regulation from './widgets/Regulation';
import Start from './widgets/Start';
import Regenerate from './widgets/Regenerate';
import BotAvatar from '../components/BotAvatar';
import BotHeader from '../components/BotHeader';
import CgpaList from './widgets/CgpaList';

const botName = 'CGPA Vaiya';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hey! ফাইনাল রেজাল্টে তোমার টার্গেটেড সিজিপিএ পেতে হলে কোন সেমিস্টারে কত করে পেতে হবে জানতে চাও? তাহলে আমাকে কিছু তথ্য দিয়ে সাহায্য কর।`, {
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
        botAvatar: (props) => <BotAvatar {...props} />,
        header: (props) => <BotHeader {...props} />
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
        },
        {
            widgetName: 'CgpaList',
            widgetFunc: (props) => <CgpaList {...props} />
        }
    ]
};

export default config;