import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faPlus, faSpinner, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import ResultItem from '~/components/ResultItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        leftIcon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Dark mode',
        rightIcon: <FontAwesomeIcon icon={faToggleOff} />
    },
]

function Header() {

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    //Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

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
                                <div >
                                    <ResultItem />
                                    <ResultItem />
                                    <ResultItem />
                                    <ResultItem />
                                    <ResultItem />
                                </div>
                                <div >
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
                    <Button reset to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />} inlineFlex>Upload</Button>
                    <Button primary inlineFlex>Log in</Button>


                    <Menu
                        items={MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        <button className={cx('more-button')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>

                </div>
            </div>
        </header>
    );
}

export default Header;