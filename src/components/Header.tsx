const Header = () => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        Идём<span>в</span>кино
      </h1>
      <span className="page-header__subtitle">Администраторррская</span>
    </header>
  );
};

export default Header;

/*
export interface INavbarProps {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const NavbarEl = ({ token, setToken }: INavbarProps) => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary mt-5">
        <Container fluid>
          <Navbar.Brand href="#">Neto Social</Navbar.Brand>
          <Stack direction="horizontal" gap={3}>
            {!token && <LoginForm token={token} setToken={setToken} />}
            {token && <UserInfo token={token} setToken={setToken} />}
          </Stack>
        </Container>
      </Navbar>
    );
  };
  
  export default NavbarEl;
  */