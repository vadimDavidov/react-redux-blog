import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';

function Header() {
  const { width } = useWindowSize();
  return (
    <article className="Header">
      <h1>ReactJS - Blog - Routing & API Request & Hooks</h1>
      <div className="svg">
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 896 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>
    </article>
  );
}

export default Header;
