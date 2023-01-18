import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuestionAndFeedback, UserIconHeader } from '../components/Icons';
const CX = classNames.bind(styles);

function Button({
    children,
    to = false,
    href = false,
    primary,
    border,
    text,
    rounded,
    intoTop,
    //disabled button
    disabled,
    // spacer margin button
    leftIcon = false,
    rightIcon = false,
    Icons,
    sizes,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        // attribute
        onClick,
        ...passProps,
    };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = CX('wrapper', sizes, {
        //style
        primary,
        border,
        text,
        rounded,
        intoTop,
        //disabled
        disabled,
        //Spacer Icon
        sizes,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && (
                <span>
                    <FontAwesomeIcon className={CX('icon_left')} icon={leftIcon} />
                </span>
            )}

            {Icons && (
                <span>
                    <Icons classes={CX('icon_header_tippy')} />
                </span>
            )}
            {children}
            {rightIcon && (
                <span>
                    <FontAwesomeIcon className={CX('icon_right')} icon={rightIcon} />
                </span>
            )}
        </Comp>
    );
}

export default Button;
