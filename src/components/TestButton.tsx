//TRYING ALL THE DIFFERENT FUNCTION METHODS WITH MY OWN MESSAGE. 

function TestButton(): JSX.Element {
  function handleClick(){
    console.log("hello Zahra")
  }
  return <button onClick = {handleClick}> This is a Function Button</button>;
}

export default TestButton;

/* 
--------------------------------

function TestButton(): JSX.Element {
  const handleClick = ()=> {
    console.log("hello Zahra")
  }
  return <button onClick = {handleClick}> This is an Arrow function button</button>;
}

export default TestButton;
--------------------------------

function TestButton(): JSX.Element {
  const handleClick = ()=> console.log("hello Zahra");
  
  return <button onClick = {handleClick}> This is a one-line arrow function button</button>;
}

export default TestButton;
--------------------------------

function TestButton(): JSX.Element {
  
  return <button onClick={function(){console.log('hello Zahra');
  }}> This is an anonymous function</button>;
}

export default TestButton;
--------------------------------

function TestButton(): JSX.Element {
  
  return <button onClick={() => {console.log('hello Zahra');
  }}> This is an anonymous arrow function</button>;
}

export default TestButton;
--------------------------------

function TestButton(): JSX.Element {
  
  return <button onClick={() => console.log('hello Zahra')}> This is an anonymous one line arrow function
  </button>;
}

export default TestButton;
--------------------------------

*/


/* //EXPERIMENTING WITH WINDOW ALERT AND WINDOW OPEN

function TestButton(): JSX.Element {
  const handleClick = ()=> window.open("hello Zahra");
  
  return <button onClick = {handleClick}> This is a one-line arrow function button</button>;
}

export default TestButton;
--------------------------------

function TestButton(): JSX.Element {
  const handleClick = ()=> window.alert("hello Zahra");
  
  return <button onClick = {handleClick}> This is a one-line arrow function button</button>;
}

export default TestButton;
*/