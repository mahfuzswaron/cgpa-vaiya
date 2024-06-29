import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import { useEffect } from 'react';

const Bot = () => {
    useEffect(() => {
        // Timeout is used to ensure the scroll happens after the initial rendering
        const hideAddressBar = () => {
            window.scrollTo(0, 1);
        };

        // Delay the scroll action to ensure the page is fully loaded
        setTimeout(hideAddressBar, 100);

        // Add an event listener to re-hide the address bar on orientation change
        window.addEventListener('orientationchange', hideAddressBar);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('orientationchange', hideAddressBar);
        };
    }, []);
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
