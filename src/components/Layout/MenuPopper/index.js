import Tippy from '@tippyjs/react/headless'; // phai them headless
import classNames from 'classnames/bind';

import styles from './MenuPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';

const CX = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = items.map((item, index) => {
        return <MenuItem key={index} data={item} />;
    });
    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[0, 800]}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={CX('menu_container')} {...attrs} tabIndex="-1">
                        {renderItem}
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
