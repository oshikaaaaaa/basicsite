import react, { useState } from 'react';
import './App.css';
const ClickCounter= () =>
{
   const  [count, setCount] =useState(0);


   const increase = () =>{

    setCount(count+1);

   }

   const decrease = () =>{



    // setCount(count-2);
    count>1? setCount(count-2): setCount(0);
    

   }

   return(
    <>
    <button onClick={increase}  > Increase by 1</button>
    <button onClick={decrease}>Decrease by2</button>

    <div>Button Clicked {count} times!</div>
    </>


   )


}


export default ClickCounter;