import HeaderLink from './HeaderLink';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <header>
    <HeaderLink href='/'>Home</HeaderLink>
    <HeaderLink href='/about'>About</HeaderLink>
  </header>
);

export default Header;
