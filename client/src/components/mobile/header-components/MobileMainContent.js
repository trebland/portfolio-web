import React from 'react';
import About from '../main-content/About';
import Projects from '../main-content/Projects';
import { useSelector } from "react-redux";

export default function MobileMainContent() {
  const page = useSelector(state => state.response.page);

    return (
        <div id="bottom-menu" style={{paddingBottom: 40}}>
            <About />
            <Projects />
        </div>
    )
}