import React from 'react';
import About from '../main-content/About';
import Projects from '../main-content/Projects';
import { useSelector } from "react-redux";

export default function MainContent() {
  const page = useSelector(state => state.response.page);

    return (
        <div id="right-menu" style={{paddingBottom: 40}}>
          <About />
          <Projects />
        </div>
    )
}