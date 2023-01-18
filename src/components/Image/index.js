import { forwardRef, useState } from 'react';
import images from '../../assest/images';

function Image({ src, fallback = images.imageDefaultUser, ...props }, ref) {
    // đặt mặc định của fallback là imgdefault. Nếu có nó sẽ lấy fallback được truyền qua
    const [fall, setFall] = useState('');
    const handleError = () => {
        setFall(fallback);
    };
    return <img ref={ref} {...props} src={fall || src} onError={handleError} />;
}

export default forwardRef(Image);
