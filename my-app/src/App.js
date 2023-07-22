// import {React} from "react";
// import Login from '../src/components/Login';
import { useState,useEffect } from "react";
  
function UseSate(){
    const[a,seta]=useState(0);
    useEffect(() => {
    setTimeout(() => {
         seta((a)=>a+1);
    },1000);
});
    // const set=()=>{
    //     seta(a+1);
    // }
    return(
        <div>
        {/* <button onClick={set}>inc.</button> */}
        <p>{a}</p>
        </div>
    )
}

function App() {
    return (
      <div className="App">

       {/* <Login/> */}

       
      </div>
    );
  }
  
//   export default App;
  export default UseSate;
