import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    reset = false,
    small = false,
    large = false,
    disabled = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...otherProps }) {

    let Comp = 'button';
    const props = {
        onClick,
        ...otherProps,
    }

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        reset,
        small,
        large,
        disabled,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;