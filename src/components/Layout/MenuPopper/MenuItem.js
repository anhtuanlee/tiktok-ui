import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';

import Button from '../../../Button';

const CX = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={CX('item_menu')}>
            <Button leftIcon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
