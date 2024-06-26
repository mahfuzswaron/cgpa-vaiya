import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';

const Bot = () => {
    return (
        <div className='container mx-auto w-full '>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default Bot;
