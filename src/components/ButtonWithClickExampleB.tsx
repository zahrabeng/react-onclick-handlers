function ButtonWithClickExampleB(): JSX.Element {
  const handleClick = () => {
    console.log("Hello from button B!");
  };

  return (
    <button onClick={handleClick}>
      My handler is a full body arrow function
    </button>
  );
}

export default ButtonWithClickExampleB;
