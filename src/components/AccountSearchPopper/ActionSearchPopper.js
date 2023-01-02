import classNames from 'classnames/bind';
import styles from './AccountSearchPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const CX = classNames.bind(styles);

function AccountSearchPopper({ children }) {
    return (
        <div className={CX('wrapper')}>
            <div className={CX('info')}>
                <img
                    className={CX('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/084e41888e0caac8db348af1c839b223~c5_300x300.webp?x-expires=1672822800&x-signature=Y5HSqEWcdGyFSEr9ERjf58sOJEk%3D"
                    alt="Hoa"
                />
                <div className={CX('account')}>
                    <div className={CX('name_account')}>
                        Nguyen Hoai Ngoc
                        <FontAwesomeIcon icon={faCircleCheck} className={CX('check')} />
                    </div>
                    <span className={CX('user_account')}>User1</span>
                </div>
            </div>
        </div>
    );
}

export default AccountSearchPopper;
