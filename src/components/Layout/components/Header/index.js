import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import ResultItem from '~/components/ResultItem';
import Button from '~/components/Button';


const cx = classNames.bind(styles)


function Header() {

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a className={cx('logo')} href="/" >
                    <img src={images.logo} alt="Tiktok" />
                </a>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('result-wrap')}>
                                    <ResultItem />
                                    <ResultItem />
                                    <ResultItem />
                                    <ResultItem />
                                    <ResultItem />
                                </div>
                                <div className={cx('result-wrap')}>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <form className={cx('search')}>
                        <input type="text" placeholder='Search' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} spin />
                        <span className={cx('span-spliter')}></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </Tippy>
                <div className={cx('action')}>
                    <Button reset to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                    <Button primary >Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;