import ProductCategory from '../../components/ProductCategory/ProductCategory'
import "./HomePage.scss";
import '../../components/ProductDetails/ProductOverview/ProductOverview.scss';
import SearchComponent from '../../components/SearchComponent/SearchComponent';

export default function HomePage () {
    return (
        <section className="home-page">

            <div className='forDesignPurposeOnly'>Logo</div>

            {/* The Two element named "forDesignPurposeOnly" and "forDesignPurposeOnly2" are dummy component for design purpose only
                both are assigned to other people in team. Beacuse their code have some issue i didn't integrate them in home page.
                their CSS code is defined in HomePage.scss , So, plz don't onsoider while reviewing
            */}
            <div className="hero-text">
                <h2>Hi, Andrea</h2>
                <span>What are you looking for today?</span>
            </div>
            <SearchComponent />
            <main className='home-page__main'>
                <ProductCategory/>

                <div className='forDesignPurposeOnly2'>
                    <div className="fdp2-heading">
                        <h3>Featiure products</h3>
                        <span>See All</span>
                    </div>
                    <div className="fd2-product">
                        <div className="fd2-product-item">
                            <img src="assets/images/productImages/suggestedProductImage1.png" alt="" />
                            <span className="name">TMA WIRELESS</span>
                            <span className="price">USD350</span>
                        </div>
                        <div className="fd2-product-item">
                            <img src="assets/images/productImages/suggestedProductImage1.png" alt="" />
                            <span className="name">TMA WIRELESS</span>
                            <span className="price">USD350</span>
                        </div>
                        <div className="fd2-product-item">
                            <img src="assets/images/productImages/suggestedProductImage1.png" alt="" />
                            <span className="name">TMA WIRELESS</span>
                            <span className="price">USD350</span>
                        </div>
                    </div>
                </div>
            
            </main>



        </section>
    )
}