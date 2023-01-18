import Tippy from '@tippyjs/react/headless'; // phai them headless
import classNames from 'classnames/bind';

import styles from './MenuPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';

const CX = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], title, onHandle = defaultFn }) {
    const [itemChildren, setItemChildren] = useState([{ data: items }]);
    const currentItem = itemChildren[itemChildren.length - 1];

    const handleBack = () => {
        setItemChildren((prev) => prev.slice(0, itemChildren.length - 1));
    };
    const renderItem = currentItem.data.map((item, index) => {
        const isChildren = !!item.children;
        const Child = item.children;

        return (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isChildren) {
                        setItemChildren((prev) => [...prev, Child]);
                    } else {
                        onHandle(item);
                    }
                }}
            />
        );
    });
    return (
        <Tippy
            placement="bottom-end"
            interactive
            offset={[8, 10]}
            onHide={() => {
                setItemChildren((prev) => prev.slice(0, 1));
            }}
            delay={[0, 800]}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={CX('menu_container')} {...attrs} tabIndex="-1">
                        {itemChildren.length > 1 && (
                            <HeaderMenu title={title} handleBack={handleBack} />
                        )}
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
