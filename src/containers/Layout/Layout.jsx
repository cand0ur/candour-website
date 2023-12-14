import NavBar from './NavBar';
import MobileNav from './MobileNav';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <MobileNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
