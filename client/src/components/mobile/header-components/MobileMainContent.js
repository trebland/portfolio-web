import React from 'react';
import About from '../main-content/About';
import Modeling from '../main-content/Modeling';
import Projects from '../main-content/Projects';
import { useSelector } from "react-redux";

export default function MobileMainContent() {
  const page = useSelector(state => state.response.page);

    return (
        <div id="bottom-menu">
            {page === "About" ? <About />
              : (page === "Projects" ? <Projects />
              : <Modeling />)}
        </div>
    )
}