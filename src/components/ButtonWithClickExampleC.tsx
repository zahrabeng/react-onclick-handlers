function ButtonWithClickExampleC(): JSX.Element {
  const handleClick = () => console.log("Hello from button C!");

  return (
    <button onClick={handleClick}>
      My handler is a one-line arrow function
    </button>
  );
}

export default ButtonWithClickExampleC;
