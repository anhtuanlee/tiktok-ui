import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const CX = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={CX('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SideBar;
