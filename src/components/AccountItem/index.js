import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1685678400&x-signature=qg3uRJ12m5lxHXhPDPolo3pNIyA%3D" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>hoa_2309</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;