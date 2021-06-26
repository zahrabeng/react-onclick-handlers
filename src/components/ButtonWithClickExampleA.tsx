function ButtonWithClickExampleA(): JSX.Element {
  function handleClick() {
    console.log("Hello from button A!");
  }

  return (
    <button onClick={handleClick}>My handler is a function declaration</button>
  );
}

export default ButtonWithClickExampleA;
