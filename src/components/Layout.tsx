import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Cover } from './Cover';

const Layout = () => {
  return (
    <div className='bg-[#17043e] h-[100vh]'>
      <Header />
      <Cover children={<Outlet />} />
    </div>
  );
};

export default Layout;
