import React from 'react';
import About from '../main-content/About';
import Projects from '../main-content/Projects';

export default function MainContent() {
    return (
        <div id="right-menu" style={{paddingBottom: 40}}>
          <About />
          <Projects />
        </div>
    )
}