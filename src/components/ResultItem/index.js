import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './ResultItem.module.scss'

const cx = classNames.bind(styles);

function ResultItem() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
            <h4 className={cx('result-title')}>hoa cỏ lau remix</h4>
        </div>
    );
}

export default ResultItem;