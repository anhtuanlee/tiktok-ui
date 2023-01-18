import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './MenuPopper.module.scss';

const CX = classNames.bind(styles);

function HeaderMenu({ title, handleBack }) {
    return (
        <div className={CX('header_container')}>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className={CX('header_icon_back')}
                onClick={handleBack}
            />
            <span className={CX('header_content')}>{title}</span>
        </div>
    );
}

export default HeaderMenu;
