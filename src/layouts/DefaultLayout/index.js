import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const CX = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={CX('wrapper')}>
            <Header />
            <div className={CX('container')}>
                <SideBar />
                <div className={CX('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
