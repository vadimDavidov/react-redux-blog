import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <article className="Layout">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </article>
  );
}

export default Layout;
