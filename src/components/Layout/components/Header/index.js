import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assest/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fa } from '@fortawesome/fontawesome-svg-core';
const CX = classNames.bind(styles);

function Header() {
    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}>
                <div className={CX('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={CX('search')}>
                    <input placeholder="Search account and video" spellCheck={false} />
                    <button className={CX('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={CX('loading')} icon={faSpinner} />
                    <button className={CX('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={CX('action')}></div>
            </div>
        </header>
    );
}

export default Header;
