import React from 'react';

import fbIcon from '../assets/facebook.png';
import GitHubIcon from '../assets/github.png';
import linkedInIcon from '../assets/linkedin.png';

const BotHeader = () => {
    return (
        <div className='react-chatbot-kit-chat-header flex justify-between'>
            <p className='text-lg'>CGPA Vaiya</p>
            <div className='flex gap-3'>
                <a href="https://facebook.com/mahfuzswaron" target='_blank'>
                    <img className='h-6 w-6' src={fbIcon} alt='fb icon' />
                </a>
                <a href="https://github.com/mahfuzswaron">
                    <img className='h-6 w-6' src={GitHubIcon} alt='github icon' />
                </a>
                <a href="https://linkedin.com/in/mahfuzswaron">
                    <img className='h-6 w-6' src={linkedInIcon} alt='linkedin icon' />
                </a>
            </div>
        </div>
    );
};

export default BotHeader;