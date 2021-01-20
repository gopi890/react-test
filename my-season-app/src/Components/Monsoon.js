
// #	(2,11,54)
// #	(35,7,69)
// #	(227,227,255)
// #	(214,255,251)
// #b3e3f4

import logo from '../logo.svg';
import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import '../App.css';

function Monsoon() {
 
  return (
    <React.Fragment>
      <ResponsiveMasonry
                columnsCount={2}
            >
             <Masonry>
                   <div style={{backgroundColor:'#8585ad'}}  className="App1">
                   8585ad
                   </div>
                   <div style={{backgroundColor:'#9494b8'}}  className="App1">
                   9494b8
                       </div>
                       <div style={{backgroundColor:'#a3a3c2'}}  className="App1">
                       a3a3c2
                       </div>
                       <div style={{backgroundColor:'#b3b3cc'}}  className="App1">
                       b3b3cc
                       </div>
                
                </Masonry>
            </ResponsiveMasonry>
    </React.Fragment>
  );
}

export default Monsoon;


