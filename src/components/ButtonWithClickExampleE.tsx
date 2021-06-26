function ButtonWithClickExampleE(): JSX.Element {
  return (
    <button
      onClick={() => {
        console.log("Hello from button E!");
      }}
    >
      My handler is an anonymous arrow function
    </button>
  );
}

export default ButtonWithClickExampleE;
