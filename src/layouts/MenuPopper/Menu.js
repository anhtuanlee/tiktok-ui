import Tippy from '@tippyjs/react/headless'; // phai them headless
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './MenuPopper.module.scss';

import { useState } from 'react';
import { PopperWrapper } from '../../components/Popper';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';

const CX = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onHandle = defaultFn }) {
    const [itemChildren, setItemChildren] = useState([{ data: items }]);
    const currentItem = itemChildren[itemChildren.length - 1];
    const [currentTitle, setCurrentTitle] = useState('');

    const handleBack = () => {
        setItemChildren((prev) => prev.slice(0, itemChildren.length - 1));
    };
    const handleResetMenu = () => {
        setItemChildren((prev) => prev.slice(0, 1));
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
                        setCurrentTitle(item.title);
                        setItemChildren((prev) => [...prev, Child]);
                    } else {
                        onHandle(item);
                    }
                }}
            />
        );
    });
    const renderResult = (attrs) => (
        <PopperWrapper>
            <div className={CX('menu_container')} {...attrs} tabIndex="-1">
                {itemChildren.length > 1 && (
                    <HeaderMenu title={currentTitle} handleBack={handleBack} />
                )}
                <div className={CX('menu_body')}>{renderItem}</div>
            </div>
        </PopperWrapper>
    );
    return (
        <Tippy
            placement="bottom-end"
            hideOnClick={false}
            interactive
            offset={[8, 10]}
            onHide={handleResetMenu}
            delay={[0, 800]}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    title: PropTypes.string,
    onHandle: PropTypes.func,
};
export default Menu;
