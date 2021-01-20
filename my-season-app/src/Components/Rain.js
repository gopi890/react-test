import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import '../App.css';

function Rain() {
 
  return (
    <React.Fragment>
      <ResponsiveMasonry
                columnsCount={2}
            >
               
   
             <Masonry>
                   <div style={{backgroundColor:'#66ffc2'}}  className="App1">
                   66ffc2
                   </div>
                   <div style={{backgroundColor:'#4dffb8'}}  className="App1">
                   4dffb8
                       </div>
                       <div style={{backgroundColor:'#33ffad'}}  className="App1">
                       33ffad
                       </div>
                       <div style={{backgroundColor:'#1affa3'}}  className="App1">
                       1affa3
                       </div>
                
                </Masonry>
            </ResponsiveMasonry>
    </React.Fragment>
  );
}

export default Rain;


