import './FilterCategory.scss';

function FilterCategory(){
    return(
        <div className='filter'>
            <div className='filter__btn'>
                <img src="./assets/images/sliders.svg"></img>
                <span>Filter</span>
            </div>
            <ul className='filter__list'>
                <li><a href="#" className='filter__list__item'>Popularity</a></li>
                <li><a href="#" className='filter__list__item'>Newest</a></li>
                <li><a href="#" className='filter__list__item'>Most Expensive</a></li>
                <li><a href="#" className='filter__list__item'>Most Reviewed</a></li>
            </ul>
        </div>
    )
}

export default FilterCategory;
