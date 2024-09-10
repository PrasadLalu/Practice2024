import { Outlet } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';

const Layout = () => {
  return (
      <div>
          <NavbarPanel />
          <Outlet />
    </div>
  )
}

export default Layout;
