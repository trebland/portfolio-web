import React from 'react';

const LinkWrapper = ({link, children}) => (
    <a target="_blank" rel="noreferrer noopener" href={link}>{children}</a>
)

export default LinkWrapper