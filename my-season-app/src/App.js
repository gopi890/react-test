import React, {useReducer, useState} from "react"
import Summer from './Components/Summer'
import Winter from './Components/Winter'
import Monsoon from './Components/Monsoon'
import Rain from './Components/Rain'
import './App.css';

function reducer(state, action) {
  switch (action.type.toLowerCase()) {
    case 'winter':
      return <Winter/>;
    case 'summer':
      return <Summer/>
      case 'monsoon':
        return <Monsoon/>
        case 'rain':
          return <Rain/>
    default:
      // throw new Error();
      return (<h3>Enter season</h3>)
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer,'' );
  const [season, setSeason] = useState();
  const func =(e)=>{
    setSeason(e.target.value)
    dispatch({type: e.target.value})
  }
  return (
    <React.Fragment>
      <div className ='input'>
      Enter seasons to show colors Winter, Summer, Monsoon, Rain
      <input type= 'text' value ={season} onChange={(e)=>{func(e)}} />
     
      </div>

      <div style={{padding:'50px'}}>
        {state}
      </div>
    
                   
                   {/* <Winter/> */}
                
    </React.Fragment>
  );
}

export default App;
