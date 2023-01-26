import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderTippy from '@tippyjs/react/';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import Button from '../../../Button';
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
} from '../../../components/Icons';
import Image from '../../../components/Image';
import config from '../../../config';
import Menu from '../../MenuPopper';
import Search from '../Search';
const CX = classNames.bind(styles);

function Header() {
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
            to: config.routes.feedback,
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
            to: config.routes.profile,
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

    return (
        <header className={CX('wrapper')}>
            <div className={CX('inner')}>
                <div>
                    <Link className={CX('logo')} to={config.routes.home}>
                        <Image src={images.logo} alt="TikTok" fallback={images.noImage} />
                    </Link>
                </div>
                <Search />
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

                    <Menu items={userLogin ? USER_ITEMS : MENU_ITEMS} onHandle={onHandle}>
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
