import React from 'react';

const LinkWrapper = ({link, isAndroid, isApple, isGithub, children}) => (
    
    <a target="_blank" rel="noreferrer noopener" 
    href={(isAndroid ? "https://play.google.com/store/apps/details?id="
    : (isApple ? "https://apps.apple.com/us/app/"
    : (isGithub ? "https://github.com/trebland/"
    : ""))) + link}>
        {children}
    </a>
)

export default LinkWrapper