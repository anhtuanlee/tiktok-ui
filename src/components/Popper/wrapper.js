import classNames from 'classnames/bind';
import styles from './wrapper.module.scss';
import PropTypes from 'prop-types';
const CX = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={CX('wrapper')}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Wrapper;
