import Header from '../components/Header/index';
import SideBar from './SideBar/index';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
