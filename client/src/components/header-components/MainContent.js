import React, { useState } from 'react';
import About from '../main-content/About';
import Modeling from '../main-content/Modeling';
import Projects from '../main-content/Projects';
import { useSelector } from "react-redux";

export default function MainContent() {
  const page = useSelector(state => state.response.page);

    return (
        <div className="right-menu">
            {page === "About" ? <About />
              : (page === "Projects" ? <Projects />
              : <Modeling />)}
        </div>
    )
}