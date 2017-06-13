import Header from './Header';
import { StyletronProvider, styled } from 'styletron-react';
import getStyletron from '../theme/styletron';

const LayoutMain = styled('div', {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
});

const Layout = ({ children }) => (
  <StyletronProvider styletron={getStyletron()}>
    <LayoutMain>
      <Header />
      {children}
    </LayoutMain>
  </StyletronProvider>
);

export default Layout;
