import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import images from '../../../../assest/images';
import { PopperWrapper } from '../../../Popper';
import { AccountPopper } from '../../../AccountSearchPopper';
import Button from '../../../../Button';
import Menu from '../../MenuPopper';
const CX = classNames.bind(styles);

function Header() {
    const [searchVisible, setSearchVisible] = useState([]);

    const MENU_ITEMS = [
        {
            icon: faEarthAsia,
            title: 'English',
        },
        {
            icon: faCircleQuestion,
            title: 'Feedback and help',
            to: '/Feedback',
        },
        {
            icon: faKeyboard,
            title: 'Keyboard Shortcut',
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchVisible([1, 2, 3]);
        }, 2020);
    }, []);
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

                <div className={CX('actions')}>
                    <Button text sizes="medium">
                        <FontAwesomeIcon className={CX('plus')} icon={faPlus} />
                        Upload
                    </Button>
                    <Button primary sizes="medium">
                        Login
                    </Button>
                    {/*    <Button rounded sizes="medium">
                        Dowload App
                    </Button> */}
                    {/*  <Button intoTop>
                        <img src={images.buttonToTop} />
                    </Button> */}

                    <Menu items={MENU_ITEMS}>
                        <button>
                            <FontAwesomeIcon
                                className={CX('menu_button')}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
