import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import { useEffect, useState } from 'react';

const Bot = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        function onFullscreenChange() {
            setIsFullscreen(Boolean(document.fullscreenElement));
        }

        document.addEventListener('fullscreenchange', onFullscreenChange);

        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    useEffect(() => {
        if (!isFullscreen) {
            document.body.requestFullscreen().catch(err => console.error(err));
        }
    }, [isFullscreen]);

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
