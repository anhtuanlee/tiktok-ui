import classNames from 'classnames/bind';
import styles from './AccountSearchPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';
const CX = classNames.bind(styles);

function AccountSearchPopper({ result }) {
    return (
        <Link to={`/${result.nickname}`} className={CX('wrapper')}>
            <div className={CX('info')}>
                <Image className={CX('avatar')} src={result.avatar} />
                <div className={CX('account')}>
                    <div className={CX('name_account')}>
                        {result.full_name}
                        <FontAwesomeIcon icon={faCircleCheck} className={CX('check')} />
                    </div>
                    <span className={CX('user_account')}>{result.nickname}</span>
                </div>
            </div>
        </Link>
    );
}

export default AccountSearchPopper;
