import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const [title, setTitle] = useState([])

    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children


            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                    setTitle(prev => [...prev, item.children.title])
                } else {
                    onChange(item)
                }
            }} />
        }

        )
    }

    return (
        <Tippy
            visible
            placement='bottom-end'
            interactive
            delay={[0, 700]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={title[title.length - 1]} onBack={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                            setTitle((prev) => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >

            {children}
        </Tippy>
    );
}

export default Menu;