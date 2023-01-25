import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
import PropTypes from 'prop-types';
import Button from '../../Button';

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
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default MenuItem;
