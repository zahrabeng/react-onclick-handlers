function ButtonWithClickExampleD(): JSX.Element {
  return (
    <button
      onClick={function () {
        console.log("Hello from button D!");
      }}
    >
      My handler is an anonymous function
    </button>
  );
}

export default ButtonWithClickExampleD;
