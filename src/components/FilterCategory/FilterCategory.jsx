import './FilterCategory.scss';

function FilterCategory(){
    return(
        <div className='filter'>
            <div role="button" aria-haspopup="true" aria-expanded="false" aria-controls='filter-container' className='filter__btn' tabIndex="0">
                <span className=' filter__btn__icon filter__btn__count--active '><img src="./assets/images/sliders.svg" alt="filter icon"/></span>
                <span className='filter__btn__count'>2</span>
                <span>Filter</span>
            </div>
            <ul role="list-box" className='filter__list'>
                <li role="option"><a href="#" aria-label="sort by popularity" title="sort by popularity" className='filter__list__item'>Popularity</a></li>
                <li role="option"><a href="#" aria-label="sort by newest" title="sort by newest" className='filter__list__item'>Newest</a></li>
                <li role="option"><a href="#" aria-label="sort by price" title="sort by price" className='filter__list__item'>Most Expensive</a></li>
                <li role="option"><a href="#" aria-label="sort by review" title="sort by review" className='filter__list__item'>Most Reviewed</a></li>
            </ul>
        </div>
    )
}

export default FilterCategory;
