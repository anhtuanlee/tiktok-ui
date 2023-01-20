import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AccountPopper } from '../../../AccountSearchPopper';
import { PopperWrapper } from '../../../Popper';
import styles from './Search.module.scss';
import { useDebounce } from '../../../hooks';
const CX = classNames.bind(styles);

function Search() {
    const [searchVisible, setSearchVisible] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    const handleTextValue = (e) => {
        setSearchValue(e.target.value);
        setShowResult(true);
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchVisible([]);
    };
    const handleFocus = () => {
        if (!searchValue) {
            setSearchVisible([]);
        }
        setShowResult(true);
    };
    const handleClickOutSide = () => {
        setShowResult(false);
    };
    useEffect(() => {
        if (!debounce.trim()) {
            setShowResult(false);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debounce,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setSearchVisible(res.data);
            });
    }, [debounce]);
    return (
        <Tippy
            interactive={true}
            visible={showResult && searchVisible.length > 1}
            onClickOutside={handleClickOutSide}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={CX('search_result')} {...attrs} tabIndex="-1">
                        <div className={CX('search_title')}> Account</div>
                        {searchVisible.map((result) => {
                            return <AccountPopper key={result.id} result={result} />;
                        })}
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={CX('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => handleTextValue(e)}
                    onFocus={handleFocus}
                    placeholder="Search account and video"
                    spellCheck={false}
                />
                {searchValue && !loading && (
                    <button onClick={handleClear} className={CX('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={CX('loading')} icon={faSpinner} />}
                <button className={CX('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
