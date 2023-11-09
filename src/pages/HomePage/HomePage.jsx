import "./HomePage.scss";
import HomeMenu from '../../components/Menu/HomeMenu';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import ProductCategory from '../../components/ProductCategory/ProductCategory'
import SuggestedProductCard from '../../components/ProductDetails/ProductOverview/SuggestedProductCard/SuggestedProductCard';

export default function HomePage () {
    return (
        <section className="home-page">            
	        <HomeMenu />
       
            <div className="hero-text">
                <h2>Hi, Andrea</h2>
                <span>What are you looking for today?</span>
            </div>
            <SearchComponent />
            <main className='home-page__main'>
                <ProductCategory/>

                <div className="product-overview__more-products">
                  <div className="product-overview__more-products__heading-container">
                        <h3 className="heading">another product</h3>
                        <a href="#">see all</a>
                   </div>
                    <ul className="product-overview__more-products__more-product-list">
                        <SuggestedProductCard></SuggestedProductCard>
                        <SuggestedProductCard></SuggestedProductCard>
                        <SuggestedProductCard></SuggestedProductCard>
                        <SuggestedProductCard></SuggestedProductCard>
                    </ul>
                </div>
            
            </main>



        </section>
    )
}