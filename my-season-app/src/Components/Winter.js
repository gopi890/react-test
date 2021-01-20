import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import '../App.css';

function Winter() {
 
  return (
    <React.Fragment>
      <ResponsiveMasonry
                columnsCount={2}
            >
   
             <Masonry>
                   <div style={{backgroundColor:'#020b36'}}  className="App1">
                   020b36
                   </div>
                   <div style={{backgroundColor:'#230745'}}  className="App1">
                   230745
                       </div>
                       <div style={{backgroundColor:'#e3e3ff'}}  className="App1">
                       e3e3ff
                       </div>
                       <div style={{backgroundColor:'#d6fffb'}}  className="App1">
                       d6fffb
                       </div>
                
                </Masonry>
            </ResponsiveMasonry>
    </React.Fragment>
  );
}

export default Winter;


