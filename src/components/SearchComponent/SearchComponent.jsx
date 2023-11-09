import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchComponent.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchComponent() {
    const [searchValue, setSearchValue] = useState('');

    function inputHandler(event) {
        setSearchValue(() => event.target.value);
        console.log(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        setSearchValue(() => '');
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <label htmlFor="searchInput" className="visually-hidden">Search for Products</label>
            <FontAwesomeIcon className="search-bar__icon" aria-hidden="true" icon={faSearch} />
            <input type="text" id="searchInput" value={searchValue} onChange={inputHandler} placeholder="Search headphone" aria-label='search' aria-autocomplete='list'/>
        </form>
    )
}