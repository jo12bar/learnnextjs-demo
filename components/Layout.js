import Header from './Header';

const layoutStyle = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
