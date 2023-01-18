import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import HeaderTippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import images from '../../../../assest/images';
import { PopperWrapper } from '../../../Popper';
import { AccountPopper } from '../../../AccountSearchPopper';
import Button from '../../../../Button';
import Menu from '../../MenuPopper';
import Image from '../../../Image';
import {
    BoxMail,
    GetCoins,
    Language,
    Logout,
    PaperPlaneIcon,
    QuestionAndFeedback,
    Setting,
    ShortCut,
    UserIconHeader,
} from '../../../Icons';

const CX = classNames.bind(styles);

function Header() {
    const [searchVisible, setSearchVisible] = useState([]);
    const onHandle = (item) => {
        switch (item.type) {
            case 'language':
                console.log('2222');
                break;
            case 'logout':
                setUserLogin(false);
                break;
            default:
                console.log('Bug');
        }
    };
    const MENU_ITEMS = [
        {
            icon: Language,
            title: 'English',
            children: {
                data: [
                    {
                        code: 'en',
                        title: 'English',
                        type: 'language',
                    },
                    {
                        code: 'vni',
                        title: 'Việt Nam',
                        type: 'language',
                    },
                ],
            },
        },
        {
            icon: QuestionAndFeedback,
            title: 'Feedback and help',
            to: '/Feedback',
        },
        {
            icon: ShortCut,
            title: 'Keyboard Shortcut',
        },
    ];
    const [userLogin, setUserLogin] = useState(true);
    const USER_ITEMS = [
        {
            icon: UserIconHeader,
            title: 'Profile',
            to: '/Profile',
        },
        {
            icon: GetCoins,
            title: 'GET COINS',
            to: '/getcoins',
        },
        {
            icon: Setting,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: Logout,
            title: 'Logout',
            saparete: true,
            type: 'logout',
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
                    <Image src={images.logo} alt="TikTok" fallback={images.noImage} />
                </div>
                <Tippy
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
                    {userLogin ? (
                        <span className={CX('user')}>
                            <HeaderTippy duration={[500, 0]} content="Tin Nhắn">
                                <button className={CX('user_icon')}>
                                    <PaperPlaneIcon />
                                </button>
                            </HeaderTippy>
                            <HeaderTippy duration={[500, 0]} content="Hộp Thư">
                                <button className={CX('user_icon')}>
                                    <BoxMail />
                                </button>
                            </HeaderTippy>
                        </span>
                    ) : (
                        <>
                            <Button primary sizes="medium">
                                Login
                            </Button>
                        </>
                    )}

                    <Menu
                        items={userLogin ? USER_ITEMS : MENU_ITEMS}
                        title="Language"
                        onHandle={onHandle}
                    >
                        {userLogin ? (
                            <Image
                                className={CX('user_avatar')}
                                src="https://anhgaixinh.vn/wp-content/uploads/2022/12/anh-cua-nhung-co-gai-cute.jpeg"
                                fallback={images.noImage}
                            />
                        ) : (
                            <button>
                                <FontAwesomeIcon
                                    className={CX('menu_button')}
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
