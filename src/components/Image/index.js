import PropTypes from 'prop-types';
import images from '../../assets/images';
import { forwardRef, useState } from 'react';

const Image = forwardRef(function Image(
    { src, fallback = images.imageDefaultUser, ...props },
    ref,
) {
    // đặt mặc định của fallback là imgdefault. Nếu có nó sẽ lấy fallback được truyền qua
    const [fall, setFall] = useState('');
    const handleError = () => {
        setFall(fallback);
    };
    return <img ref={ref} {...props} src={fall || src} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
