import React from 'react';

const LinkWrapper = ({link, isAndroid, isApple, isGithub, children}) => (
    
    <a target="_blank" rel="noreferrer noopener"
    
    aria-label={(isAndroid ? "Link to live Google Play Store page"
    : (isApple ? "Link to live App Store page"
    : (isGithub ? "Link to GitHub repository."
    : "Link to live website")))}

    href={(isAndroid ? "https://play.google.com/store/apps/details?id="
    : (isApple ? "https://apps.apple.com/us/app/"
    : (isGithub ? "https://github.com/trebland/"
    : ""))) + link}>
        {children}
    </a>
)

export default LinkWrapper