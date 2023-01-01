import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const CX = classNames.bind(styles);

function Header() {
    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}></div>
        </header>
    );
}

export default Header;
