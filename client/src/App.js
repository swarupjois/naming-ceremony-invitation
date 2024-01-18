import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './home/Home';
import myLogo from './assets/myLogo.jpeg';

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 3000);

    // Clear the timer when the component unmounts or when the 5 seconds are over
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showHomePage ? (
        <Home />
      ) : (
        <div className='rootPage'>
         {/* <h1> <p className='welcomeText'>Welcoming<br />
         you to the <br />
         Naming Ceremony</p></h1> */}
         <img src={myLogo} width='350px' height='350px'
         style={{
          animation: 'blink 2s',
         }}/>
        </div>
      )}
    </div>
  );
}

export default App;
