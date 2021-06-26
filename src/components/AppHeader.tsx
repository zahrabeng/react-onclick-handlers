interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return <h1>{title}</h1>;
}

export default AppHeader;
