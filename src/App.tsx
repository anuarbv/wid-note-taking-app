import React, { useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Frame from 'components/Frame';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    !window.matchMedia('(max-width: 480px)').matches
  );

  const handleFrameClick = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  console.log(window.matchMedia('(max-width: 480px)').matches);

  return (
    <div className="wid-app">
      <Sidebar
        isVisible={isSidebarVisible}
        setIsVisible={setIsSidebarVisible}
      />
      <Frame
        handleFrameClick={handleFrameClick}
        isSidebarVisible={isSidebarVisible}
      />
    </div>
  );
}

export default App;
