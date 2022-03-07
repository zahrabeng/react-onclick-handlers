interface AppHeaderProps {
  title: string;
}


function AppHeader({ title }: AppHeaderProps): JSX.Element {

  function header(){
     console.log(title.toUpperCase())
  }
  return (<h1 onClick={header}>{title} </h1>)
}

export default AppHeader;
