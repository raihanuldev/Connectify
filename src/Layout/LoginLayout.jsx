
import Nabvar from '../componets/nabavar/Nabvar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Nabvar/>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;