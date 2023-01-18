import classNames from 'classnames/bind';
import styles from './AccountSearchPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const CX = classNames.bind(styles);

function AccountSearchPopper({ children }) {
    return (
        <div className={CX('wrapper')}>
            <div className={CX('info')}>
                <Image
                    className={CX('avatar')}
                    src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
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
