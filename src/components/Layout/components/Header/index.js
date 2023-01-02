import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assest/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { PopperWrapper } from '../../../Popper';
import { AccountPopper } from '../../../AccountSearchPopper';
const CX = classNames.bind(styles);

function Header() {
    const [searchVisible, setSearchVisible] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchVisible([1, 2, 3]);
        }, 2020);
    });
    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}>
                <div className={CX('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    visible={searchVisible.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={CX('search_result')} {...attrs} tabIndex="-1">
                                <div className={CX('search_title')}> Account</div>
                                <AccountPopper />
                                <AccountPopper />
                                <AccountPopper />
                            </div>
                        </PopperWrapper>
                    )}
                >
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
                </Tippy>

                <div className={CX('action')}></div>
            </div>
        </header>
    );
}

export default Header;
