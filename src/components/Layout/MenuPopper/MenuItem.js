import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';

import Button from '../../../Button';

const CX = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = CX('item_menu', {
        saparete: data.saparete,
    });
    return (
        <div className={classes}>
            <Button Icons={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
