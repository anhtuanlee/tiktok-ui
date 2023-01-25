import Header from '../components/Header';
import PropTypes from 'prop-types';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnly;