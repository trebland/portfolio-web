import React from 'react';
import About from '../main-content/About';
import Projects from '../main-content/Projects';

export default function MobileMainContent() {
    return (
        <div id="bottom-menu" style={{paddingBottom: 40}}>
            <About />
            <Projects />
        </div>
    )
}