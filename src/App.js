import React from 'react';
import Navbar from './Navbar';
import image from './image.png';
import Detail from './Detail';
function App() {
  return (
    <>
      <Navbar />
      
      <div className="main-content">
          <div className="row">
              <div className="column-1">
                    <h4>Group Health Insurance Program for Corporates</h4>
                    <h5>Let's become awesome together</h5>
                    <img src={image}  alt = "group" width = "440px" height = "365px"  id="image"/>
                </div>
                <div className="column-2">
                    <Detail />
                </div>
          </div>
        
        
      </div>
          
      
    </>
  );
}

export default App;