import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';


function App() {

  const[text,setText] = useState(' ');
  const[name, setName] = useState('hello');


  //VARIATION - 1 On every render
        // useEffect ( () => {
        //   console.log("UI RENDERING IS DONE");
        // })


  //VARIATION - 2 On first render
        // useEffect(() => {
        //   console.log("UI RENDERING IS DONE");
        // }, [])



  // VARTATION - 3 first render +  whenever dependency changes
        // useEffect ( () => {
        //   console.log("Change in Dependency")
        // }, [name])



  // VARIATION -4 To Handel unmounting of a component
        // useEffect( () => {
        //   // event listerner added
        //     console.log("Listner is added");

        //   //listner removed
        //     return () =>{
        //       console.log("Listner is removed");
        //     }
        // }, [text])


  function changeHandler (event) {
      console.log(text);
      setText(event.target.value);
  }



  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
