import logo from '../logo.svg';
import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import '../App.css';

function Summer() {
  const ll =(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>

  )
  return (
    <React.Fragment>
      <ResponsiveMasonry
                columnsCount={2}
            >
   
             <Masonry>
                   <div style={{backgroundColor:'#ff4e50'}}  className="App1">
                   ff4e50
                   </div>
                   <div style={{backgroundColor:'#fc913a'}}  className="App1">
                   fc913a
                       </div>
                       <div style={{backgroundColor:'#f9d62e'}}  className="App1">
                       f9d62e
                       </div>
                       <div style={{backgroundColor:'#eae374'}}  className="App1">
                       eae374
                       </div>
                
                </Masonry>
            </ResponsiveMasonry>
    </React.Fragment>
  );
}

export default Summer;


